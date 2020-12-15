import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader/Loader';
import { ThumbsUp } from 'react-feather';

import OrderButton from './OrderButton';
import './apology_by_categories.scss';

const ApologyByCategories = ({
  closeHeaderMenu,
  fetchCurrentCategorie,
  apologiesLoaded,
  currentCategorie,
  orderingByLikes,
  orderedByLikes,
}) => {
  const { slug } = useParams();

  useEffect(() => {
    closeHeaderMenu();
    fetchCurrentCategorie(slug);
  }, []);

  return (
    <div className="apology-by-categories">
      {!apologiesLoaded && <Loader />}
      {apologiesLoaded && (
        <>
          <h2 className="categorie-title">
            {currentCategorie.title}
          </h2>
          <OrderButton
            action={orderingByLikes}
            status={orderedByLikes}
          />
          <div className="apologies-list">
            <ul>
              {!orderedByLikes && (
                // reverse for have apologie in datetime order
                currentCategorie.apologies.reverse().map((apologie) => (
                  <li key={apologie.title} className="apologie-list-item">
                    <h3 className="apologie-title">
                      {apologie.title}
                    </h3>
                    <p className="apologie-content">
                      {apologie.content}
                    </p>
                    <div className="apologie-infos">
                      <small className="apologie-author">
                        {apologie.author.nickname} le {apologie.createdAt}
                      </small>
                      <p className="apologie-likes">
                        <ThumbsUp />
                        {apologie.likes}
                      </p>
                    </div>
                  </li>
                ))
              )}
              {orderedByLikes && (
                // order by likes
                currentCategorie.apologies.sort((a, b) => (
                  b.likes - a.likes
                )).map((apologie) => (
                  <li key={apologie.title} className="apologie-list-item">
                    <h3 className="apologie-title">
                      {apologie.title}
                    </h3>
                    <p className="apologie-content">
                      {apologie.content}
                    </p>
                    <div className="apologie-infos">
                      <small className="apologie-author">
                        {apologie.author.nickname} le {apologie.createdAt}
                      </small>
                      <p className="apologie-likes">
                        <ThumbsUp />
                        {apologie.likes}
                      </p>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </>
      )}
      <div className="go-back">
        <Link
          to="/excuses-par-categories"
        >
          <button
            type="button"
            className="go-back-button"
          >
            Revenir au menu des catégories
          </button>
        </Link>
      </div>
    </div>
  );
};

ApologyByCategories.propTypes = {
  closeHeaderMenu: PropTypes.func.isRequired,
  fetchCurrentCategorie: PropTypes.func.isRequired,
  apologiesLoaded: PropTypes.bool.isRequired,
  currentCategorie: PropTypes.shape({
    apologies: PropTypes.array,
    description: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  orderingByLikes: PropTypes.func.isRequired,
  orderedByLikes: PropTypes.bool.isRequired,
};

ApologyByCategories.defaultProps = {
  currentCategorie: {},
};

export default ApologyByCategories;
