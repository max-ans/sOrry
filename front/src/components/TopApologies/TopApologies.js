import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThumbsUp } from 'react-feather';
import Loader from 'src/components/Loader/Loader';

import './topApologies.scss';

const TopApologies = ({
  closeHeaderMenu,
  fetchApologiesCount,
  fetchAllFamousApologies,
  apologyNumber,
  apologiesLoaded,
  bestApologies,
}) => {
  useEffect(() => {
    closeHeaderMenu();
    fetchApologiesCount();
    fetchAllFamousApologies();
  }, []);

  return (
    <div className="top-apologies">
      {!apologiesLoaded && <Loader />}
      {apologiesLoaded && (
        <>
          <div className="top-description">
            <h3 className="description-title">
              Les excuses les mieux notés
            </h3>
            <p className="description-paragraphe">
              Vous trouverez ici, les excuses les mieux notés par la communauté.
              N'hesitez pas, vous aussi a créer votre compte pour poster
              vos meilleurs excuses de retard ou autre.
              Actuellement, {apologyNumber} excuses ont était postées.
            </p>
          </div>
          <section className="all-apologies">
            <ul className="apologies-list">
              {bestApologies.map((apologie) => (
                <li className="apologies-item" key={apologie.id}>
                  <Link
                    to={`/excuse/${apologie.slug}`}
                    className="item-link"
                  >
                    <div className="item-title">
                      {apologie.title}
                    </div>
                    <div className="item-content">
                      <ThumbsUp />
                      {apologie.likes}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

TopApologies.propTypes = {
  closeHeaderMenu: PropTypes.func.isRequired,
  fetchApologiesCount: PropTypes.func.isRequired,
  fetchAllFamousApologies: PropTypes.func.isRequired,
  apologyNumber: PropTypes.number.isRequired,
  apologiesLoaded: PropTypes.bool.isRequired,
  bestApologies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      author: PropTypes.shape({
        nickname: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default TopApologies;
