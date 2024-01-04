import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { createStyleSheet, UnistylesRuntime, useStyles } from 'react-native-unistyles';

function TabBarIcon(
  props: { name: React.ComponentProps<typeof FontAwesome>['name'] } & { focused: boolean }
) {
  const { styles } = useStyles(tabLayout);

  return <FontAwesome style={styles.icon(props.focused)} {...props} />;
}

export default function TabLayout() {
  const { styles, theme } = useStyles(tabLayout);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarLabelStyle: {
            color: theme.colors.primary,
          },
          tabBarActiveTintColor: 'black',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: 'Tasks',
            tabBarIcon: (props) => <TabBarIcon name="list" {...props} />,
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: (props) => <TabBarIcon name="star" {...props} />,
          }}
        />
        <Tabs.Screen
          name="info"
          options={{
            tabBarLabel: 'Info',
            tabBarIcon: (props) => <TabBarIcon name="info" {...props} />,
          }}
        />
      </Tabs>
      <Pressable
        style={styles.toggleThemeWrapper}
        onPress={() => {
          switch (UnistylesRuntime.themeName) {
            case 'light':
              return UnistylesRuntime.setTheme('dark');
            case 'dark':
              return UnistylesRuntime.setTheme('light');
          }
        }}>
        <FontAwesome name="adjust" size={24} style={styles.toggleThemeIcon} />
      </Pressable>
    </>
  );
}

const tabLayout = createStyleSheet((theme) => ({
  toggleThemeWrapper: {
    position: 'absolute',
    bottom: 100,
    right: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: (focused: boolean) => ({
    marginBottom: -3,
    color: theme.colors.primary,
    opacity: focused ? 1 : 0.5,
  }),

  toggleThemeIcon: {
    color: theme.colors.primary,
  },
}));
