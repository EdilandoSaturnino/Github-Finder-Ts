import {
  HeaderContainer,
  Navbar,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
} from './styles';
import { FaGithub } from 'react-icons/fa';

export function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <NavbarMenu>
          <NavbarItem>
            <NavbarLink to="/">
              <FaGithub />
              GITHUB FINDER
            </NavbarLink>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </HeaderContainer>
  );
}
