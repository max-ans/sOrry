import {
  SAVE_USER,
} from 'src/actions/connection';
import {
  UPDATE_USER_INPUT,
  UPDATE_PASSWORD_INPUT,
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
    default:
      return state;
  }
};

export default profilPage;
