import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { registerSuccess, registerFail } from './actions';

export function* register({ payload }) {
  try {
    const { avatar_id, name, email } = payload;
    yield call(api.post, 'deliverymen', {
      avatar_id,
      name,
      email,
    });

    yield put(registerSuccess());
  } catch (error) {
    yield put(registerFail());
  }
}

export default all([takeLatest('@deliveryman/REGISTER_REQUEST', register)]);
