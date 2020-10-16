import {
  SAVE_USER,
} from 'src/actions/connection';

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
    default:
      return state;
  }
};

export default profilPage;
