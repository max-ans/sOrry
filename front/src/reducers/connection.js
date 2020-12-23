import {
  UPDATE_CONNECTION_INPUT,
  SET_REMEMBER_ME,
  SAVE_USER,
  CREDENTIALS_LOGIN_ERROR,
  DISCONNECT_CURRENT_USER,
  SEE_PASSWORD_CONNECTION,
} from 'src/actions/connection';

const initialState = {
  login: '',
  password: '',
  rememberMe: false,
  isLogged: false,
  loginError: false,
  seePasswordStatus: false,
};

const connection = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CONNECTION_INPUT:
      return {
        ...state,
        [action.field]: action.newValue,
      };
    case SET_REMEMBER_ME:
      return {
        ...state,
        rememberMe: !state.rememberMe,
      };
    case SAVE_USER:
      return {
        ...state,
        login: '',
        password: '',
        isLogged: true,
        loginError: false,
      };
    case CREDENTIALS_LOGIN_ERROR:
      return {
        ...state,
        loginError: true,
        password: '',
      };
    case DISCONNECT_CURRENT_USER:
      return {
        ...state,
        isLogged: false,
      };
    case SEE_PASSWORD_CONNECTION:
      return {
        ...state,
        seePasswordStatus: !state.seePasswordStatus,
      };
    default:
      return state;
  }
};

export default connection;
