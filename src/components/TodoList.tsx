import React from 'react';

import useStore from '../hooks/useStore';

const TodoList = () => {
  const { removeTodo, toggleCompleted, todos } = useStore();

  const handleRemoveTodo = (id: string) => () => {
    removeTodo(id);
  };

  return (
    <>
      {todos.map(({ id, description, hasCompleted }) => (
        <div key={id}>
          <input type='checkbox' checked={hasCompleted} onChange={() => toggleCompleted(id)} />
          <span key={id}>{description}</span>
          <button type='button' onClick={handleRemoveTodo(id)}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
