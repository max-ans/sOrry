import { connect } from 'react-redux';
import Connection from 'src/components/Connection/Connection';

import {
  updateConnectionInput,
  setRememberMe,
  sendLoginForm,
} from 'src/actions/connection';

const mapStateToProps = (state) => ({
  login: state.connection.login,
  password: state.connection.password,
  rememberMe: state.connection.rememberMe,
  loginError: state.connection.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  updateConnectionInput: (newValue, field) => {
    dispatch(updateConnectionInput(newValue, field));
  },
  setRememberMe: () => {
    dispatch(setRememberMe());
  },
  sendLoginForm: () => {
    dispatch(sendLoginForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
