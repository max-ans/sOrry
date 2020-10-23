export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';
export const SEND_USER_FORM = 'SEND_USER_FORM';
export const UPDATE_PASSWORD_INPUT = 'UPDATE_PASSWORD_INPUT';
export const FORM_FAILURE = 'FORM_FAILURE';
export const FORM_SUCCES = 'FORM_SUCCES';
export const INPUT_FORMAT_WRONG = 'INPUT_FORMAT_WRONG';

export const updateUserInput = (value, field) => ({
  type: UPDATE_USER_INPUT,
  value,
  field,
});

export const sendUserForm = () => ({
  type: SEND_USER_FORM,
});

export const updatePasswordInput = (value) => ({
  type: UPDATE_PASSWORD_INPUT,
  value,
});

export const formFailure = () => ({
  type: FORM_FAILURE,
});

export const formSucces = () => ({
  type: FORM_SUCCES,
});

export const inputFormatWrong = (bool, field) => ({
  type: INPUT_FORMAT_WRONG,
  bool,
  field,
});
