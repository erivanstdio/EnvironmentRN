import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

export const Profile: React.FC = () => {

  const date = new Date().getDate();
  return <View>
      UserName
    <View>
      <Text>Date:</Text>
      <Text>{date}</Text>
    </View>
  </View>;
}