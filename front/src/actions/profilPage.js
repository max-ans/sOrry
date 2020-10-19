export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';
export const SEND_USER_FORM = 'SEND_USER_FORM'; 

export const updateUserInput = (value, field) => ({
  type: UPDATE_USER_INPUT,
  value,
  field,
});

export const sendUserForm = () => ({
  type: SEND_USER_FORM,
});
