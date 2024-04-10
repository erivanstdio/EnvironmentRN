import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

type ButtonProps = {
    onPress: () => void;
    color?: string;
}
export const ButtonBox = styled.TouchableOpacity<ButtonProps>`
  justify-content: center;
  align-self: center;
  align-items: center;
  margin: 10px 0;
  width: 200px;
  height: 40px;
  border: 1px solid #666;
  border-radius: 3px;
  background-color: ${props => props.color};
`;
export const ButtonContainer = styled.View`

`;