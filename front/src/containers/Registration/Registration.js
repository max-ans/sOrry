import { connect } from 'react-redux';

import Registration from 'src/components/Registration/Registration';

const mapStateToProps = (state) => ({
  email: state.registration.email,
  password: state.registration.password,
  firstname: state.registration.firstname,
  lastname: state.registration.lastname,
  nickname: state.registration.nickname,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
