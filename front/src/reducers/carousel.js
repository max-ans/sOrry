import {
  SAVE_BEST_APOLOGIES,
  HIDE_LOADER,
} from 'src/actions/carousel';

const initialState = {
  bestApologies: [],
  loader: true,
};

const carousel = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BEST_APOLOGIES:
      return {
        ...state,
        bestApologies: action.newApologies,
      };

    case HIDE_LOADER:
      return {
        ...state,
        loader: false,
      };
    default: return state;
  }
};

export default carousel;
