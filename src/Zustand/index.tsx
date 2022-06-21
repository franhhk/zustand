import React, { useState, ChangeEvent } from 'react';

import useStore from './useStore';

const Zustand = () => {
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
      Zustand
      <input onChange={handleInput} />
      <button type='button' onClick={handleAddTodo}>
        Add
      </button>
      {todos.map(({ id, description, hasCompleted }) => (
        <>
          <p key={id}>{description}</p>
          <input type='checkbox' checked={hasCompleted} onChange={() => toggleCompleted(id)} />
          <button type='button' onClick={handleRemoveTodo(id)}>
            Remove
          </button>
        </>
      ))}
    </div>
  );
};

export default Zustand;
