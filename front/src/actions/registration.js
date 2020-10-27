export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_REGISTRATION_FORM = 'SUBMIT_REGISTRATION_FORM';
export const REGISTRATION_FORM_ERROR = 'REGISTRATION_FORM_ERROR';
export const REGISTRATION_FORM_SUCCESS = 'REGISTRATION_FORM_SUCCESS';

export const changeInputValue = (field, value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  field,
});

export const submitRegistrationForm = () => ({
  type: SUBMIT_REGISTRATION_FORM,
});

export const registrationFormError = () => ({
  type: REGISTRATION_FORM_ERROR,
});

export const registrationFormSuccess = () => ({
  type: REGISTRATION_FORM_SUCCESS,
});
