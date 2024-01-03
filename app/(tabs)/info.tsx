import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Screen } from '../components/ui/screen';
import { Text } from '../components/ui/text';
import { YStack } from '../components/ui/y-stack';

export default function Info() {
  const { styles } = useStyles(info);

  return (
    <Screen contentPosition="center">
      <YStack style={styles.container}>
        <Text fs="h1" fw="bold" style={styles.title}>
          Info screen
        </Text>
        <Text fs="description" style={styles.description}>
          This is app is just a basic todo app with the purpose of playing around with Unistyles
        </Text>
      </YStack>
    </Screen>
  );
}

const info = createStyleSheet({
  container: {
    gap: 16,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    maxWidth: '75%',
    textAlign: 'center',
  },
});
