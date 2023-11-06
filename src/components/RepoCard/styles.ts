import styled from 'styled-components';

export const RepoCardContainer = styled.div<{ borderColor: string }>`
  border-radius: 20px;
  border-left: 4px solid
    ${props => props.borderColor || props.theme['darkGray']};
  background: ${props => props.theme['darkGray']};
  padding: 20px 0;
  margin-bottom: 20px;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export const RepoTitle = styled.h3`
  font-size: 16px;
  color: ${props => props.theme['white']};
  margin-bottom: 10px;
`;

export const RepoDescription = styled.p`
  font-size: 18px;
  color: ${props => props.theme['white']};
  margin-bottom: 10px;
`;

export const RepoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RepoLanguage = styled.span<{ bgColor: string }>`
  font-size: 16px;
  color: ${props => props.theme['white']};
  background-color: ${(props: any) => props.bgColor || 'transparent'};
  padding: 2px 8px;
  border-radius: 5px;
`;

export const RepoStats = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: ${props => props.theme['white']};
  flex-direction: row;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const RepoButton = styled.a`
  background: ${props => props.theme['purple']};
  color: ${props => props.theme['white']};
  padding: 10px 20px;
  border-radius: 7px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  margin-right: 2rem;
`;

export const RepoName = styled.div`
  margin-left: 2rem;
`;
