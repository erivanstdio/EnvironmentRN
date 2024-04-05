import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { DrawerRoute } from './drawer.routes';

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName='Drawer'>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen name='Drawer' component={DrawerRoute} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};