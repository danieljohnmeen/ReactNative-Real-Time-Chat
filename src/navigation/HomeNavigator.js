import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import RoomScreen from '../screens/RoomScreen';
import { logout } from '../api/firebaseAuthAPI';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6646ee',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
        },
      }}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <IconButton
              icon='logout-variant'
              size={24}
              color='#ffffff'
              onPress={() => logout()}
            />
          ),
          headerRight: () => (
            <IconButton
              icon='message-plus'
              size={24}
              color='#ffffff'
              onPress={() => navigation.navigate('AddRoom')}
            />
          ),
        })}
      />
      <Stack.Screen
        name='Room'
        component={RoomScreen}
        options={({ route }) => ({
          title: route.params.room.name,
        })}
      />
    </Stack.Navigator>
  );
}