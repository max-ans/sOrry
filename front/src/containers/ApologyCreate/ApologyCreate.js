import { connect } from 'react-redux';
import ApologyCreate from 'src/components/ApologyCreate/ApologyCreate';

import {
  fetchAllCategories,
  updateInputValueByField,
  addSelectedCategories,
  removeSelectedCategories,
  sendApologyForm,
} from 'src/actions/apologyCreate';

// === mapStateToProps
const mapStateToProps = (state) => ({
  categories: state.apologyCreate.categories,
  title: state.apologyCreate.title,
  content: state.apologyCreate.content,
  error: state.apologyCreate.error,
  success: state.apologyCreate.success,
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
  sendApologyForm: () => {
    dispatch(sendApologyForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApologyCreate);
