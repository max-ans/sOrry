import React, { useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';

import './apologyCreate.scss';

const ApologyCreate = ({
  fetchAllCategories,
  categories,
}) => {
  useEffect(() => {
    fetchAllCategories();
  }, []);

  console.log(categories);
  return (
    <div className="apology-create">
      <form
        action=""
        className="apology-form"
      >
        <fieldset
          className="form-fieldset"
        >
          <legend className="form-legend">Poster une excuse</legend>
          <label htmlFor="title" className="form-label">
            Titre de l'excuse :
            <input
              type="text"
              className="form-input"
              id="title"
              name="title"
            />
          </label>
          <label htmlFor="apology" className="form-label">
            L'excuse :
            <textarea
              rows="10"
              type="textarea"
              className="form-input"
              id="apology"
              name="apology"
            />
          </label>
          { categories.forEach((category) => (
            <label htmlFor="checkbox" className="form-label checkbox">
              {category.title}
              <input
                type="checkbox"
                className="form-input checkbox"
                id="checkbox"
                name="checkbox"
              />
            </label>
          ))}
          <button
            type="submit"
            className="form-submit"
          >
            Poster
          </button>
        </fieldset>
      </form>
    </div>
  );
};

ApologyCreate.propTypes = {
  fetchAllCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ApologyCreate;
