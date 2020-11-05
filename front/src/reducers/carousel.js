import {
  SAVE_BEST_APOLOGIES,
  HIDE_LOADER,
  DISPLAY_LOADER,
} from 'src/actions/carousel';

const initialState = {
  bestApologies: [],
  loader: false,
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

    case DISPLAY_LOADER:
      return {
        ...state,
        loader: true,
      };
    default: return state;
  }
};

export default carousel;
