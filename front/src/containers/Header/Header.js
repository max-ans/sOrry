import { connect } from 'react-redux';

import {
  setMenuIsOpen,
} from 'src/actions/header';

// === on importe le composant de présentation
import Header from 'src/components/Header/Header';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  menuIsOpen: state.header.menuIsOpen,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le stores
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setMenuIsOpen: () => {
    dispatch(setMenuIsOpen());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);
