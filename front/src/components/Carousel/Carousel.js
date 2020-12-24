import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Loader from 'src/components/Loader/Loader';

import './carousel.scss';

const Carousel = ({
  bestApologies,
  fetchBestApologies,
  loader,
  closeHeaderMenu,
}) => {
  useEffect(() => {
    fetchBestApologies();
  }, []);
  useEffect(() => {
    closeHeaderMenu();
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel">
      {loader && <Loader />}
      {!loader
        && (
        <Slider
          {...settings}
          autoplay
          autoplaySpeed={5000}
          className="carousel-slider"

        >
          {bestApologies.map((bestApologie) => (
            <div key={bestApologie.id} className="carousel-item">
              <Link
                to={`excuse/${bestApologie.slug}`}
              >
                <h2 className="carousel-item-title">
                  {bestApologie.title}
                </h2>
                <div className="carousel-item-content">
                  &ldquo; {bestApologie.content} &bdquo;
                </div>
                <small className="carousel-item-small">
                  {bestApologie.author.nickname}, le {bestApologie.createdAt}
                </small>
              </Link>
            </div>
          ))}
        </Slider>
        )}
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
  closeHeaderMenu: PropTypes.func.isRequired,
};

export default Carousel;
