import { connect } from 'react-redux';
import Apology from 'src/components/Apology/Apology';

import {
  fetchApologyInformations,
  displayCommentsSection,
  writeInInput,
  submitCommentForm,
} from 'src/actions/apology';

// === mapStateToProps
const mapStateToProps = (state) => ({
  apologyInformation: state.apology.apologyInformation,
  isFetched: state.apology.isFetched,
  displayComments: state.apology.displayComments,
  commentary: state.apology.commentary,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchApologyInformations: (slug) => {
    dispatch(fetchApologyInformations(slug));
  },
  displayCommentsSection: () => {
    dispatch(displayCommentsSection());
  },
  writeInInput: (field, newValue) => {
    dispatch(writeInInput(field, newValue));
  },
  submitCommentForm: () => {
    dispatch(submitCommentForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Apology);
