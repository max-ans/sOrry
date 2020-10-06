import axios from 'axios';
import {
  FETCH_BEST_APOLOGIES,
  saveBestApologies,
} from 'src/actions/carousel';

import { baseURL } from 'src/utils';

const carouselMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BEST_APOLOGIES:
      axios.get(`${baseURL}/api/v0/apologies?best=10`)
        .then((response) => {
          store.dispatch(saveBestApologies(response.data[0]));
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
