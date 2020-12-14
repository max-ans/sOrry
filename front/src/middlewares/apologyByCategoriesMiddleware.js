import Axios from 'axios';

import {
  FETCH_CURRENT_CATEGORIE,
  saveCurrentCategorie,
} from 'src/actions/apologyByCategories';

import { baseURL } from 'src/utils';

const apologyByCategoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CURRENT_CATEGORIE:
      Axios.get(`${baseURL}/api/v0/categories/${action.slug}`)
        .then((response) => {
          console.log(response);
          store.dispatch(saveCurrentCategorie(response.data[0]));
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
export default apologyByCategoriesMiddleware;
