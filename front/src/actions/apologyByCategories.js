export const FETCH_CURRENT_CATEGORIE = 'FETCH_CURRENT_CATEGORIE';
export const SAVE_CURRENT_CATEGORIE = 'SAVE_CURRENT_CATEGORIE';
export const ORDERING_BY_LIKES = 'ORDERING_BY_LIKES';

export const fetchCurrentCategorie = (slug) => ({
  type: FETCH_CURRENT_CATEGORIE,
  slug,
});

export const saveCurrentCategorie = (categorie) => ({
  type: SAVE_CURRENT_CATEGORIE,
  categorie,
});

export const orderingByLikes = () => ({
  type: ORDERING_BY_LIKES,
});
