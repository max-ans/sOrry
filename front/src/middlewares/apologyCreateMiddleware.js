import axios from 'axios';

import {
  FETCH_ALL_CATEGORIES,
  saveFetchedCategories,
  successformApology,
  errorFormApology,
  SEND_APOLOGY_FORM,
} from 'src/actions/apologyCreate';

import { baseURL } from 'src/utils';

const apologyCreateMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      axios.get(`${baseURL}/api/v0/categories`)
        .then((response) => {
          store.dispatch(saveFetchedCategories(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case SEND_APOLOGY_FORM: {
      const { id } = store.getState().user.user;
      const {
        title,
        content,
        selectedCategories,
      } = store.getState().apologyCreate;
      axios.post(`${baseURL}/api/v0/apologies`, {
        title,
        content,
        categories: selectedCategories,
        author: id,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(successformApology());
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(errorFormApology());
        });
      next(action);
      break;
    }

    default:
      next(action);
      break;
  }
};
export default apologyCreateMiddleware;
