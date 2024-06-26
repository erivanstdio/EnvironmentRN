import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackRoutes } from './stack.routes';
import { AuthRoutes } from './auth.routes';

export const Routes: React.FC = () => {

	// TODO: configure user using context
  const user = true;

	return (
		<NavigationContainer>
			{user ? <StackRoutes /> : <AuthRoutes />}
		</NavigationContainer>
	);
};