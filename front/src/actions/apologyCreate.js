export const FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES';
export const SAVE_FETCHED_CATEGORIES = 'SAVE_FETCHED_CATEGORIES';
export const UPDATE_INPUT_VALUE_BY_FIELD = 'UPDATE_INPUT_VALUE_BY_FIELD';
export const ADD_SELECTED_CATEGORIES = 'ADD_SELECTED_CATEGORIES';
export const REMOVE_SELECTED_CATEGORIES = 'REMOVE_SELECTED_CATEGORIES';

export const fetchAllCategories = () => ({
  type: FETCH_ALL_CATEGORIES,
});

export const saveFetchedCategories = (categories) => ({
  type: SAVE_FETCHED_CATEGORIES,
  categories,
});

export const updateInputValueByField = (value, field) => ({
  type: UPDATE_INPUT_VALUE_BY_FIELD,
  value,
  field,
});

export const addSelectedCategories = (selectedCategories) => ({
  type: ADD_SELECTED_CATEGORIES,
  selectedCategories,
});

export const removeSelectedCategories = (selectedCategories) => ({
  type: REMOVE_SELECTED_CATEGORIES,
  selectedCategories,
});
