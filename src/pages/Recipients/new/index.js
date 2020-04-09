import React, { useRef } from 'react';

import { MdChevronLeft, MdDone } from 'react-icons/md';

import Container from '~/components/Container';
import SectionHeader from '~/components/SectionHeader';
import Button from '~/components/Button';
import MainWrapper from '~/components/MainWrapper';

import Form from '../form';

export default function RecipientNew() {
  const formRef = useRef();

  const handleSubmit = () => {
    const data = formRef.current.getData();
  };

  return (
    <Container>
      <SectionHeader>
        <h2>Cadastro de destinatário</h2>

        <div className="groupButtons">
          <Button type="button" onClick={() => {}} bgColor="#CCCCCC">
            <MdChevronLeft size={26} color="#ffffff" />
            VOLTAR
          </Button>
          <Button type="button" onClick={handleSubmit}>
            <MdDone size={26} color="#ffffff" />
            SALVAR
          </Button>
        </div>
      </SectionHeader>

      <MainWrapper>
        <Form formRef={formRef} />
      </MainWrapper>
    </Container>
  );
}
