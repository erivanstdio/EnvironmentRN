import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../pages/Home';
import { History } from '../pages/History';
import { Profile } from '../pages/Profile';
import { SearchRepo } from '../pages/SearchRepo';

const Drawer = createDrawerNavigator();

export const DrawerRoute: React.FC = () => (
<>
    <Drawer.Navigator
      // drawerContent={(props: DrawerContentComponentProps) => <Sidebar {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen
				name='Home'
				component={Home}
				options={{
					title: 'AppName',
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
			<Drawer.Screen name='SearchRepo' 
				component={SearchRepo}
				options={{
					title: 'List Github Repositories',
					// headerTitle: function render() {
					// 	return (
					// 		<Logo size={3.5} mode='light' />
					// 	);
					// },
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#333',
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0
					},
					headerTintColor: 'white'
				}} 
			/>
    </Drawer.Navigator>
    </>
);