export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';
export const SEND_USER_FORM = 'SEND_USER_FORM';
export const UPDATE_PASSWORD_INPUT = 'UPDATE_PASSWORD_INPUT';
export const FORM_FAILURE = 'FORM_FAILURE';
export const FORM_SUCCES = 'FORM_SUCCES';
export const INPUT_FORMAT_WRONG = 'INPUT_FORMAT_WRONG';
export const RESET_REDIRECT = 'RESET_REDIRECT';
export const FETCH_USER_APOLOGIES = 'FETCH_USER_APOLOGIES';
export const SAVE_USER_APOLOGIES = 'SAVE_USER_APOLOGIES';

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

export const resetRedirect = () => ({
  type: RESET_REDIRECT,
});

export const fetchUserApologies = () => ({
  type: FETCH_USER_APOLOGIES,
});

export const saveUserApologies = (user) => ({
  type: SAVE_USER_APOLOGIES,
  user,
});
