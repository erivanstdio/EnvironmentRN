import React from 'react';
import { DrawerCustomItem, DrawerScrollView } from './styles';
import { Text } from 'react-native';

type OptionsSidebarProps = {
	label: string;
	icon: string;
	screen: string;
	typeIcon: 'sofit' | 'fontAwesome' | 'antDesign' | 'material';
	permission?: boolean;
};

type Props = {
	navigation: Navigation;
};

type Navigation = {
	navigate: (route: string) => void;
};

export const Sidebar: React.FC<Props> = ({navigation}) => {

  const renderVersion = () => {

    return (
      <Text>
        1.0.0
      </Text>
    )
  }

  function onPress(screen: string) {

    navigation.navigate(screen);
  }
  

  const items: OptionsSidebarProps[] = [
		{
			label: 'Home',
			icon: 'appstore1',
			screen: 'Panel',
			typeIcon: 'antDesign',
			permission: true
		},
		{
			label: 'Profile',
			icon: 'clipboard-check',
			typeIcon: 'material',
			screen: 'Checklists',
			permission: true
		},
    {
			label: 'History',
			icon: 'clipboard-check',
			typeIcon: 'material',
			screen: 'Checklists',
			permission: true
		}
	];

  return (
    <>
			<DrawerScrollView>
				{items.map(({ label, icon, screen, permission, typeIcon }) => {
					return permission && (
						<DrawerCustomItem
							key={label}
							label={label}
							// icon={() => (
							// 	<IconContainer>
							// 		<CustomIcons
							// 			name={icon}
							// 			typeIcon={typeIcon}
							// 			color={light.colors.black_800}
							// 		/>
							// 	</IconContainer>
							// )}
							onPress={() => onPress(screen)}
						/>
					);
				})}
				{/* <DrawerCustomItem
					label='Exit'
					icon={() => (
						<IconContainer>
							<CustomIcons
								name='exit-to-app'
								color={light.colors.black_800}
							/>
						</IconContainer>
					)}
					onPress={handleLogout}
				/> */}
			</DrawerScrollView>
			{renderVersion()} 
      </>
  );
}
