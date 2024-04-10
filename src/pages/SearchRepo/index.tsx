import React, { useCallback, useState } from 'react';
import { Box, Container } from './styles';
import CustomText from '../../components/CustomText';
import Input from '../../components/UI/Input';
import { useFetchUserRepositories } from '../../hooks/useSearch';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/UI/Button';
import { RepositoryItem } from '../../components/List/RepositoryItem';

type Users = {
	name: string
}
export const SearchRepo: React.FC = () => {

	const [value, setValue] = useState('');
	const [repositories, setRepositories] = useState<string[]>([]);

	const onSubmit = useCallback(async (userName: string) => {

		if (userName) {

			const user: Users[] = await useFetchUserRepositories(userName);
			const repositorieNames = user.map(value => value.name)
	
			setRepositories(repositorieNames)
		} else {

			setRepositories([])
		}
	}, []);

	return (
		<>
			<Container>
				<Box>
					<CustomText fontSize={18}>
						Insert Github Username:
					</CustomText>
					<Input backgroundColor={'#333'} value={value} onChangeText={setValue} />
				</Box>
				<Button color='#333' title='Search Repo' onPress={() => onSubmit(value)} />
			</Container>
			<FlatList style={{backgroundColor: '#330044'}} renderItem={(user) => <RepositoryItem value={user.item}/>} data={repositories} />
		</>
	);
}