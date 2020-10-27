import {
  CHANGE_INPUT_VALUE,
  REGISTRATION_FORM_ERROR,
  REGISTRATION_FORM_SUCCESS,
  REGISTRATION_FORM_FIELD_ERROR,
  RESET_FORM_ERRORS,
} from 'src/actions/registration';

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  nickname: '',
  registrationError: false,
  emptyField: false,
};

const registration = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case REGISTRATION_FORM_ERROR:
      return {
        ...state,
        password: '',
        registrationError: true,
      };
    case REGISTRATION_FORM_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        nickname: '',
        registrationError: false,
        emptyField: false,
      };

    case REGISTRATION_FORM_FIELD_ERROR:
      return {
        ...state,
        emptyField: true,
      };

    case RESET_FORM_ERRORS:
      return {
        ...state,
        registrationError: false,
        emptyField: false,
      };
    default:
      return state;
  }
};

export default registration;
