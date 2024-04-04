import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../pages/SignIn';
import { Password } from '../pages/SignIn/Password';
import { StatusBar } from 'react-native';

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FC = () => (
	<>
		<StatusBar barStyle='dark-content' backgroundColor='transparent' />
		<Auth.Navigator
			initialRouteName='SignIn'
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: 'black' }
			}}
		>
			<Auth.Screen name='SignIn' component={SignIn} />
			<Auth.Screen name='Password' component={Password} />
		</Auth.Navigator>
	</>
);