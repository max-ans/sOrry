import {
  SAVE_BEST_APOLOGIES,
} from 'src/actions/carousel';

const initialState = {
  bestApologies: [],
};

const carousel = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BEST_APOLOGIES:
      return {
        ...state,
        bestApologies: action.newApologies,
      };
    default: return state;
  }
};

export default carousel;
