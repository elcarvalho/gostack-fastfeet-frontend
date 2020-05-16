import React from 'react';
import Input from '~/components/Input';

import { RecipientForm } from './styles';

export default function Form({ initialData, formRef }) {
  return (
    <RecipientForm initialData={initialData} ref={formRef}>
      <Input name="id" className="hidden" />

      <section>
        <label htmlFor="name">
          <strong>Nome</strong>
          <Input name="name" id="name" />
        </label>
      </section>

      <section>
        <label htmlFor="street">
          <strong>Rua</strong>
          <Input name="street" id="street" />
        </label>
        <label htmlFor="number" className="width-150">
          <strong>Número</strong>
          <Input name="number" id="number" />
        </label>
        <label htmlFor="complement" className="width-150">
          <strong>Complemento</strong>
          <Input name="complement" id="complement" />
        </label>
      </section>

      <section>
        <label htmlFor="city">
          <strong>Cidade</strong>
          <Input name="city" id="city" />
        </label>
        <label htmlFor="state">
          <strong>Estado</strong>
          <Input name="state" id="state" />
        </label>
        <label htmlFor="zip">
          <strong>CEP</strong>
          <Input name="zip" id="zip" />
        </label>
      </section>
    </RecipientForm>
  );
}
