import React from 'react';

import logo from '~/assets/fastfeet-logo.png';

export default function SingIn() {
  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <form action="">
        <label htmlFor="">SEU E-MAIL</label>
        <input type="text" placeholder="exemplo@email.com" />

        <label htmlFor="">SUA SENHA</label>
        <input type="password" placeholder="**************" />

        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
