import React from 'react';
import Input from '~/components/Input';
import AvatarInput from '~/components/AvatarInput';

import { RegisterForm } from './styles';

export default function Form({ initialData, formRef }) {
  return (
    <RegisterForm initialData={initialData} ref={formRef}>
      <AvatarInput name="avatar_id" />

      <Input name="id" className="hidden" />

      <label htmlFor="name">
        <strong>Nome</strong>
        <Input name="name" id="name" placeholder="John Doe" />
      </label>

      <label htmlFor="email">
        <strong>Email</strong>
        <Input name="email" id="email" placeholder="contato@entregador.com" />
      </label>
    </RegisterForm>
  );
}
