import React from "react";
import TodoItem from "./TodoItem";
// import "./css/TodoList.css";
import styled from 'styled-components';

const StyledTodoList = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
`;


const TodoList = ({ todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => {
  return (
    <StyledTodoList>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </StyledTodoList>
  )
}

export default TodoList;