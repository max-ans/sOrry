import {
  SAVE_USER,
} from 'src/actions/connection';
import {
  UPDATE_USER_INPUT,
  UPDATE_PASSWORD_INPUT,
  FORM_FAILURE,
  INPUT_FORMAT_WRONG,
} from 'src/actions/profilPage';

const initialState = {
  user: {},
  password: '',
  email: '',
  firstname: '',
  lastname: '',
  nickname: '',
  failure: false,
  success: false,
  emailFormat: false,
  passwordFormat: false,
};

const profilPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: { ...action.user },
        password: '',
        email: action.user.email,
        firstname: action.user.firstname,
        lastname: action.user.lastname,
        nickname: action.user.nickname,
      };

    case UPDATE_USER_INPUT:
      return {
        ...state,
        user: {
          ...state.user,
        },
        [action.field]: action.value,
      };
    case UPDATE_PASSWORD_INPUT:
      return {
        ...state,
        password: action.value,
      };
    case FORM_FAILURE:
      return {
        ...state,
        failure: true,
      };
    case INPUT_FORMAT_WRONG:
      return {
        ...state,
        [action.field]: action.bool,
      };
    default:
      return state;
  }
};

export default profilPage;
