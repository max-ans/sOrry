import {
  SAVE_FETCHED_CATEGORIES,
  UPDATE_INPUT_VALUE_BY_FIELD,
} from 'src/actions/apologyCreate';

const initialState = {
  categories: [],
  title: '',
  content: '',
};

const apologyCreate = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FETCHED_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };

    case UPDATE_INPUT_VALUE_BY_FIELD:
      return {
        ...state,
        [action.field]: action.value,
      };
    default: return state;
  }
};
export default apologyCreate;
