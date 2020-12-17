export const FETCH_APOLOGY_INFORMATIONS = 'FETCH_APOLOGY_INFORMATIONS';
export const SAVE_APOLOGY_INFORMATIONS = 'SAVE_APOLOGY_INFORMATIONS';
export const DISPLAY_COMMENTS_SECTION = 'DISPLAY_COMMENTS_SECTION';
export const WRITE_IN_INPUT = 'WRITE_IN_INPUT';
export const SUBMIT_COMMENT_FORM = 'SUBMIT_COMMENT_FORM';

export const fetchApologyInformations = (slug) => ({
  type: FETCH_APOLOGY_INFORMATIONS,
  slug,
});

export const saveApologyInformations = (apology) => ({
  type: SAVE_APOLOGY_INFORMATIONS,
  apology,
});

export const displayCommentsSection = () => ({
  type: DISPLAY_COMMENTS_SECTION,
});

export const writeInInput = (field, newValue) => ({
  type: WRITE_IN_INPUT,
  field,
  newValue,
});

export const submitCommentForm = () => ({
  type: SUBMIT_COMMENT_FORM,
});
