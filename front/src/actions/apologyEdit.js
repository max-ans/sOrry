export const FETCH_APOLOGY_EDIT = 'FETCH_APOLOGY_EDIT';
export const SAVE_APOLOGY_EDIT = 'SAVE_APOLOGY_EDIT';
export const UPDATE_APOLOGY_FIELD_EDIT = 'UPDATE_APOLOGY_FIELD_EDIT';
export const ADD_CATEGORIE = 'ADD_CATEGORIE';
export const REMOVE_CATEGORIE = 'REMOVE_CATEGORIE';
export const SUBMIT_APOLOGY_EDIT_FORM = 'SUBMIT_APOLOGY_EDIT_FORM';
export const EMPTY_SELECTED_CATEGORIES = 'EMPTY_SELECTED_CATEGORIES';
export const WRONG_APOLOGY_FORM = 'WRONG_APOLOGY_FORM';
export const GOOD_APOLOGY_FORM = 'GOOD_APOLOGY_FORM';

export const fetchApologyEdit = (slug) => ({
  type: FETCH_APOLOGY_EDIT,
  slug,
});

export const saveApologyEdit = (apology) => ({
  type: SAVE_APOLOGY_EDIT,
  apology,
});

export const updateApologyFieldEdit = (newValue, field) => ({
  type: UPDATE_APOLOGY_FIELD_EDIT,
  newValue,
  field,
});

export const addCategorie = (categorie) => ({
  type: ADD_CATEGORIE,
  categorie,
});

export const removeCategorie = (categorie) => ({
  type: REMOVE_CATEGORIE,
  categorie,
});

export const submitApologyEditForm = (slug) => ({
  type: SUBMIT_APOLOGY_EDIT_FORM,
  slug,
});

export const emptySelectedCategories = () => ({
  type: EMPTY_SELECTED_CATEGORIES,
});

export const wrongApologyForm = () => ({
  type: WRONG_APOLOGY_FORM,
});

export const goodApologyForm = () => ({
  type: GOOD_APOLOGY_FORM,
});
