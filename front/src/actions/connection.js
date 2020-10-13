export const UPDATE_CONNECTION_INPUT = 'UPDATE_CONNECTION_INPUT';
export const SET_REMEMBER_ME = 'SET_REMEMBER_ME';

export const updateConnectionInput = (newValue, field) => ({
  type: UPDATE_CONNECTION_INPUT,
  newValue,
  field,
});

export const setRememberMe = () => ({
  type: SET_REMEMBER_ME,
});
