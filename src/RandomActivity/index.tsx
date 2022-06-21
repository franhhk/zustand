import React from 'react';

import { useSuggestActivityQuery } from './useSuggestActivityQuery';
import useStore from '../hooks/useStore';

const RandomActivity = () => {
  const { data, isSuccess, refetch } = useSuggestActivityQuery();
  const randomActivity = data?.data.activity;

  const { addTodo } = useStore();
  const handleAddTodo = () => {
    addTodo(randomActivity);
  };

  const handleRefresh = () => refetch();

  return isSuccess ? (
    <div>
      <h3>오늘 이런 건 어때요?</h3>

      <span>{randomActivity} </span>

      <button type='button' onClick={handleAddTodo}>
        Add
      </button>

      <button type='button' onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  ) : (
    <div>Error</div>
  );
};

export default RandomActivity;
