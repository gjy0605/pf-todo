import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { ImPencil2 } from "react-icons/im"
import { TbTrashX } from "react-icons/tb"
import styled from "styled-components";
// import "./css/TodoInsert.css"

const StyledTodoInsert = styled.div`
.background {
  position: fixed;
  z-index: 980;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(1, 1, 1, 0.4)
}

form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  z-index: 990;
  width: 500px;
  height: 300px;
  padding: 10px;
  overflow: auto;
  border-radius: 5px;
  background-color: #ffffff;
  h2{
    font-size: 20px;
    margin: 10px 0;
  };
  textarea {
    background-color: #ffffff;
    border: 2px solid #cccccc;
    color: #333333;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 4px;
    line-height: 1.5em;
    width: 100%;
    height: 60%;
    word-wrap: break-word;
    overflow-wrap: break-word; 
    resize: none;
    ::placeholder{
      color:#bbb
    }
  };
  button {
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 0;
    background: none;
    outline: none;
    border: none;
    color: pink;
    font-size: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s ease;
  };
  .rewrite{
    color: pink;
    font-size: 1.5rem;
    cursor: pointer;
  }
}

`

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
    <StyledTodoInsert>
      <div className="background" onClick={onInsertToggle}></div>

      <form onSubmit={selectedTodo ? () => { onUpdate(selectedTodo.id, value) } : onSubmit}>
        <h2>📝 오늘 할 일을 작성해주세요!</h2>
        <textarea
          value={value}
          onChange={onChange}
          placeholder="이곳에 내용을 입력해주세요!"
        />
        {selectedTodo ? (
          <div className="rewrite">
            <TbTrashX onClick={() => onRemove(selectedTodo.id)} />
            <ImPencil2 onClick={() => onUpdate(selectedTodo.id, value)} />
          </div>
        ) : (
          <button type="submit" >
            <p>추가하기</p><MdAddCircle />
          </button>
        )}
      </form>
    </StyledTodoInsert >
  );
};

export default TodoInsert;