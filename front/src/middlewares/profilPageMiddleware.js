import axios from 'axios';

import {
  SEND_USER_FORM,
} from 'src/actions/profilPage';

import { baseURL } from 'src/utils';

const profilPageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_USER_FORM: {
      const {
        email,
        password,
        firstname,
        lastname,
        nickname,
      } = store.getState().user;
      axios.patch(`${baseURL}/api/v0/user/${nickname}`, {
        email,
        password,
        firstname,
        lastname,
        nickname,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default profilPageMiddleware;
