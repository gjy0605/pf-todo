import React from "react";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'
import "./TodoItem.css";

const TodoItem = ({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? (
          <MdOutlineCheckBox
            onClick={() => {
              onCheckToggle(id)
            }} />
        ) : (
          <MdOutlineCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id)
            }} />
        )}
        <div className="text"
          onClick={() => {
            onChangeSelectedTodo(todo)
            onInsertToggle()
          }}
        >
          {text}
        </div>
      </div>
    </div>
  )
}

export default TodoItem;  