import { connect } from 'react-redux';
import ApologyEdit from 'src/components/ApologyEdit/ApologyEdit';

import {
  fetchAllCategories,
} from 'src/actions/apologyCreate';

import {
  fetchApologyEdit,
  updateApologyFieldEdit,
  addCategorie,
  removeCategorie,
  submitApologyEditForm,
} from 'src/actions/apologyEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  allCategories: state.apologyCreate.categories,
  title: state.apologyEdit.title,
  content: state.apologyEdit.content,
  error: state.apologyEdit.error,
  success: state.apologyEdit.success,
  selectedCategories: state.apologyEdit.selectedCategories,
  isFetched: state.apologyEdit.isFetched,
  categorieIsEmpty: state.apologyEdit.categorieIsEmpty,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAllCategories: () => {
    dispatch(fetchAllCategories());
  },
  fetchApologyEdit: (slug) => {
    dispatch(fetchApologyEdit(slug));
  },
  updateApologyFieldEdit: (newValue, field) => {
    dispatch(updateApologyFieldEdit(newValue, field));
  },
  addCategorie: (categorie) => {
    dispatch(addCategorie(categorie));
  },
  removeCategorie: (categorie) => {
    dispatch(removeCategorie(categorie));
  },
  submit: (slug) => {
    dispatch(submitApologyEditForm(slug));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApologyEdit);
