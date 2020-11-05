import axios from 'axios';

import {
  FETCH_ALL_CATEGORIES,
  saveAllCategories,
} from 'src/actions/apologyCreate';

import { baseURL } from 'src/utils';

const apologyCreateMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      axios.get(`${baseURL}/api/v0/categories`)
        .then((response) => {
          store.dispatch(saveAllCategories(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default apologyCreateMiddleware;
