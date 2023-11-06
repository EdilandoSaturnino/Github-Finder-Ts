import { useEffect, useState } from 'react';
import { RepoCard } from '../RepoCard';
import { Repo } from '../../@types';
import { RepoListTitle, NoUserText } from './styles';
import { fetchRepos } from '../../utils';

interface RepoListProps {
  username: string;
}

export function RepoList({ username }: RepoListProps) {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchRepos(username);
        setRepos(response.data);
      } catch (error) {
        console.error('erro aqui:', error);
      }
    };

    getData();
  }, [username]);

  return (
    <div>
      <RepoListTitle>REPOSITÓRIOS - {repos.length}</RepoListTitle>
      {repos.length === 0 ? (
        <NoUserText>Não tem nada aqui ;-;</NoUserText>
      ) : (
        repos.map(repo => <RepoCard key={repo.id} repo={repo} />)
      )}
    </div>
  );
}