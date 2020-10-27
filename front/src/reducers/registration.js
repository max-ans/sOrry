import {
  CHANGE_INPUT_VALUE,
  REGISTRATION_FORM_ERROR,
  REGISTRATION_FORM_SUCCESS,
  REGISTRATION_FORM_FIELD_ERROR,
  RESET_FORM_ERRORS,
} from 'src/actions/registration';

import { RESET_REDIRECT } from 'src/actions/carousel';

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  nickname: '',
  registrationError: false,
  emptyField: false,
  redirect: false,
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
        redirect: true,
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
    case RESET_REDIRECT:
      return {
        ...state,
        redirect: false,
      };
    default:
      return state;
  }
};

export default registration;
