import { TextInputProps } from "react-native";
import styled from "styled-components/native";

type ContainerProps = {
  backgroundColor?: string;
}
export const Container = styled.TextInput<ContainerProps & TextInputProps>`
  padding: 10px;
  background-color: ${props => props.backgroundColor || '#fff'};
  border: 1px solid #666;
  border-radius: 5px;
  margin: 10px;
  width: 160px;
  color: white;
  font-size: 18px;
`;
