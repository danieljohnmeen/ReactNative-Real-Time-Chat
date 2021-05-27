import React from 'react';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import { screenOptions } from './options';
import { Settings } from '../screens/Settings';

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={Routes.SettingsNavigator}
      screenOptions={screenOptions(colors)}
    >
      <Stack.Screen name={Routes.Settings} component={Settings} />
    </Stack.Navigator>
  );
};
