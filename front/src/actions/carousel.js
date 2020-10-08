export const FETCH_BEST_APOLOGIES = 'FETCH_BEST_APOLOGIES';
export const SAVE_BEST_APOLOGIES = 'SAVE_BEST_APOLOGIES';
export const HIDE_LOADER = 'HIDE_LOADER';

export const fetchBestApologies = () => ({
  type: FETCH_BEST_APOLOGIES,
});

export const saveBestApologies = (newApologies) => ({
  type: SAVE_BEST_APOLOGIES,
  newApologies,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});
