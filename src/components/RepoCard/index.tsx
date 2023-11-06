import { Repo } from '../../@types';
import {
  RepoCardContainer,
  RepoInfo,
  RepoLanguage,
  RepoName,
  RepoStats,
  RepoTitle,
} from './styles';
import { Button } from '../Button';
import { languageColors } from '../../constants/languageColors';

interface RepoCardProps {
  repo: Repo;
}

export function RepoCard({ repo }: RepoCardProps) {
  const language = repo.language || 'Sem linguagem';
  const borderColor = languageColors[language];

  return (
    <RepoCardContainer borderColor={borderColor}>
      <RepoName>
        <RepoTitle>{repo.name}</RepoTitle>
        <RepoLanguage bgColor={borderColor}>{language}</RepoLanguage>
      </RepoName>
      <RepoInfo>
        <RepoStats>
          <span>Stars: {repo.stargazers_count}</span>
          <span>Forks: {repo.forks_count}</span>
          <span>Watchers: {repo.watchers_count}</span>
        </RepoStats>
      </RepoInfo>
      <Button
        as="a"
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: '2rem', textAlign: 'center' }}
      >
        Ver Repositório
      </Button>
    </RepoCardContainer>
  );
}
