import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { AddTodoInput } from '../components/add-todo-input';
import { TodoList } from '../components/todo-list';
import { Screen } from '../components/ui/screen';
import { Text } from '../components/ui/text';

export default function Page() {
  const { styles } = useStyles(todo);

  return (
    <Screen>
      <Text fw="bold" fs="h1" style={styles.title}>
        My Tasks
      </Text>
      <AddTodoInput />
      <TodoList />
    </Screen>
  );
}

const todo = createStyleSheet((theme) => ({
  title: {
    marginTop: theme.margins.sm,
    marginBottom: theme.margins.xl,
  },
}));
