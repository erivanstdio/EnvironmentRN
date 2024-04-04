import styled from 'styled-components/native';
import { DrawerItem } from '@react-navigation/drawer';

export const DrawerScrollView = styled.ScrollView`
	margin-top: 4px;
	margin-bottom: 50px;
	background-color: 'white';
`;

export const DrawerCustomItem = styled(DrawerItem).attrs({
	labelStyle: {
		color: 'grey',
		fontSize: 16,
		marginLeft: -15
	}
})`
	width: 100%;
	left: -10px;
	border-radius: 0;
	justify-content: center;
	margin-top: -4px;
	height: 7.5px;
`;