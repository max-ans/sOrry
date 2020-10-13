import {
  UPDATE_CONNECTION_INPUT,
  SET_REMEMBER_ME,
} from 'src/actions/connection';

const initialState = {
  login: '',
  password: '',
  rememberMe: false,
  isLogged: false,
  user: {},
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
    default:
      return state;
  }
};

export default connection;
