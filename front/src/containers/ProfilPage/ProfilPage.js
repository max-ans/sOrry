import { connect } from 'react-redux';
import {
  updateUserInput,
  sendUserForm,
  updatePasswordInput,
  inputFormatWrong,
} from 'src/actions/profilPage';

import ProfilPage from 'src/components/ProfilPage/ProfilPage';

const mapStateToProps = (state) => ({
  user: state.user.user,
  password: state.user.password,
  email: state.user.email,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  nickname: state.user.nickname,
  failure: state.user.failure,
  emailFormat: state.user.emailFormat,
  passwordFormat: state.user.passwordFormat,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserInput: (value, field) => {
    dispatch(updateUserInput(value, field));
  },
  updatePasswordInput: (value) => {
    dispatch(updatePasswordInput(value));
  },
  sendUserForm: () => {
    dispatch(sendUserForm());
  },
  inputFormatWrong: (bool, field) => {
    dispatch(inputFormatWrong(bool, field));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilPage);