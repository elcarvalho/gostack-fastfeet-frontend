import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdChevronLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import SectionHeader from '~/components/SectionHeader';
import Container from '~/components/Container';
import MainWrapper from '~/components/MainWrapper';
import Button from '~/components/Button';

import Form from '../form';

import { editRequest } from '~/store/modules/deliveryman/actions';

export default function DeliverymanEdit() {
  const [deliveryman, setDeliveryman] = useState();
  const dispatch = useDispatch();
  const formRef = useRef();
  const { id } = useParams();

  const handleGoBack = () => {
    history.goBack();
  };

  const handleSubmit = async () => {
    try {
      const data = formRef.current.getData();

      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string()
          .email('Você deve fornecer um e-mail válido')
          .required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { id, name, email, avatar_id } = data;

      dispatch(editRequest(id, avatar_id, name, email));
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

  const loadDeliveryman = useCallback(async () => {
    try {
      const response = await api.get(`deliverymen/${id}`);
      const [data] = response.data;
      setDeliveryman(data);
    } catch (error) {
      toast.error('Falha ao obter os dados do entregador.');
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      loadDeliveryman();
    }
  }, [loadDeliveryman, id]);

  return (
    <Container>
      <SectionHeader>
        <h2>Cadastro de entregadores</h2>

        <div className="groupButtons">
          <Button type="button" onClick={handleGoBack}>
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
        <Form initialData={deliveryman} formRef={formRef} />
      </MainWrapper>
    </Container>
  );
}
