import React from 'react';
import { Container } from './styles';
import { TextInputProps } from 'react-native';

type InputProps = {
  backgroundColor: string;
}
const Input: React.FC<InputProps & TextInputProps> = ({onChangeText, value, backgroundColor}) => {

  return <Container backgroundColor={backgroundColor} editable value={value} onChangeText={onChangeText} />;
}

export default Input;