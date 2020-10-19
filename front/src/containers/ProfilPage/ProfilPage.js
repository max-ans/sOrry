import { connect } from 'react-redux';
import {
  updateUserInput,
} from 'src/actions/profilPage';

import ProfilPage from 'src/components/ProfilPage/ProfilPage';

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserInput: (value, field) => {
    dispatch(updateUserInput(value, field));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilPage);
