import {
  CHANGE_INPUT_VALUE,
  REGISTRATION_FORM_ERROR,
  REGISTRATION_FORM_SUCCESS,
} from 'src/actions/registration';

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  nickname: '',
  registrationError: false,
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
      };
    default:
      return state;
  }
};

export default registration;
