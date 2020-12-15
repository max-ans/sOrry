import { connect } from 'react-redux';
import ApologyByCategories from 'src/components/ApologyByCategories/ApologyByCategories';

import {
  closeHeaderMenu,
} from 'src/actions/header';
import {
  fetchCurrentCategorie,
  orderingByLikes,
} from 'src/actions/apologyByCategories';

// === mapStateToProps
const mapStateToProps = (state) => ({
  apologiesLoaded: state.apologyByCategories.apologiesLoaded,
  currentCategorie: state.apologyByCategories.currentCategorie,
  orderedByLikes: state.apologyByCategories.orderedByLikes,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  closeHeaderMenu: () => {
    dispatch(closeHeaderMenu());
  },
  fetchCurrentCategorie: (slug) => {
    dispatch(fetchCurrentCategorie(slug));
  },
  orderingByLikes: () => {
    dispatch(orderingByLikes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApologyByCategories);
