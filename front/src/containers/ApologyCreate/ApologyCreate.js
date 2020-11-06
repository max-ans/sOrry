import { connect } from 'react-redux';
import ApologyCreate from 'src/components/ApologyCreate/ApologyCreate';

import {
  fetchAllCategories,
} from 'src/actions/apologyCreate';

// === mapStateToProps
const mapStateToProps = (state) => ({
  categories: state.apologyCreate.categories,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAllCategories: () => {
    dispatch(fetchAllCategories());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApologyCreate);
