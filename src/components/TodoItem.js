import React from "react";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
// import "./css/TodoItem.css";
import styled from "styled-components";

const StyledTodoItem = styled.div`
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    /* border-radius: 5px;
    box-shadow: 1px 2px 5px 1px pink; */
    padding: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dddddd;

  .TodoItem+.TodoItem {
    margin-top: 15px;
  }

  .content {
    cursor: pointer;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content svg {
    font-size: 1.5rem;
    color: #333333;
  }

  .content .text {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    flex: 1;
  }

  .content.checked .text {
    color: rgb(115, 88, 92);
    text-decoration: line-through;
    cursor: pointer;
    opacity: 0.6;
  }
`

const TodoItem = ({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => {
  const { id, text, checked } = todo;
  return (
    <StyledTodoItem className="TodoItem">
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? (
          <RiCheckboxCircleFill
            onClick={() => {
              onCheckToggle(id)
            }} />
        ) : (
          <RiCheckboxBlankCircleLine
            onClick={() => {
              onCheckToggle(id)
            }} />
        )}
        <div className="text"
          onClick={() => {
            onChangeSelectedTodo(todo)
            onInsertToggle()
          }}>
          {text}
        </div>
      </div>
    </StyledTodoItem>
  )
}

export default TodoItem;  