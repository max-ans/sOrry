export const UPDATE_CONNECTION_INPUT = 'UPDATE_CONNECTION_INPUT';
export const SET_REMEMBER_ME = 'SET_REMEMBER_ME';
export const SEND_LOGIN_FORM = 'SEND_LOGIN_FORM';
export const SAVE_USER = 'SAVE_USER';
export const CREDENTIALS_LOGIN_ERROR = 'CREDENTIALS_LOGIN_ERROR';
export const RESET_REDIRECT = 'RESET_REDIRECT';
export const DISCONNECT_CURRENT_USER = 'DISCONNECT_CURRENT_USER';
export const SEE_PASSWORD_CONNECTION = 'SEE_PASSWORD_CONNECTION';

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

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export const credentialsLoginError = () => ({
  type: CREDENTIALS_LOGIN_ERROR,
});

export const resetRedirect = () => ({
  type: RESET_REDIRECT,
});

export const disconnectCurrentUser = () => ({
  type: DISCONNECT_CURRENT_USER,
});

export const seePassword = () => ({
  type: SEE_PASSWORD_CONNECTION,
});
