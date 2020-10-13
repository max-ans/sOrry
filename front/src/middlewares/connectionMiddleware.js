import axios from 'axios';

import {
  SEND_LOGIN_FORM,
  saveUser,
} from 'src/actions/connection';

import { baseURL } from 'src/utils';

const connectionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_LOGIN_FORM: {
      const { login, password, rememberMe } = store.getState().connection;
      axios.post(`${baseURL}/api/v0/user/login`, {
        login,
        password,
      })
        .then((response) => {
          console.log(response.data[0]);
          store.dispatch(saveUser(response.data[0]));
          if (rememberMe) {
            localStorage.setItem('user', JSON.stringify(response.data[0]));
          }
          else {
            sessionStorage.setItem('user', JSON.stringify(response.data[0]));
          }
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default connectionMiddleware;
