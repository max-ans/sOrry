import {
  UPDATE_CONNECTION_INPUT,
} from 'src/actions/connection';

const initialState = {
  login: '',
  password: '',
  rememberMe: false,
};

const connection = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CONNECTION_INPUT:
      return {
        ...state,
        [action.field]: action.newValue,
      };
    default:
      return state;
  }
};

export default connection;
