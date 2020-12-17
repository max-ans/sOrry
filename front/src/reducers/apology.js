import {
  SAVE_APOLOGY_INFORMATIONS,
  DISPLAY_COMMENTS_SECTION,
  WRITE_IN_INPUT,
} from 'src/actions/apology';

const initialState = {
  isFetched: false,
  apologyInformation: {},
  displayComments: false,
  commentary: '',
};

const apology = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_APOLOGY_INFORMATIONS:
      return {
        ...state,
        isFetched: true,
        apologyInformation: action.apology,
      };

    case DISPLAY_COMMENTS_SECTION:
      return {
        ...state,
        displayComments: !state.displayComments,
      };

    case WRITE_IN_INPUT:
      return {
        ...state,
        commentary: action.newValue,
      };
    default: return state;
  }
};
export default apology;
