import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

//import { registerSuccess, registerFail } from './actions';

export function* register({ payload }) {
  try {
    const { avatar_id, name, email } = payload;
    yield call(api.post, 'deliverymen', {
      avatar_id,
      name,
      email,
    });

    toast.success('Entregador cadastrado');
    history.push('/deliverymen');
  } catch (error) {
    toast.error('Erro ao registrar entregador');
  }
}

export default all([takeLatest('@deliveryman/REGISTER_REQUEST', register)]);
