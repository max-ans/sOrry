import { connect } from 'react-redux';

import Registration from 'src/components/Registration/Registration';

import {
  changeInputValue,
  submitRegistrationForm,
} from 'src/actions/registration';

const mapStateToProps = (state) => ({
  email: state.registration.email,
  password: state.registration.password,
  firstname: state.registration.firstname,
  lastname: state.registration.lastname,
  nickname: state.registration.nickname,
  registrationError: state.registration.registrationError,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (field, value) => {
    dispatch(changeInputValue(field, value));
  },
  submitForm: () => {
    dispatch(submitRegistrationForm());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
