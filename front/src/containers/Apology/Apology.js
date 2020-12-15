import { connect } from 'react-redux';
import Apology from 'src/components/Apology/Apology';

import {
  fetchApologyInformations,
} from 'src/actions/apology';

// === mapStateToProps
const mapStateToProps = (state) => ({
  apology: state.apology.apology,
  isFetched: state.apology.siFetched,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchApologyInformations: (slug) => {
    dispatch(fetchApologyInformations(slug));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Apology);
