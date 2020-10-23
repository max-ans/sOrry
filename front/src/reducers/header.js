import {
  SET_MENU_IS_OPEN,
  CLOSE_HEADER_MENU,
} from 'src/actions/header';

const initialState = {
  menuIsOpen: false,
};

const header = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MENU_IS_OPEN:
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen,
      };

    case CLOSE_HEADER_MENU:
      return {
        ...state,
        menuIsOpen: false,
      };
    default: return state;
  }
};

export default header;
