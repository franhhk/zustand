import React, { useState, ChangeEvent } from 'react';

import useStore from '../hooks/useStore';

const TodoInput = () => {
  const [todoText, setTodoText] = useState('');
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value);

  const { addTodo } = useStore();
  const handleAddTodo = () => {
    addTodo(todoText);
  };

  return (
    <>
      <h3>할 일 추가하기</h3>

      <div>
        <input onChange={handleInput} />

        <button type='button' onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </>
  );
};

export default TodoInput;
