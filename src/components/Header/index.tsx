import { CustomLink } from '../index';

import logo from '@/shared/assets/logo-full.svg';
import { HeaderContainer, NavLinks, User } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <div className="content">
        <img src={logo} alt="Luby logo" className="logo" />
        <NavLinks>
          <CustomLink goTo="/evaluate">Avaliar apontamentos</CustomLink>
          <CustomLink goTo="/new-notation">Fazer um apontamento</CustomLink>
          <CustomLink goTo="/my-notations">Meus apontamentos</CustomLink>
          <CustomLink goTo="/reports">Relatórios</CustomLink>
        </NavLinks>
        <User className="user">
          <span>Olá, Fulano</span>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="avatar"
          />
        </User>
      </div>
    </HeaderContainer>
  );
}
