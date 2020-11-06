import { connect } from 'react-redux';
import ApologyCreate from 'src/components/ApologyCreate/ApologyCreate';

import {
  fetchAllCategories,
  updateInputValueByField,
} from 'src/actions/apologyCreate';

// === mapStateToProps
const mapStateToProps = (state) => ({
  categories: state.apologyCreate.categories,
  title: state.apologyCreate.title,
  content: state.apologyCreate.content,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAllCategories: () => {
    dispatch(fetchAllCategories());
  },
  updateInputValueByField: (value, field) => {
    dispatch(updateInputValueByField(value, field));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApologyCreate);
