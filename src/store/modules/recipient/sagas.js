import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* register({ payload }) {
  try {
    const { name, street, number, complement, city, state, zip } = payload;

    yield call(api.post, 'recipients', {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip,
    });

    toast.success('Destinatário cadastrado');
    history.push('/recipients');
  } catch (error) {
    toast.error('Erro ao registrar destinatário');
  }
}

export default all([takeLatest('@recipient/REGISTER_REQUEST', register)]);
