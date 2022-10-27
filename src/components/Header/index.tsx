import {CustomLink} from "../index";

import logo from '@/shared/assets/logo-full.svg'
import { HeaderContainer, NavLinks, User } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="content">
         <img src={logo} alt="Luby logo" className="logo" />
         <NavLinks>
            <CustomLink>Avaliar apontamentos</CustomLink>
            <CustomLink>Fazer um apontamento</CustomLink>
            <CustomLink>Meus apontamentos</CustomLink>
            <CustomLink>Relatórios</CustomLink>
         </NavLinks>
         <User className="user">
            <span>Olá, Fulano</span>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" className="avatar" />
         </User>
      </div>
    </HeaderContainer>
  )
}
