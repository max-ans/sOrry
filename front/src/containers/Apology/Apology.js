import { connect } from 'react-redux';
import Apology from 'src/components/Apology/Apology';

import {
  fetchApologyInformations,
  displayCommentsSection,
} from 'src/actions/apology';

// === mapStateToProps
const mapStateToProps = (state) => ({
  apologyInformation: state.apology.apologyInformation,
  isFetched: state.apology.isFetched,
  displayComments: state.apology.displayComments,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchApologyInformations: (slug) => {
    dispatch(fetchApologyInformations(slug));
  },
  displayCommentsSection: () => {
    dispatch(displayCommentsSection());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Apology);
