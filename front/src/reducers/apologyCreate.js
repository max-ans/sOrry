import {
  SAVE_ALL_CATEGORIES,
} from 'src/actions/apologyCreate';

const initialState = {
  categories: [],
};

const apologyCreate = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
    default: return state;
  }
};
export default apologyCreate;
