import { connect } from 'react-redux';
import About from 'src/components/About/About';

import { closeHeaderMenu } from 'src/actions/header';

// === mapStateToProps
const mapStateToProps = (state) => ({
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  closeHeaderMenu: () => {
    dispatch(closeHeaderMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
