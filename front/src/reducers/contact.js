import {
  UPDATE_INPUT_VALUE,
  EMAIL_FORMAT_WRONG,
  EMAIL_FORMAT_GOOD,
  TOGGLE_CHECKBOX,
  SEND_CONTACT_FORM_SUCCESS,
  WRONG_REQUEST_FORMAT,
} from 'src/actions/contact';

const initialState = {
  email: '',
  text: '',
  checkbox: false,
  emailFormatAlert: false,
  formSent: false,
  formError: false,
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };

    case EMAIL_FORMAT_WRONG:
      return {
        ...state,
        emailFormatAlert: true,
      };
    case EMAIL_FORMAT_GOOD:
      return {
        ...state,
        emailFormatAlert: false,
      };
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checkbox: !state.checkbox,
      };
    case SEND_CONTACT_FORM_SUCCESS:
      return {
        ...state,
        email: '',
        text: '',
        checkbox: false,
        formSent: true,
        formError: false,
      };
    case WRONG_REQUEST_FORMAT:
      return {
        ...state,
        formSent: false,
        formError: true,
      };

    default: return state;
  }
};
export default contact;
