import axios from 'axios';
import {
  SUBMIT_REGISTRATION_FORM,
  registrationFormError,
  registrationFormSuccess,
  registrationFormFieldError,
  resetFormErrors,
} from 'src/actions/registration';

import { baseURL } from 'src/utils';

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_REGISTRATION_FORM: {
      store.dispatch(resetFormErrors());
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
          // console.log(response);
          store.dispatch(registrationFormSuccess());
        })
        .catch((error) => {
          // console.log(error.response.data);
          store.dispatch(registrationFormError());
          if (error.response.data.status === 500) {
            store.dispatch(registrationFormFieldError());
          }
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
