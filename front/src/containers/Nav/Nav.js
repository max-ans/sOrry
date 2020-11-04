import { connect } from 'react-redux';

// === on importe le composant de présentation
import Nav from 'src/components/Nav/Nav';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  menuIsOpen: state.header.menuIsOpen,
  isLogged: state.connection.isLogged,
  user: state.user.user,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le stores
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
