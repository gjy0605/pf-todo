import React, { useState } from 'react';
import Template from './Template';
import TodoList from './TodoList';
import TodoInsert from './TodoInsert';
import { SiAddthis } from 'react-icons/si';
import styled from 'styled-components';

const StyledTodoComp = styled.div`

  width: 800px;
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-color: red;
  scrollbar-width: thin;
  /* border: 1px solid #eeeeee; */
  border-radius: 20px;
  position: relative;
  ::-webkit-scrollbar
  {border-radius: 10px;
    width: 10px;
  };
  /* ::-webkit-scrollbar-track
  {border-radius: 10px;
    background-color: rgba(210, 214, 219,0.1)
  }; */
  ::-webkit-scrollbar-thumb
  {border-radius: 10px;
    background-color: rgba(210, 214, 219, 0.3);
  };

  .add-todo-button {
    position: fixed;
    right: 45%;
    bottom: 5%;
    z-index: 100;
    width: 100px;
    height: 100px;
    cursor: pointer;
    font-size: 4rem;
    color: #F2CB05;
    transition: 0.5s ease;
    :hover {
      color: #238C6E;
    }
}
`

let nextId = 2;
const TodoComp = () => {
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "여기에 할 일이 나와요! 내용을 클릭해서 수정과 삭제를 해보세요!",
      checked: false,
    },
  ]);
  const [insertToggle, setInsertToggle] = useState(false);
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null)
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert('할 일을 입력해주세요.')
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)
  }

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }
  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, text } : todo))
  }
  return (
    <StyledTodoComp>
      <Template todoLength={todos.length}>
        <TodoList
          todos={todos}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
        <div className='add-todo-button' onClick={onInsertToggle}>
          <SiAddthis />
        </div>
        {insertToggle && (
          <TodoInsert
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
      </Template>
    </StyledTodoComp>
  );
};

export default TodoComp;
