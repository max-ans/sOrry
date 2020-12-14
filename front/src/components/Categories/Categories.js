import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader/Loader';

import './categories.scss';

const Categories = ({
  categoriesFetched,
  fetchCategories,
  allCategories,
}) => {
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <main className="categories">
      {!categoriesFetched && <Loader />}
      {categoriesFetched && (
        allCategories.map((categorie) => (
          <div key={categorie.id} className="categorie">
            <h4 className="categorie-title">
              {categorie.title}
            </h4>
            <p className="categorie-description">
              {categorie.description}
            </p>
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
};

export default Categories;
