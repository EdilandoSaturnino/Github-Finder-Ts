import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeContainer,
  GithubIcon,
  GithubFinderText,
  GithubIconContainer,
} from './styles';
import { SearchBar } from '../../components/SearchBar';

export function Home() {
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(true);

  const handleSearch = (query: string) => {
    if (!query) {
      navigate('/');
      setShowSearchBar(true);
    } else {
      navigate(`/user/${query}`);
      setShowSearchBar(true);
    }
  };

  return (
    <HomeContainer>
      {showSearchBar && <SearchBar onSearch={handleSearch} />}
      <GithubIconContainer>
        <GithubIcon />
        <div>
          <GithubFinderText>
            GITHUB <span style={{ display: 'block' }}>FINDER</span>
          </GithubFinderText>
        </div>
      </GithubIconContainer>
    </HomeContainer>
  );
}
