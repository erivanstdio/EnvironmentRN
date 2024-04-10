import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { DrawerRoute } from './drawer.routes';
import { SearchRepo } from '../pages/SearchRepo';

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
			<Stack.Screen name='SearchRepo' component={SearchRepo} />
    </Stack.Navigator>
  );
};