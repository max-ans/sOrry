import {
  SAVE_APOLOGY_INFORMATIONS,
} from 'src/actions/apology';

const initialState = {
  isFetched: false,
  apologyInformation: {},
};

const apology = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_APOLOGY_INFORMATIONS:
      return {
        ...state,
        isFetched: true,
        apologyInformation: action.apology,
      };
    default: return state;
  }
};
export default apology;
