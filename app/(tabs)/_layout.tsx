import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { TextStyle } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome style={$icon} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
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
  );
}

const $icon: TextStyle = {
  marginBottom: -3,
};
