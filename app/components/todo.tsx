import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Checkbox from './ui/checkbox';
import { Text } from './ui/text';
import { XStack } from './ui/x-stack';
import { Todo as TodoType, useTodo$ } from '../stores/todo-store';

type Props = {
  item: TodoType;
};

export function Todo({ item }: Props) {
  const [removeTodo, toggleTodo] = useTodo$((s) => [s.removeTodo, s.toggleTodo]);
  const { styles } = useStyles(todo, {
    completed: item.completed ? 'completed' : 'uncompleted',
  });

  const handleToggle = () => {
    toggleTodo(item.id);
  };

  const handleDeletePress = () => {
    removeTodo(item.id);
  };

  return (
    <XStack style={styles.container}>
      <Checkbox checked={item.completed} onCheckChange={handleToggle} style={styles.icon} />
      <Text selectable style={styles.text}>
        {item.title}
      </Text>
      <Pressable style={styles.deleteIconWrapper} onPress={handleDeletePress} hitSlop={5}>
        <MaterialCommunityIcons name="trash-can-outline" size={24} style={styles.deleteIcon} />
      </Pressable>
    </XStack>
  );
}

const todo = createStyleSheet((theme) => ({
  container: {
    padding: theme.margins.md,
  },
  deleteIconWrapper: {
    marginLeft: 'auto',
  },
  deleteIcon: {
    color: theme.colors.accent,
  },
  text: {
    variants: {
      completed: {
        uncompleted: {},
        completed: {
          textDecorationLine: 'line-through',
          fontStyle: 'italic',
        },
      },
    },
  },

  icon: {
    color: theme.colors.accent,
  },
}));
