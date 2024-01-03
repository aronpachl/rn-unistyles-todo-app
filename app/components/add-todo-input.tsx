import React from 'react';

import { Input } from './ui/input';
import { useTodo$ } from '../stores/todo-store';

const placeholderTexts = [
  'Buy milk...',
  'Do laundry...',
  'Clean the house...',
  'Walk the dog...',
  'Read a book...',
  'Learn React Native...',
  'Learn Unistyles...',
  'Learn Expo...',
];

const randomPlaceholderText = placeholderTexts[Math.floor(Math.random() * placeholderTexts.length)];

export const AddTodoInput = React.memo(function AddTodoInput() {
  const addTodo = useTodo$((s) => s.addTodo);
  const [input, setInput] = React.useState('');

  return (
    <Input
      autoFocus
      placeholder={randomPlaceholderText}
      defaultValue={input}
      autoCorrect={false}
      onChangeText={setInput}
      onSubmitEditing={() => {
        addTodo(input);
        setInput('');
      }}
    />
  );
});
