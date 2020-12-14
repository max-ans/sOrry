import { connect } from 'react-redux';
import ApologyByCategories from 'src/components/ApologyByCategories/ApologyByCategories';

import {
  closeHeaderMenu,
} from 'src/actions/header';

// === mapStateToProps
const mapStateToProps = (state) => ({
  allCategories: state.categories.allCategories,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  closeHeaderMenu: () => {
    dispatch(closeHeaderMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApologyByCategories);
