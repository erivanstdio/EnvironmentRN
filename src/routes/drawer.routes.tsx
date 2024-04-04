import * as React from 'react';
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../pages/Home';
import { History } from '../pages/History';
import { Profile } from '../pages/Profile';
import { Sidebar } from '../components/UI/Sidebar';

const Drawer = createDrawerNavigator();

export const DrawerRoute: React.FC = () => (
<>
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => <Sidebar {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen
				name='Home'
				component={Home}
				options={{
					title: 'SalonRN',
					// headerTitle: function render() {
					// 	return (
					// 		<Logo size={3.5} mode='light' />
					// 	);
					// },
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: 'grey',
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0
					},
					headerTintColor: 'white'
				}}
			/>
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
    </>
);