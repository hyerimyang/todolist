import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  position: relative;
  width: 500px;
  height: 768px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateBlock>{children}</TodoTemplateBlock>
  )
}

export default TodoTemplate;