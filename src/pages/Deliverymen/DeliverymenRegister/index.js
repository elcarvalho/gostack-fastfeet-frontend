import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';

import AvatarInput from '~/components/AvatarInput';

import history from '~/services/history';

import { MdChevronLeft, MdDone } from 'react-icons/md';

import SectionHeader from '~/components/SectionHeader';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { Container } from './styles';

import { registerRequest } from '~/store/modules/deliveryman/actions';

export default function DeliverymenRegister() {
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleGoBack = () => {
    history.goBack();
  };

  const handleRegister = () => {
    const { avatar_id, name, email } = formRef.current.getData();

    dispatch(registerRequest(avatar_id, name, email));
  };

  return (
    <Container>
      <SectionHeader>
        <h2>Cadastro de entregadores</h2>

        <div className="groupButtons">
          <Button type="button" onClick={handleGoBack}>
            <MdChevronLeft size={26} color="#ffffff" />
            VOLTAR
          </Button>
          <Button type="button" onClick={handleRegister}>
            <MdDone size={26} color="#ffffff" />
            SALVAR
          </Button>
        </div>
      </SectionHeader>

      <main>
        <Form ref={formRef}>
          <AvatarInput name="avatar_id" />

          <label htmlFor="name">
            <strong>Nome</strong>
            <Input name="name" id="name" placeholder="John Doe" />
          </label>

          <label htmlFor="email">
            <strong>Email</strong>
            <Input
              name="email"
              id="email"
              placeholder="contato@entregador.com"
            />
          </label>
        </Form>
      </main>
    </Container>
  );
}
