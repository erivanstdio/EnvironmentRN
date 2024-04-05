import styled from 'styled-components/native';
import { DrawerItem } from '@react-navigation/drawer';

export const DrawerScrollView = styled.ScrollView`
	margin-top: 4px;
	margin-bottom: 50px;
	background-color: 'black';
	flex: 1
`;

export const DrawerCustomItem = styled(DrawerItem).attrs({
	labelStyle: {
		color: 'white',
		backgroundColor: '#fff',
		fontSize: 16,
		marginLeft: -15
	}
})`
	width: 100%;
	left: -10px;
	border-radius: 0;
	background-color: #000;
	justify-content: center;
	margin-top: -4px;
	height: 7.5px;
`;