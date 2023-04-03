import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { ImPencil2 } from "react-icons/im"
import { TbTrashX } from "react-icons/tb"
import "./TodoInsert.css"

const TodoInsert = ({ onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate }) => {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text)
    }
  }, [selectedTodo])
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={selectedTodo ? () => { onUpdate(selectedTodo.id, value) } : onSubmit}>
        <input
          placeholder="내용을 입력해주세요!"
          value={value}
          onChange={onChange}
        ></input>
        {selectedTodo ? (
          <div className="rewrite">
            <TbTrashX onClick={() => onRemove(selectedTodo.id)} />
            <ImPencil2 onClick={() => onUpdate(selectedTodo.id, value)} />
          </div>
        ) : (
          <button type="submit" >
            <MdAddCircle />
          </button>
        )}
      </form>
    </div >
  );
};

export default TodoInsert;