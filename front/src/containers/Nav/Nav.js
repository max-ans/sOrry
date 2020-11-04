import { connect } from 'react-redux';

import Nav from 'src/components/Nav/Nav';

import {
  disconnectCurrentUser,
} from 'src/actions/connection';

const mapStateToProps = (state) => ({
  menuIsOpen: state.header.menuIsOpen,
  isLogged: state.connection.isLogged,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  disconnectCurrentUser: () => {
    dispatch(disconnectCurrentUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
