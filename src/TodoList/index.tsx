import React, { useState, ChangeEvent } from 'react';

import useStore from './useStore';

const TodoList = () => {
  const [todoText, setTodoText] = useState('');
  const { addTodo, removeTodo, toggleCompleted, todos } = useStore();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value);
  const handleAddTodo = () => {
    addTodo(todoText);
  };
  const handleRemoveTodo = (id: string) => () => {
    removeTodo(id);
  };

  return (
    <div>
      <h3>할 일 추가하기</h3>

      <div>
        <input onChange={handleInput} />
        <button type='button' onClick={handleAddTodo}>
          Add
        </button>
      </div>

      {todos.map(({ id, description, hasCompleted }) => (
        <div key={id}>
          <input type='checkbox' checked={hasCompleted} onChange={() => toggleCompleted(id)} />
          <span key={id}>{description}</span>
          <button type='button' onClick={handleRemoveTodo(id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
