import {
  SAVE_APOLOGY_INFORMATIONS,
} from 'src/actions/apology';

const initialState = {
  isFetched: false,
  apology: [],
};

const apology = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_APOLOGY_INFORMATIONS:
      return {
        ...state,
        isFetched: true,
        apology: action.apology,
      };
    default: return state;
  }
};
export default apology;
