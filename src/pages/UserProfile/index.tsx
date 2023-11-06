import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserCard } from '../../components/UserCard';
import { RepoList } from '../../components/RepoList';
import { User } from '../../@types';
import { SearchBar } from '../../components/SearchBar';
import { UserInfosContainer, NoUserText } from './styles';
import { fetchUser } from '../../utils';

export function UserProfile() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [showSearchBar, setShowSearchBar] = useState(true);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = username ? `GITHUB FINDER - ${username}` : 'GITHUB FINDER';

    const getData = async () => {
      try {
        const response = await fetchUser(username as string);
        setUser(response.data);
      } catch (error) {
        console.error('erro aqui:', error);
      }
    };

    if (username) {
      getData();
    }

    return () => {
      document.title = prevTitle;
    };
  }, [username]);

  const handleSearch = (query: string) => {
    if (!query) {
      navigate('/');
    } else {
      navigate(`/user/${query}`);
    }
    setShowSearchBar(true);
  };

  return (
    <>
      {showSearchBar && <SearchBar onSearch={handleSearch} />}
      {user ? (
        <UserInfosContainer>
          <UserCard user={user} />
          <RepoList username={username as string} />
        </UserInfosContainer>
      ) : (
        <NoUserText>Usuário inexistente D:</NoUserText>
      )}
    </>
  );
}
