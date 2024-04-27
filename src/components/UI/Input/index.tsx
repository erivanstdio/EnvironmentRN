import React from 'react';
import { Container } from './styles';
import { TextInputProps } from 'react-native';

type InputProps = {
  backgroundColor: string;
} & TextInputProps;

const Input: React.FC<InputProps> = ({ ...props }) => {

  return <Container {...props} />;
}

export default Input;