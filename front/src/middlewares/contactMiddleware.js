import axios from 'axios';

import {
  SEND_CONTACT_FORM,
} from 'src/actions/contact';

import { baseURL } from 'src/utils';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_CONTACT_FORM: {
      const { email, text, checkbox } = store.getState().contact;
      axios.post(`${baseURL}/api/v0/contact`, {
        sendFrom: email,
        message: text,
        responseAccept: checkbox,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};
export default contactMiddleware;
