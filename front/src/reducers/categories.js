import {
  SAVE_ALL_CATEGORIES,
} from 'src/actions/categories';

const initialState = {
  categoriesFetched: false,
  allCategories: [],
};

const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.categories,
        categoriesFetched: true,
      };

    default: return state;
  }
};
export default categories;
