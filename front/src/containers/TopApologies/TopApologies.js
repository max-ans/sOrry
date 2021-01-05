import { connect } from 'react-redux';
import TopApologies from 'src/components/TopApologies/TopApologies';

import { closeHeaderMenu } from 'src/actions/header';

import {
  fetchApologiesCount,
  fetchAllFamousApologies,
} from 'src/actions/topApologies';

// === mapStateToProps
const mapStateToProps = (state) => ({
  apologyNumber: state.topApologies.apologyNumber,
  bestApologies: state.topApologies.bestApologies,
  apologiesLoaded: state.topApologies.apologiesLoaded,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  closeHeaderMenu: () => {
    dispatch(closeHeaderMenu());
  },
  fetchApologiesCount: () => {
    dispatch(fetchApologiesCount());
  },
  fetchAllFamousApologies: () => {
    dispatch(fetchAllFamousApologies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopApologies);
