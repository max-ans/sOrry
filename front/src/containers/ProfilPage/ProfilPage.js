import { connect } from 'react-redux';

import ProfilPage from 'src/components/ProfilPage/ProfilPage';

const mapStateToProps = (state) => ({
  user: state.connection.user,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilPage);
