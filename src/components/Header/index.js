import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose, MdPowerSettingsNew } from 'react-icons/md';

import history from '~/services/history';

import logo from '~/assets/fastfeet-logo.png';

import { HeaderContainer, NavList, NavLink, Link } from './styles';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path) => {
    history.push(path);
    setIsOpen(false);
    setCurrentPage(path);
  };

  useEffect(() => {
    setCurrentPage(history.location.pathname);
  }, []);

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
          <NavLink>
            <Link
              active={currentPage === '/orders'}
              onClick={() => handleNavigate('/orders')}
            >
              ENCOMENDAS
            </Link>
          </NavLink>
          <NavLink>
            <Link
              active={currentPage === '/deliverymen'}
              onClick={() => handleNavigate('/deliverymen')}
            >
              ENTREGADORES
            </Link>
          </NavLink>
          <NavLink>
            <Link
              active={currentPage === '/recipients'}
              onClick={() => handleNavigate('/recipients')}
            >
              DESTINATÁRIOS
            </Link>
          </NavLink>
          <NavLink>
            <Link
              active={currentPage === '/order-problems'}
              onClick={() => handleNavigate('/order-problems')}
            >
              PROBLEMAS
            </Link>
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
