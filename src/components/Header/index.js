import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="orders">ENCOMENDAS</Link>
          </NavLink>
          <NavLink>
            <Link to="deliverymen">ENTREGADORES</Link>
          </NavLink>
          <NavLink>
            <Link to="recipients">DESTINATÁRIOS</Link>
          </NavLink>
          <NavLink>
            <Link to="order-problems">PROBLEMAS</Link>
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
