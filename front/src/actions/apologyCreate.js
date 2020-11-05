export const FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES';
export const SAVE_ALL_CATEGORIES = 'SAVE_ALL_CATEGORIES';

export const fetchAllCategories = () => ({
  type: FETCH_ALL_CATEGORIES,
});

export const saveAllCategories = (categories) => ({
  type: SAVE_ALL_CATEGORIES,
  categories,
});
