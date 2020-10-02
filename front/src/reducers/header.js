import {
  TOGGLE_MENU,
  SET_OPEN_MENU,
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
    case SET_OPEN_MENU:
      return {
        ...state,
        openMenu: true,
      };
    default:
      return state;
  }
};

export default header;
