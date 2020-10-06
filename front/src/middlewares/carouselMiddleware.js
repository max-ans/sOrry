import axios from 'axios';
import {
  FETCH_BEST_APOLOGIES,
} from 'src/actions/carousel';

import { baseURL } from 'src/utils';

const carouselMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BEST_APOLOGIES:
      axios.get(`${baseURL}/api/v0/apologies`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default carouselMiddleware;
