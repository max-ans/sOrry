export const FETCH_APOLOGY_INFORMATIONS = 'FETCH_APOLOGY_INFORMATIONS';
export const SAVE_APOLOGY_INFORMATIONS = 'SAVE_APOLOGY_INFORMATIONS';

export const fetchApologyInformations = (slug) => ({
  type: FETCH_APOLOGY_INFORMATIONS,
  slug,
});

export const saveApologyInformations = (apology) => ({
  type: SAVE_APOLOGY_INFORMATIONS,
  apology,
});
