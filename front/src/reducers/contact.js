import {
  UPDATE_INPUT_VALUE,
  EMAIL_FORMAT_WRONG,
  EMAIL_FORMAT_GOOD,
  TOGGLE_CHECKBOX,
} from 'src/actions/contact';

const initialState = {
  email: '',
  text: '',
  checkbox: false,
  emailFormatAlert: false,
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

    default: return state;
  }
};
export default contact;
