export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_ALL_CATEGORIES = 'SAVE_ALL_CATEGORIES';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const saveAllCategories = (categories) => ({
  type: SAVE_ALL_CATEGORIES,
  categories,
});
