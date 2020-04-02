import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdMenu, MdClose, MdPowerSettingsNew } from 'react-icons/md';

import history from '~/services/history';

import logo from '~/assets/fastfeet-logo.png';

import { HeaderContainer, NavList, NavLink, Link, Logout } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const profile = useSelector((state) => state.user.profile);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path) => {
    history.push(path);
    setIsOpen(false);
    setCurrentPage(path);
  };

  const handleSignOut = () => {
    dispatch(signOut());
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
        <strong>{profile.name}</strong>
        <Logout onClick={handleSignOut}>sair do sistema</Logout>

        <button type="button" onClick={handleSignOut}>
          <MdPowerSettingsNew size={26} color="#de3b3b" />
        </button>
      </div>
    </HeaderContainer>
  );
}
