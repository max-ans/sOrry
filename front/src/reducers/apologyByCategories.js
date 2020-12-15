import {
  SAVE_CURRENT_CATEGORIE,
  ORDERING_BY_LIKES,
} from 'src/actions/apologyByCategories';

const initialState = {
  apologiesLoaded: false,
  currentCategorie: [],
  orderedByLikes: false,
};

const apologyByCategories = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CURRENT_CATEGORIE:
      return {
        ...state,
        currentCategorie: action.categorie,
        apologiesLoaded: true,
      };

    case ORDERING_BY_LIKES:
      return {
        ...state,
        orderedByLikes: !state.orderedByLikes,
      };
    default: return state;
  }
};
export default apologyByCategories;
