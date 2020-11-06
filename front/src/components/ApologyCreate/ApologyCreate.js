import React, { useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';
import { HelpCircle } from 'react-feather';
import Loader from 'src/components/Loader/Loader';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './apologyCreate.scss';

const ApologyCreate = ({
  fetchAllCategories,
  categories,
  title,
  content,
  updateInputValueByField,
  addSelectedCategories,
  selectedCategories,
  removeSelectedCategories,
  sendApologyForm,
  error,
  success,
}) => {
  useEffect(() => {
    fetchAllCategories();
  }, []);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    sendApologyForm();
  };

  return (
    <div className="apology-create">
      { (categories.length <= 0) && <Loader />}
      { (categories.length > 0) && (
        <form
          action=""
          className="apology-form"
          onSubmit={handleFormSubmit}
        >
          <fieldset
            className="form-fieldset"
          >
            <legend className="form-legend">Poster une excuse</legend>
            {success && (
              <div className="form-success">
                <p className="success-text">
                  Votre nouvelle excuse a bien été enregisté
                </p>
              </div>
            )}
            <div className="form-help">
              <Tippy
                className="help-tooltip"
                trigger="click"
                placement="left-start"
                inertia
                maxWidth={225}
                animation="scale"
                interactive
                arrow={false}
                content={(
                  <>
                    <ul className="tooltip-list">
                      <li className="tooltip-items">
                        - Le titre doit contenir au minimum trois caractères
                      </li>
                      <li className="tooltip-items">
                        - Le texte de votre excuse doit contenir au minimum 20 caractères
                      </li>
                    </ul>
                  </>
                )}
              >
                <HelpCircle className="help-icon" size="40" />
              </Tippy>
            </div>
            {error && (
              <div className="form-error">
                <p className="error-description">
                  Un champ du formulaire ne respecte pas les règles.
                  n'hésitez pas a consulter l'aide présente sur l'icone
                  représentée par un point d'interrogation.
                </p>
              </div>
            )}
            <label htmlFor="title" className="form-label">
              Titre de l'excuse :
              <input
                type="text"
                className="form-input"
                id="title"
                name="title"
                value={title}
                onChange={(evt) => {
                  updateInputValueByField(evt.target.value, 'title');
                }}
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
                value={content}
                onChange={(evt) => {
                  updateInputValueByField(evt.target.value, 'content');
                }}
              />
            </label>
            <div className="form-categories-choice">
              <h2 className="form-categories-title">
                Les catégories :
              </h2>
              <div className="form-categories">
                { categories.map((category) => (
                  <label key={category.id} htmlFor="checkbox" className="form-label checkbox">
                    {category.title}
                    <input
                      type="checkbox"
                      className="form-input checkbox"
                      id={`checkbox-${category.slug}`}
                      name="checkbox"
                      value={category.id}
                      onClick={(evt) => {
                        if (!selectedCategories.includes(String(category.id))) {
                          addSelectedCategories(evt.target.value);
                        }
                        else {
                          removeSelectedCategories(evt.target.value);
                        }
                      }}
                    />
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="form-submit"
            >
              Poster
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

ApologyCreate.propTypes = {
  fetchAllCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  updateInputValueByField: PropTypes.func.isRequired,
  addSelectedCategories: PropTypes.func.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  removeSelectedCategories: PropTypes.func.isRequired,
  sendApologyForm: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,

};

export default ApologyCreate;
