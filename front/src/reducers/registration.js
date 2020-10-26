import {
  CHANGE_INPUT_VALUE,
} from 'src/actions/registration';

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  nickname: '',
};

const registration = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };

    default:
      return state;
  }
};

export default registration;
