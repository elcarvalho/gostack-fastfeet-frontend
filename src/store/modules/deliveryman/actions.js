export function registerRequest(avatar_id, name, email) {
  return {
    type: '@deliveryman/REGISTER_REQUEST',
    payload: {
      avatar_id,
      name,
      email,
    },
  };
}

export function registerSuccess() {
  return {
    type: '@deliveryman/REGISTER_SUCCESS',
  };
}

export function registerFail() {
  return {
    type: '@deliveryman/REGISTER_FAIL',
  };
}
