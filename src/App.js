import React from 'react';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import RandomActivity from './components/RandomActivity';

const App = () => {
  return (
    <>
      <RandomActivity />
      <TodoInput />
      <TodoList />
    </>
  );
};

export default App;
