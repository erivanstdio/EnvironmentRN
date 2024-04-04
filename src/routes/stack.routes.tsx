import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { DrawerRoute } from './drawer.routes';

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName='Drawer'
      // mode='card'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'grey'
        },
        headerBackTitle: 'Go Back',
        headerTintColor: 'white',
        // cardStyle: {
        //   backgroundColor: 'blue'
        // },
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen name='Drawer' component={DrawerRoute} options={{ headerShown: false, title: '' }} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};