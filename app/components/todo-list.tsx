import React from 'react';
import { FlatList, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Todo } from './todo';
import { useTodo$ } from '../stores/todo-store';

export function TodoList() {
  const { styles } = useStyles(list);
  const todos = useTodo$((s) => s.todos);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({ item }) => <Todo item={item} />}
      />
    </View>
  );
}

const list = createStyleSheet((theme) => ({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: theme.margins.lg,
  },
}));
