import styled from 'styled-components';

export const RepoListTitle = styled.h2`
  color: ${props => props.theme['white']};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin: 2rem 0px;
`;

export const NoUserText = styled.p`
  color: ${props => props.theme['white']};
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 6rem 0;
  text-transform: uppercase;
`;
