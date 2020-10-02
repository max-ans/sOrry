import {
  TOGGLE_MENU,
} from 'src/actions/headerAction';

const initialState = {
  openMenu: false,
};

const header = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        openMenu: !state.openMenu,
      };
    default:
      return state;
  }
};

export default header;
