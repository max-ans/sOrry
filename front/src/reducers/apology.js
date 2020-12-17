import {
  SAVE_APOLOGY_INFORMATIONS,
  DISPLAY_COMMENTS_SECTION,
  WRITE_IN_INPUT,
  FETCH_APOLOGY_INFORMATIONS,
  COMMENT_FORM_ERROR,
  COMMENT_FORM_SUCCESS,
} from 'src/actions/apology';

const initialState = {
  isFetched: false,
  apologyInformation: {},
  displayComments: false,
  commentary: '',
  formSuccess: false,
  formError: false,
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
    case FETCH_APOLOGY_INFORMATIONS:
      return {
        ...state,
        commentary: '',
      };
    case COMMENT_FORM_ERROR:
      return {
        ...state,
        formSuccess: false,
        formError: true,
      };
    case COMMENT_FORM_SUCCESS:
      return {
        ...state,
        formSuccess: true,
        formError: false,
      };
    default: return state;
  }
};
export default apology;
