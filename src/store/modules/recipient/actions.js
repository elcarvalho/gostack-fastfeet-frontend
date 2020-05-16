export function registerRequest(
  name,
  street,
  number,
  complement,
  city,
  state,
  zip
) {
  return {
    type: '@recipient/REGISTER_REQUEST',
    payload: {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip,
    },
  };
}

export function editRequest(
  id,
  name,
  street,
  number,
  complement,
  city,
  state,
  zip
) {
  return {
    type: '@recipient/EDIT_REQUEST',
    payload: {
      id,
      name,
      street,
      number,
      complement,
      city,
      state,
      zip,
    },
  };
}
export function removeRequest(id) {
  return {
    type: '@recipient/REMOVE_REQUEST',
    payload: {
      id,
    },
  };
}
