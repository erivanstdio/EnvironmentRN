import React, { ReactNode } from 'react';
import { Container, Text } from './styles';

type Props = {
  children: ReactNode;
  color?: string;
  fontSize?: number;
}

const CustomText: React.FC<Props> = ({children, color, fontSize}) => {
  return <Container>
    <Text color={color} fontSize={fontSize}>{children}</Text>
  </Container>;
}

export default CustomText;