import { useState } from 'react';
import { Form, InputContainer, Input, SearchIconContainer } from './styles';
import { FaSearch } from 'react-icons/fa';
import { Button } from '../Button';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <SearchIconContainer>
          <FaSearch color="#989898" />
        </SearchIconContainer>
        <Input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Digite o @username..."
        />
        <Button style={{ borderRadius: '0px 7px 7px 0px' }} type="submit">
          Pesquisar
        </Button>
      </InputContainer>
    </Form>
  );
}
