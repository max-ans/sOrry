export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';

export const updateUserInput = (value, field) => ({
  type: UPDATE_USER_INPUT,
  value,
  field,
});
