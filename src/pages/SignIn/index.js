import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';

import Input from '~/components/Input';

import logo from '~/assets/fastfeet-logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SingIn() {
  const dispatch = useDispatch();

  const handleSignIn = async (data) => {
    try {
      const { email, password } = data;
      dispatch(signInRequest(email, password));
    } catch (error) {}
  };

  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <Form onSubmit={handleSignIn}>
        <label htmlFor="">SEU E-MAIL</label>
        <Input type="text" name="email" placeholder="exemplo@email.com" />

        <label htmlFor="">SUA SENHA</label>
        <Input type="password" name="password" placeholder="**************" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
