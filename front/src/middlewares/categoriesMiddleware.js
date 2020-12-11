import Axios from 'axios';

import {
  FETCH_CATEGORIES,
  saveAllCategories,
} from 'src/actions/categories';

import { baseURL } from 'src/utils';

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      Axios.get(`${baseURL}/api/v0/categories`)
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
export default categoriesMiddleware;
