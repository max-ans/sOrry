import { connect } from 'react-redux';
import {
  updateUserInput,
  sendUserForm,
  updatePasswordInput,
  inputFormatWrong,
  resetRedirect,
  fetchUserApologies,
  resetSuccess,
} from 'src/actions/profilPage';

import {
  closeHeaderMenu,
} from 'src/actions/header';

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
  success: state.user.success,
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
  closeHeaderMenu: () => {
    dispatch(closeHeaderMenu());
  },
  resetRedirect: () => {
    dispatch(resetRedirect());
  },
  fetchUserApologies: () => {
    dispatch(fetchUserApologies());
  },
  resetSuccess: () => {
    dispatch(resetSuccess());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilPage);
