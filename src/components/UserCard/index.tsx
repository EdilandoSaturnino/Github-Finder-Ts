import { User } from '../../@types';
import { Avatar, UserBio, UserCardContainer, UserInfo } from './styles';
import { Button } from '../Button';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <UserCardContainer>
      <Avatar src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <UserInfo>
        <div>{user.name}</div>
        <div>@{user.login}</div>
        <UserBio>{user.bio}</UserBio>
      </UserInfo>
      <Button
        as="a"
        href={`https://github.com/${user.login}`}
        target="_blank"
        rel="noopener noreferrer"
        fontSize="1rem"
      >
        ACESSAR PERFIL
      </Button>
    </UserCardContainer>
  );
}
