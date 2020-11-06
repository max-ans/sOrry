export const FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES';
export const SAVE_FETCHED_CATEGORIES = 'SAVE_FETCHED_CATEGORIES';
export const UPDATE_INPUT_VALUE_BY_FIELD = 'UPDATE_INPUT_VALUE_BY_FIELD';

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
