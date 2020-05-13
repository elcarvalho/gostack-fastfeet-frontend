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
