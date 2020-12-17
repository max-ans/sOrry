import {
  SAVE_APOLOGY_INFORMATIONS,
  DISPLAY_COMMENTS_SECTION,
} from 'src/actions/apology';

const initialState = {
  isFetched: false,
  apologyInformation: {},
  displayComments: false,
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
    default: return state;
  }
};
export default apology;
