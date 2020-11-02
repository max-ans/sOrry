export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const EMAIL_FORMAT_WRONG = 'EMAIL_FORMAT_WRONG';
export const EMAIL_FORMAT_GOOD = 'EMAIL_FORMAT_GOOD';

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
