import {
  SAVE_USER,
} from 'src/actions/connection';
import {
  UPDATE_USER_INPUT,
} from 'src/actions/profilPage';

const initialState = {
  user: {},

};

const profilPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: { ...action.user },
      };

    case UPDATE_USER_INPUT:
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export default profilPage;
