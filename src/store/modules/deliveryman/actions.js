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

export function editRequest(id, avatar_id, name, email) {
  return {
    type: '@deliveryman/EDIT_REQUEST',
    payload: {
      id,
      avatar_id,
      name,
      email,
    },
  };
}

export function editSuccess() {
  return {
    type: '@deliveryman/EDIT_SUCCESS',
  };
}

export function editFail() {
  return {
    type: '@deliveryman/EDIT_FAIL',
  };
}

export function removeRequest(id) {
  return {
    type: '@deliveryman/REMOVE_REQUEST',
    payload: { id },
  };
}
