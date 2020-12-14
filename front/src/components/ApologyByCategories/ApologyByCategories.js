import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader/Loader';
import { ThumbsUp } from 'react-feather';

import './apology_by_categories.scss';

const ApologyByCategories = ({
  closeHeaderMenu,
  fetchCurrentCategorie,
  apologiesLoaded,
  currentCategorie,
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
          <div className="apologies-list">
            <ul>
              {currentCategorie.apologies.map((apologie) => (
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
              ))}
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
};

ApologyByCategories.defaultProps = {
  currentCategorie: {},
};

export default ApologyByCategories;
