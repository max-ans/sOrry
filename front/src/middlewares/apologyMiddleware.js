import Axios from 'axios';

import {
  FETCH_APOLOGY_INFORMATIONS,
  saveApologyInformations,
} from 'src/actions/apology';

import { baseURL } from 'src/utils';

const apologyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_APOLOGY_INFORMATIONS:
      next(action);
      break;
    default:
      next(action);
  }
};
export default apologyMiddleware;
