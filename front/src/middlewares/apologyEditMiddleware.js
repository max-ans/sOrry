import axios from 'axios';
import { baseURL } from 'src/utils';
import {
  FETCH_APOLOGY_EDIT,
  fetchApologyEdit,
  saveApologyEdit,
  SUBMIT_APOLOGY_EDIT_FORM,
  emptySelectedCategories,
  goodApologyForm,
  wrongApologyForm,
} from 'src/actions/apologyEdit';

const apologyEditMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_APOLOGY_EDIT:
      axios.get(`${baseURL}/api/v0/apologies/${action.slug}`)
        .then((response) => {
          console.log(response);
          store.dispatch(saveApologyEdit(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case SUBMIT_APOLOGY_EDIT_FORM: {
      const { title, content, selectedCategories } = store.getState().apologyEdit;
      const { id } = store.getState().user.user;
      console.log(id);
      if (selectedCategories.length === 0) {
        store.dispatch(emptySelectedCategories());
        store.dispatch(wrongApologyForm());
      }
      else {
        axios.patch(`${baseURL}/api/v0/apologies/${action.slug}`, {
          title,
          content,
          categories: selectedCategories,
          author: id,
        })
          .then((response) => {
            console.log(response);
            store.dispatch(goodApologyForm());
            store.dispatch(fetchApologyEdit(response.data[0].slug));
          })
          .catch((error) => {
            console.warn(error);
            store.dispatch(wrongApologyForm());
          });
      }
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apologyEditMiddleware;
