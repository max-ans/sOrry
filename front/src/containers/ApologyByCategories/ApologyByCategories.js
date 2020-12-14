import { connect } from 'react-redux';
import ApologyByCategories from 'src/components/ApologyByCategories/ApologyByCategories';

import {
  closeHeaderMenu,
} from 'src/actions/header';
import {
  fetchCurrentCategorie,
} from 'src/actions/apologyByCategories';

// === mapStateToProps
const mapStateToProps = (state) => ({
  apologiesLoaded: state.apologyByCategories.apologiesLoaded,
  currentCategorie: state.apologyByCategories.currentCategorie,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  closeHeaderMenu: () => {
    dispatch(closeHeaderMenu());
  },
  fetchCurrentCategorie: (slug) => {
    dispatch(fetchCurrentCategorie(slug));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApologyByCategories);
