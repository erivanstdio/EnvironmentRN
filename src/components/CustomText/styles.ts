import styled from "styled-components/native";

export const Container = styled.View`
`;

type TextProps = {
  color?: string;
  fontSize?: number;
}

export const Text = styled.Text<TextProps>`
  color: ${props => props.color || 'white'};
  font-size: ${props => props.fontSize || 14}px;
`;
