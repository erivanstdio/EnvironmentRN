import React from 'react';
import { Text, View } from 'react-native';

import { Container, UserText } from './styles';

type UserListProps = {
  user: string
}

export const UserListItem: React.FC<UserListProps> = ({ user }) => {
  return (
    <Container>
      <UserText>- {user}</UserText>
    </Container>
  );
}
