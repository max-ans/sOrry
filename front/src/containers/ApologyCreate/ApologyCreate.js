import { connect } from 'react-redux';
import ApologyCreate from 'src/components/ApologyCreate/ApologyCreate';

import {
  fetchAllCategories,
  updateInputValueByField,
  addSelectedCategories,
  removeSelectedCategories,
} from 'src/actions/apologyCreate';

// === mapStateToProps
const mapStateToProps = (state) => ({
  categories: state.apologyCreate.categories,
  title: state.apologyCreate.title,
  content: state.apologyCreate.content,
  selectedCategories: state.apologyCreate.selectedCategories,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAllCategories: () => {
    dispatch(fetchAllCategories());
  },
  updateInputValueByField: (value, field) => {
    dispatch(updateInputValueByField(value, field));
  },
  addSelectedCategories: (selectedCategories) => {
    dispatch(addSelectedCategories(selectedCategories));
  },
  removeSelectedCategories: (selectedCategories) => {
    dispatch(removeSelectedCategories(selectedCategories));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApologyCreate);
