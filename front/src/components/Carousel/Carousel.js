import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './carousel.scss';

const Carousel = ({ bestApologies, fetchBestApologies }) => {
  useEffect(() => {
    fetchBestApologies();
  }, []);
  return (
    <div className="carousel">
      {console.log(bestApologies)}
    </div>
  );
};
Carousel.propTypes = {
  bestApologies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  fetchBestApologies: PropTypes.func.isRequired,
};

export default Carousel;
