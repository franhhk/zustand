import React from 'react';

import TodoList from './TodoList/index';
import RandomActivity from './RandomActivity';

const App = () => {
  return (
    <>
      <RandomActivity />
      <TodoList />
    </>
  );
};

export default App;
