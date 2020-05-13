import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { MdChevronLeft, MdDone } from 'react-icons/md';

import history from '~/services/history';

import Container from '~/components/Container';
import SectionHeader from '~/components/SectionHeader';
import Button from '~/components/Button';
import MainWrapper from '~/components/MainWrapper';

import Form from '../form';

import { registerRequest } from '~/store/modules/recipient/actions';

export default function RecipientNew() {
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleGoBack = () => {
    history.goBack();
  };

  const handleSubmit = async () => {
    try {
      const data = formRef.current.getData();

      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        street: Yup.string().required('Campo obrigatório'),
        number: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        state: Yup.string().required('Campo obrigatório'),
        zip: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, street, number, complement, city, state, zip } = data;

      dispatch(
        registerRequest(name, street, number, complement, city, state, zip)
      );
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <Container>
      <SectionHeader>
        <h2>Cadastro de destinatário</h2>

        <div className="groupButtons">
          <Button type="button" onClick={handleGoBack} bgColor="#CCCCCC">
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
