import styled from 'styled-components';

export const UserInfosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 3rem 0;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
  }
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
