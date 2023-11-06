import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme['darkGray']};
  padding: 2rem 0;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  border-radius: 7px;
  background: ${props => props.theme['veryDarkGray']};
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  padding-left: 40px;
  border: 2px solid ${props => props.theme['purple']};
  border-radius: 7px 0px 0px 7px;
  background: transparent;
  font-size: 1rem;
  color: ${props => props.theme['white']};
  outline: none;

  ::placeholder {
    color: ${props => props.theme['mediumGray']};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 0px 7px 7px 0px;
  background: ${props => props.theme['purple']};
  color: ${props => props.theme['white']};
  font-size: 1rem;
  cursor: pointer;
  outline: none;
`;
