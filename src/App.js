import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext'

const GlobalStyle = createGlobalStyle`
  body {
    background: url('background.jpg');
  }
`;

function App() {
  return (
    <div>
      <TodoProvider>
        <GlobalStyle />

        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
        
      </TodoProvider>
    </div>
  );
}

export default App;
