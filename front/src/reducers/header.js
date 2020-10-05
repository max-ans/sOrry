import {
  SET_MENU_IS_OPEN,
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
    default: return state;
  }
};

export default header;
