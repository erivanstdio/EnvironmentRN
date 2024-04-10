import React from 'react';

import { Container } from './styles';
import CustomText from '../../CustomText';

type UserListProps = {
  value: string
  color?: string
}

export const RepositoryItem: React.FC<UserListProps> = ({ value, color }) => {
  return (
    <Container>
      <CustomText color={color}>- {value}</CustomText>
    </Container>
  );
}
