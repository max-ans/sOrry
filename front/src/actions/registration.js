export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInputValue = (field, value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  field,
});
