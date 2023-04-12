import React from "react";
import TodoInsert from "./TodoInsert";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { FaTrashAlt } from 'react-icons/fa'
import { ImPencil2 } from "react-icons/im"
import styled from "styled-components"



const TodoItem = ({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo, value, onUpdate, onRemove }) => {
  const { id, text, checked, } = todo;

  return (
    <StyledTodoItem className="TodoItem">
      <div className={`content ${checked ? 'checked' : ''}`}>
        <span className="checkIcon">
          {checked ? (
            <RiCheckboxCircleFill
              onClick={() => {
                onCheckToggle(id)
              }} />
          ) : (
            <RiCheckboxBlankCircleLine
              onClick={() => {
                onCheckToggle(id)
              }}
              className="RiCheckboxBlankCircleLine"
            />
          )}
        </span>
        <div className="text" onClick={() => {
          onChangeSelectedTodo(todo)
          onInsertToggle()
        }}>
          {text}
        </div>
        <div className="editIcon">
          <span onClick={() => onUpdate(todo.id,)} ><ImPencil2 /></span>
          <span onClick={() => onRemove(todo.id)} ><FaTrashAlt /></span>
        </div>
      </div>
    </StyledTodoItem>
  )
}

export default TodoItem;

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
    align-items: stretch;
  }
  .content .checkIcon{
    font-size: 1.4em;
  }
  .content .text {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    flex: 1;
  }
  .checked .checkIcon svg{
    color: rgb(115, 88, 92);
  }
  .content.checked .text{
    color: rgb(115, 88, 92);
    text-decoration: line-through;
    cursor: pointer;
    opacity: 0.6;
  }

  .editIcon{
    width: 8%;
    display: flex;
    justify-content: space-between;
    span{
      font-size: 1.3em;
      :hover{
        color:#238C6E;
      }
    }

  }
`