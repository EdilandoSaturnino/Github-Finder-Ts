import styled from 'styled-components';

interface ButtonStyleProps {
  bgColor?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
}

export const Btn = styled.button<ButtonStyleProps>`
  background: ${props => props.bgColor || props.theme['purple']};
  color: ${props => props.color || props.theme['white']};
  padding: ${props => props.padding || '10px 20px'};
  border-radius: ${props => props.borderRadius || '7px'};
  font-size: ${props => props.fontSize || '1rem'};
  border: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  transition: background-color 400ms;

  &:hover {
    background-color: ${props => props.theme['purpleHover']};
  }
`;
