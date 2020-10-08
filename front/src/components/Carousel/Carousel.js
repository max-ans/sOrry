import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from 'src/components/Loader/Loader';

import './carousel.scss';

const Carousel = ({ bestApologies, fetchBestApologies, loader }) => {
  useEffect(() => {
    fetchBestApologies();
  }, []);
  return (
    <div className="carousel">
      {loader && <Loader />}
      {console.log(bestApologies)}
    </div>
  );
};
Carousel.propTypes = {
  bestApologies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      author: PropTypes.shape({
        nickname: PropTypes.string.isRequired,
      }).isRequired,
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          author: PropTypes.shape({
            nickname: PropTypes.string.isRequired,
          }).isRequired,
          content: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,

    }).isRequired,
  ).isRequired,
  fetchBestApologies: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
};

export default Carousel;
