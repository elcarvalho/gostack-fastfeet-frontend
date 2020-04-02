import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess } from './actions';

function* signIn({ payload }) {
  try {
    const response = yield call(api.post, 'sessions', payload);

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));
    history.push('/orders');
  } catch (error) {
    console.log('@auth/saga/signIn');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
