import axios from 'axios';
import {
  SUBMIT_REGISTRATION_FORM,
  registrationFormError,
  registrationFormSuccess,
} from 'src/actions/registration';

import { baseURL } from 'src/utils';

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_REGISTRATION_FORM: {
      const {
        password,
        email,
        firstname,
        lastname,
        nickname,
      } = store.getState().registration;
      axios.post(`${baseURL}/api/v0/user`, {
        password,
        email,
        firstname,
        lastname,
        nickname,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(registrationFormSuccess());
        })
        .catch((error, message) => {
          console.warn(error, message);
          store.dispatch(registrationFormError());
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default registrationMiddleware;
