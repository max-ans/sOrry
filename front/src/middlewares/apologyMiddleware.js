import axios from 'axios';

import {
  FETCH_APOLOGY_INFORMATIONS,
  fetchApologyInformations,
  saveApologyInformations,
  SUBMIT_COMMENT_FORM,
  commentFormError,
  commentFormSuccess,
  LIKE_CURRENT_APOLOGY,
  UNLIKE_CURRENT_APOLOGY,
} from 'src/actions/apology';

import { baseURL } from 'src/utils';

const apologyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_APOLOGY_INFORMATIONS:
      axios.get(`${baseURL}/api/v0/apologies/${action.slug}`)
        .then((response) => {
          store.dispatch(saveApologyInformations(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    case SUBMIT_COMMENT_FORM: {
      const { id: idAuthor } = store.getState().user.user;
      const { slug: slugApology, id } = store.getState().apology.apologyInformation;
      const { commentary } = store.getState().apology;
      axios.post(`${baseURL}/api/v0/comment`, {
        content: commentary,
        apology: id,
        author: idAuthor,
      })
        .then(() => {
          store.dispatch(fetchApologyInformations(slugApology));
          store.dispatch(commentFormSuccess());
        })
        .catch(() => {
          store.dispatch(commentFormError());
        });
      next(action);
      break;
    }
    case LIKE_CURRENT_APOLOGY: {
      const { id } = store.getState().user.user;
      const { slug } = store.getState().apology.apologyInformation;
      axios.post(`${baseURL}/api/v0/apologies/${slug}/like`, {
        userId: id,
      })
        .then((response) => {
          store.dispatch(fetchApologyInformations(response.data[0].slug));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case UNLIKE_CURRENT_APOLOGY: {
      const { id } = store.getState().user.user;
      const { slug } = store.getState().apology.apologyInformation;
      axios.post(`${baseURL}/api/v0/apologies/${slug}/unlike`, {
        userId: id,
      })
        .then((response) => {
          store.dispatch(fetchApologyInformations(response.data[0].slug));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default apologyMiddleware;
