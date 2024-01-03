import { create } from 'zustand';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoBase = {
  todos: Todo[];
};

type TodoActions = {
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

type TodoStore = TodoBase & TodoActions;

export const useTodo$ = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (title: string) => {
    const todo = {
      id: Math.random().toString(),
      title,
      completed: false,
    };

    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
  toggleTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  },
  removeTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
}));
