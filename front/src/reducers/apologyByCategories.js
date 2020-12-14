import {
  SAVE_CURRENT_CATEGORIE,
} from 'src/actions/apologyByCategories';

const initialState = {
  apologiesLoaded: false,
  currentCategories: [],
};

const apologyByCategories = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CURRENT_CATEGORIE:
      return {
        ...state,
        currentCategorie: action.categorie,
        apologiesLoaded: true,
      };
    default: return state;
  }
};
export default apologyByCategories;
