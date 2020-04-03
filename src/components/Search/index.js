import React from 'react';
import { Form } from '@unform/web';
import Input from '../Input';
import { MdSearch } from 'react-icons/md';

export default function Search({ handleSubmit, placeholder }) {
  return (
    <Form onSubmit={handleSubmit}>
      <MdSearch size={21} color="#999999" />
      <Input type="text" name="q" placeholder={placeholder || 'Pesquisar'} />
    </Form>
  );
}
