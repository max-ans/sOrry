import {
  SAVE_APOLOGY_EDIT,
  UPDATE_APOLOGY_FIELD_EDIT,
  ADD_CATEGORIE,
  REMOVE_CATEGORIE,
  GOOD_APOLOGY_FORM,
  WRONG_APOLOGY_FORM,
} from 'src/actions/apologyEdit';

import {
  RESET_SUCCESS,
} from 'src/actions/profilPage';

const initialState = {
  title: '',
  content: '',
  error: false,
  success: false,
  selectedCategories: [],
  categorieIsEmpty: true,
  isFetched: false,
};

const apologyEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_APOLOGY_EDIT:
      return {
        ...state,
        title: action.apology.title,
        content: action.apology.content,
        isFetched: true,
      };

    case UPDATE_APOLOGY_FIELD_EDIT:
      return {
        ...state,
        [action.field]: action.newValue,
      };

    case ADD_CATEGORIE:
      return {
        ...state,
        selectedCategories: [...state.selectedCategories, action.categorie],
        categorieIsEmpty: false,
      };

    case REMOVE_CATEGORIE:
      return {
        ...state,
        selectedCategories: state.selectedCategories.filter(
          (selectedCategories) => selectedCategories !== action.categorie,
        ),
      };

    case GOOD_APOLOGY_FORM:
      return {
        ...state,
        error: false,
        success: true,
      };

    case WRONG_APOLOGY_FORM:
      return {
        ...state,
        error: true,
      };

    case RESET_SUCCESS:
      return {
        ...state,
        success: false,
      };
    default: return state;
  }
};

export default apologyEdit;
