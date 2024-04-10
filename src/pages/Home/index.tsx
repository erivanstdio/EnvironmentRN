import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListItem } from '../../components/List/ListItem';
import Button from '../../components/UI/Button';

// import { Container } from './styles';

const users = [
  { name: 'John', id: 1 },
  { name: 'Paul', id: 2 },
  { name: 'George', id: 3 },
  { name: 'Ringo', id: 4 }
]

export const Home: React.FC = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const userList = users.map((user) => <ListItem color={'#000'} key={user.id} value={user.name}/>);

  const handleShowList = () => {
    setShowList((prev) => !prev);
  }

  // TODO: Simple counter
  return (
    <View>
      <Button title='Display list of Beatles' onPress={handleShowList}/>
      {showList &&
      <ScrollView>
        {userList}
      </ScrollView>
      }
      {/* <FlatList renderItem={(user) => <UserListItem value={user.item.name}/>} data={users}/> */}
     </View>
  );
}
