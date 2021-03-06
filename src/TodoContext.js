import React, { useReducer, createContext, useContext, useRef  } from 'react';

// 초기값
const initialTodos = [
  {
    id: 1,
    text: '아침 요가 다녀오기',
    done: 'true'
  },
  {
    id: 2,
    text: 'React 공부하기',
    done: 'true'
  }
]

function todoReducer (state, action) {
  switch (action.type) {
    case 'CREATE' : 
      return state.concat(action.todo);
    case 'TOGGLE' :
      return state.map(todo =>
        todo.id === action.id ? {...todo, done: !todo.done} : todo)
    case 'REMOVE' :
      return state.filter(todo => todo.id !== action.id) 
  
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(3); // 새로운 항목을 추가할 때 사용할 고유 id 

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState(){
  return useContext(TodoStateContext)
}

export function useTodoDispatch(){
  return useContext(TodoDispatchContext)
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext)
}