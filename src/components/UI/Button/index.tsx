import React from 'react';
import { Container } from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
}
const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <Container title={title} onPress={onPress}/>
  );
}

export default Button;