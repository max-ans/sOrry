export const FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES';
export const SAVE_FETCHED_CATEGORIES = 'SAVE_FETCHED_CATEGORIES';

export const fetchAllCategories = () => ({
  type: FETCH_ALL_CATEGORIES,
});

export const saveFetchedCategories = (categories) => ({
  type: SAVE_FETCHED_CATEGORIES,
  categories,
});
