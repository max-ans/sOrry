import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader/Loader';
import { Link } from 'react-router-dom';

import './categories.scss';

const Categories = ({
  categoriesFetched,
  fetchCategories,
  allCategories,
  closeHeaderMenu,
}) => {
  useEffect(() => {
    fetchCategories();
    closeHeaderMenu();
  }, []);

  return (
    <main className="categories">
      {!categoriesFetched && <Loader />}
      {categoriesFetched && (
        allCategories.map((categorie) => (
          <div key={categorie.id} className="categorie">
            <Link
              to={`/categories/${categorie.slug}`}
            >
              <h4 className="categorie-title">
                {categorie.title}
              </h4>
              <p className="categorie-description">
                {categorie.description}
              </p>
            </Link>
          </div>
        ))
      )}
    </main>
  );
};
Categories.propTypes = {
  categoriesFetched: PropTypes.bool.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  allCategories: PropTypes.array.isRequired,
  closeHeaderMenu: PropTypes.func.isRequired,
};

export default Categories;
