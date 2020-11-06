import {
  SAVE_FETCHED_CATEGORIES,
  UPDATE_INPUT_VALUE_BY_FIELD,
  ADD_SELECTED_CATEGORIES,
  REMOVE_SELECTED_CATEGORIES,
  ERROR_FORM_APOLOGY,
  SUCCESS_FORM_APOLOGY,
} from 'src/actions/apologyCreate';

const initialState = {
  categories: [],
  title: '',
  content: '',
  error: false,
  success: false,
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

    case ERROR_FORM_APOLOGY:
      return {
        ...state,
        error: true,
      };

    case SUCCESS_FORM_APOLOGY:
      return {
        ...state,
        error: false,
        success: true,
        title: '',
        content: '',
        selectedCategories: [],
      };
    default: return state;
  }
};
export default apologyCreate;
