import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const GithubIcon = styled(FaGithub)`
  font-size: 20rem;
  color: ${props => props.theme['white']};
  margin-bottom: 10px;

  @media (max-width: 530px) {
    font-size: 7rem;
  }
`;

export const GithubFinderText = styled.div`
  font-size: 10rem;
  color: ${props => props.theme['white']};

  @media (max-width: 530px) {
    font-size: 4rem;
  }
`;
export const GithubIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
