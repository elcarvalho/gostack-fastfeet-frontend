import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdChevronLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import Container from '~/components/Container';
import SectionHeader from '~/components/SectionHeader';
import MainWrapper from '~/components/MainWrapper';
import Button from '~/components/Button';

import Form from '../form';

import { editRequest } from '~/store/modules/recipient/actions';

export default function RecipientEdit() {
  const { id } = useParams();
  const [recipient, setRecipient] = useState();
  const formRef = useRef();
  const dispatch = useDispatch();

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

      const { id, name, street, number, complement, city, state, zip } = data;

      dispatch(
        editRequest(id, name, street, number, complement, city, state, zip)
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

  const loadRecipient = useCallback(async (id) => {
    try {
      const response = await api.get(`recipients/${id}`);
      const [data] = response.data;
      setRecipient(data);
    } catch (err) {
      toast.error('Falha ao obter os dados do entregador.');
    }
  }, []);

  useEffect(() => {
    if (id) {
      loadRecipient(id);
    }
  }, [loadRecipient, id]);

  return (
    <Container>
      <SectionHeader>
        <h2>Editar destinatário</h2>

        <div className="groupButtons">
          <Button type="button" onClick={handleGoBack}>
            <MdChevronLeft size="26" color="#ffffff" />
            VOLTAR
          </Button>
          <Button type="button" bgColor="#16a085" onClick={handleSubmit}>
            <MdDone size="26" color="#ffffff" />
            SALVAR
          </Button>
        </div>
      </SectionHeader>

      <MainWrapper>
        <Form initialData={recipient} formRef={formRef} />
      </MainWrapper>
    </Container>
  );
}
