import axios from 'axios';

import {
  SEND_LOGIN_FORM,
} from 'src/actions/connection';

import { baseURL } from 'src/utils';

const connectionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_LOGIN_FORM: {
      const { login, password, rememberMe } = store.getState().connection;
      axios.post(`${baseURL}/api/v0/users`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      console.log(login, password, rememberMe);
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default connectionMiddleware;
