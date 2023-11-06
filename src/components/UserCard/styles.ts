import styled from 'styled-components';

export const UserCardContainer = styled.div`
  border-radius: 20px;
  background: ${props => props.theme['darkGray']};
  padding: 3rem 2rem;
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 30px;
  border-left: 4px solid ${props => props.theme['purple']};
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const UserInfo = styled.div`
  color: ${props => props.theme['white']};
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  line-height: 1.675rem;
`;

export const UserBio = styled.div`
  margin: 2rem;
  color: ${props => props.theme['white']};
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AccessProfileButton = styled.button`
  border-radius: 7px;
  background: ${props => props.theme['purple']};
  color: ${props => props.theme['white']};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
`;
