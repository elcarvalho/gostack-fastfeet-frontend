import React, { useState } from 'react';
import { MdMenu, MdClose, MdPowerSettingsNew } from 'react-icons/md';

import logo from '~/assets/fastfeet-logo.png';

import { HeaderContainer, NavList, NavLink } from './styles';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <h1>
        <img src={logo} alt="Fastfet" width="135" />
      </h1>

      <nav>
        <button type="button" onClick={handleOpenMenu}>
          {isOpen ? (
            <MdClose size={26} color="#444444" />
          ) : (
            <MdMenu size={26} color="#444444" />
          )}
        </button>
        <NavList showMenu={isOpen}>
          <NavLink active>
            <a href="/">ENCOMENDAS</a>
          </NavLink>
          <NavLink>
            <a href="/">ENTREGADORES</a>
          </NavLink>
          <NavLink>
            <a href="/">DESTINATÁRIOS</a>
          </NavLink>
          <NavLink>
            <a href="/">PROBLEMAS</a>
          </NavLink>
        </NavList>
      </nav>

      <div>
        <strong>Admin Fastfeet</strong>
        <a href="/">sair do sistema</a>

        <button type="button">
          <MdPowerSettingsNew size={26} color="#de3b3b" />
        </button>
      </div>
    </HeaderContainer>
  );
}
