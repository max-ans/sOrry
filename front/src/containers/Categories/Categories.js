import { connect } from 'react-redux';
import Categories from 'src/components/Categories/Categories';
import {
  fetchCategories,
} from 'src/actions/categories';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
