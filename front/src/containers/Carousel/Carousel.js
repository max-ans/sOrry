import { connect } from 'react-redux';
import { fetchBestApologies } from 'src/actions/carousel';

import Carousel from 'src/components/Carousel/Carousel';

const mapStateToProps = (state) => ({
  bestApologies: state.carousel.bestApologies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBestApologies: () => {
    dispatch(fetchBestApologies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
