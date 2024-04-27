import React from 'react';
import { ButtonBox } from './styles';
import CustomText from '../../CustomText';

type ButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
}
const Button: React.FC<ButtonProps> = ({ title, onPress, color }) => {
  return (
    <ButtonBox accessibilityHint='ButtonComponent' onPress={onPress} color={color || '#44f'} activeOpacity={.8}>
      <CustomText>
        {title}
      </CustomText>
    </ButtonBox>
  );
}

export default Button;