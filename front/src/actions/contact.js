export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const EMAIL_FORMAT_WRONG = 'EMAIL_FORMAT_WRONG';
export const EMAIL_FORMAT_GOOD = 'EMAIL_FORMAT_GOOD';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';
export const SEND_CONTACT_FORM_SUCCESS = 'SEND_CONTACT_FORM_SUCCESS';
export const WRONG_REQUEST_FORMAT = 'WRONG_REQUEST_FORMAT';
export const SEND_IN_PROGRESS = 'SEND_IN_PROGRESS';
export const SEND_FINISHED = 'SEND_FINISHED';

export const updateInputValue = (value, field) => ({
  type: UPDATE_INPUT_VALUE,
  value,
  field,
});

export const emailFormatWrong = () => ({
  type: EMAIL_FORMAT_WRONG,
});

export const emailFormatGood = () => ({
  type: EMAIL_FORMAT_GOOD,
});

export const toggleCheckbox = () => ({
  type: TOGGLE_CHECKBOX,
});

export const sendContactForm = () => ({
  type: SEND_CONTACT_FORM,
});

export const sendContactFormSuccess = () => ({
  type: SEND_CONTACT_FORM_SUCCESS,
});

export const wrongRequestFormat = () => ({
  type: WRONG_REQUEST_FORMAT,
});

export const sendInProgress = () => ({
  type: SEND_IN_PROGRESS,
});

export const sendFinished = () => ({
  type: SEND_FINISHED,
});
