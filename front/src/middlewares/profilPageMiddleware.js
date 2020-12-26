import axios from 'axios';

import {
  SEND_USER_FORM,
  formFailure,
  formSucces,
  FETCH_USER_APOLOGIES,
  saveUserApologies,
} from 'src/actions/profilPage';
import {
  saveUser,
} from 'src/actions/connection';

import { baseURL } from 'src/utils';

const profilPageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_USER_FORM: {
      const { nickname: oldNickname } = store.getState().user.user;
      const {
        password,
        email,
        firstname,
        lastname,
        nickname,
      } = store.getState().user;
      axios.patch(`${baseURL}/api/v0/user/${oldNickname}`, {
        email,
        password,
        firstname,
        lastname,
        nickname,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data[0]));
          store.dispatch(formSucces());
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(formFailure());
        });
      next(action);
      break;
    }
    case FETCH_USER_APOLOGIES: {
      const { id } = store.getState().user.user;
      axios.get(`${baseURL}/api/v0/user/${id}`)
        .then((response) => {
          store.dispatch(saveUserApologies(response.data[0]));
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

export default profilPageMiddleware;
