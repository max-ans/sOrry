export const FETCH_APOLOGIES_COUNT = 'FETCH_APOLOGIES_COUNT';
export const SAVE_APOLOGIES_COUNT = 'SAVE_APOLOGIES_COUNT';
export const FETCH_ALL_FAMOUS_APOLOGIES = 'FETCH_ALL_FAMOUS_APOLOGIES';
export const SAVE_ALL_FAMOUS_APOLOGIES = 'SAVE_ALL_FAMOUS_APOLOGIES';

export const fetchApologiesCount = () => ({
  type: FETCH_APOLOGIES_COUNT,
});

export const saveApologiesCount = (apologiesNumber) => ({
  type: SAVE_APOLOGIES_COUNT,
  apologiesNumber,
});

export const fetchAllFamousApologies = () => ({
  type: FETCH_ALL_FAMOUS_APOLOGIES,
});

export const saveAllFamousApologies = (allApologies) => ({
  type: SAVE_ALL_FAMOUS_APOLOGIES,
  allApologies,
});
