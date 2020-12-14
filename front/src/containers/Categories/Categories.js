import { connect } from 'react-redux';
import Categories from 'src/components/Categories/Categories';
import {
  fetchCategories,
} from 'src/actions/categories';
import {
  closeHeaderMenu,
} from 'src/actions/header';

// === mapStateToProps
const mapStateToProps = (state) => ({
  categoriesFetched: state.categories.categoriesFetched,
  allCategories: state.categories.allCategories,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
  closeHeaderMenu: () => {
    dispatch(closeHeaderMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
