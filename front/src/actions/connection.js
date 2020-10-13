export const UPDATE_CONNECTION_INPUT = 'UPDATE_CONNECTION_INPUT';
export const SET_REMEMBER_ME = 'SET_REMEMBER_ME';
export const SEND_LOGIN_FORM = 'SEND_LOGIN_FORM';

export const updateConnectionInput = (newValue, field) => ({
  type: UPDATE_CONNECTION_INPUT,
  newValue,
  field,
});

export const setRememberMe = () => ({
  type: SET_REMEMBER_ME,
});

export const sendLoginForm = () => ({
  type: SEND_LOGIN_FORM,
});
