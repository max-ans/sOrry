import axios from 'axios';

import {
  SEND_LOGIN_FORM,
  saveUser,
  credentialsLoginError,
  DISCONNECT_CURRENT_USER,
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
          store.dispatch(saveUser(response.data[0]));
          if (rememberMe) {
            localStorage.setItem('s\'OrryUserLogged', JSON.stringify(response.data[0]));
          }
          else {
            sessionStorage.setItem('s\'OrryUserLogged', JSON.stringify(response.data[0]));
          }
        })
        .catch(() => {
          store.dispatch(credentialsLoginError());
        });
      next(action);
      break;
    }

    case DISCONNECT_CURRENT_USER:
      try {
        localStorage.removeItem('s\'OrryUserLogged');
        sessionStorage.removeItem('s\'OrryUserLogged');
      }
      catch (error) {
        console.warn(error);
      }
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default connectionMiddleware;
