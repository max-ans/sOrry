import {
  SAVE_ALL_FAMOUS_APOLOGIES,
  SAVE_APOLOGIES_COUNT,
} from 'src/actions/topApologies';

const initialState = {
  apologyNumber: 0,
  bestApologies: [],
  apologiesLoaded: false,
};

const topApologies = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_APOLOGIES_COUNT:
      return {
        ...state,
        apologyNumber: action.apologiesNumber,
      };

    case SAVE_ALL_FAMOUS_APOLOGIES:
      return {
        ...state,
        bestApologies: [...action.allApologies],
        apologiesLoaded: true,
      };
    default:
      return state;
  }
};

export default topApologies;
