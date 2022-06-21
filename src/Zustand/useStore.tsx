import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 } from 'uuid';

interface Todo {
  id: string;
  description: string;
  hasCompleted: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
}

const useStore = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (description: string) => {
          set((state) => ({
            todos: [
              ...state.todos,
              {
                id: v4(),
                description,
                hasCompleted: false,
              } as Todo,
            ],
          }));
        },
        removeTodo: (id) => {
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          }));
        },

        toggleCompleted: (id) => {
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? ({ ...todo, hasCompleted: !todo.hasCompleted } as Todo) : todo,
            ),
          }));
        },
      }),
      {
        name: 'food-storage', // unique name
        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
      },
    ),
  ),
);

export default useStore;
