import {
  SAVE_FETCHED_CATEGORIES,
  UPDATE_INPUT_VALUE_BY_FIELD,
  ADD_SELECTED_CATEGORIES,
  REMOVE_SELECTED_CATEGORIES,
} from 'src/actions/apologyCreate';

const initialState = {
  categories: [],
  title: '',
  content: '',
  selectedCategories: [],
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

    case ADD_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: [...state.selectedCategories, action.selectedCategories],
      };

    case REMOVE_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: state.selectedCategories.filter(
          (selectedCategories) => selectedCategories !== action.selectedCategories,
        ),
      };
    default: return state;
  }
};
export default apologyCreate;
