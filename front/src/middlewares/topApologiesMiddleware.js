import axios from 'axios';

import {
  FETCH_ALL_FAMOUS_APOLOGIES,
  FETCH_APOLOGIES_COUNT,
  saveAllFamousApologies,
  saveApologiesCount,
} from 'src/actions/topApologies';

import { baseURL } from 'src/utils';

const topApologiesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_APOLOGIES_COUNT:
      axios.get(`${baseURL}/api/v0/apologies/count`)
        .then((response) => {
          store.dispatch(saveApologiesCount(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case FETCH_ALL_FAMOUS_APOLOGIES:
      axios.get(`${baseURL}/api/v0/apologies?best=20`)
        .then((response) => {
          store.dispatch(saveAllFamousApologies(response.data[0]));
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

export default topApologiesMiddleware;
