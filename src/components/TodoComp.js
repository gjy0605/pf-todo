import React, { useState, useEffect } from 'react';
import Template from './Template';
import TodoList from './TodoList';
import TodoInsert from './TodoInsert';
import { SiAddthis } from 'react-icons/si';
import styled from 'styled-components';
const StyledTodoComp = styled.div`
  margin: auto;
  width: 800px;
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-color: red;
  scrollbar-width: thin;
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


const TodoComp = (todo) => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [insertToggle, setInsertToggle] = useState(false);
  // const [uncheckedTodos, setUncheckedTodos] = useState(1);
  const [nextId, setNextId] = useState(1);
  useEffect(() => {
    fetch('http://localhost:3001/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(todos => {
        setTodos(todos);
        // setUncheckedTodos(todos.filter(todo => !todo.checked).length);
      })
      .catch(error => console.error(error));
  }, []);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null)
    }
    setInsertToggle(!insertToggle);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert('할 일을 입력해주세요.')
    } else {
      const todo = {
        key: nextId,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      setNextId(nextId + 1);
      // setUncheckedTodos(uncheckedTodos => uncheckedTodos + 1);
      fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

    }
  };

  const onCheckToggle = (id, checked) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, checked: !checked } : todo)));
    // setUncheckedTodos(uncheckedTodos =>
    //   checked ? uncheckedTodos - 1 : uncheckedTodos + 1
    // );

    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked })
    })
      .then(res => res.json())
      .catch(error => console.error(error));
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)
  }

  const onRemove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
    // setUncheckedTodos(uncheckedTodos => uncheckedTodos - 1);
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .catch(error => console.error(error));
  }

  const onUpdate = (id, text) => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, text } : todo))
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    })
      .then(res => res.json())
  }
  const uncheckedTodos = todos.filter(todo => !todo.checked).length;

  return (
    <StyledTodoComp>
      <Template todoLength={todos.length} uncheckedTodos={uncheckedTodos}>
        <TodoList
          todos={todos}
          key={todos.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
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
    </StyledTodoComp >
  );
};


export default TodoComp;
