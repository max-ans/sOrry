import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import Loader from 'src/components/Loader/Loader';
import { useParams, Link } from 'react-router-dom';
import { HelpCircle } from 'react-feather';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './apologyEdit.scss';

const ApologyEdit = ({
  fetchAllCategories,
  fetchApologyEdit,
  allCategories,
  selectedCategories,
  title,
  content,
  error,
  success,
  isFetched,
  updateApologyFieldEdit,
  addCategorie,
  removeCategorie,
  submit,
  categorieIsEmpty,
}) => {
  const { slug } = useParams();
  useEffect(() => {
    fetchAllCategories();
    fetchApologyEdit(slug);
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit(slug);
  };

  return (
    <div className="apology-create">
      {!isFetched && <Loader />}
      {isFetched && (
        <form
          action=""
          className="apology-form"
          onSubmit={handleSubmit}
        >
          <fieldset
            className="form-fieldset"
          >
            <legend className="form-legend">Modifier une excuse</legend>
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
            {success && (
              <div className="form-infos">
                <p className="infos-description">
                  Vos modifications ont étés validées
                  <Link
                    to="/mon-profil"
                  >
                    <small className="infos-link">
                      Revenir a la page de profil
                    </small>
                  </Link>
                </p>
              </div>
            )}
            {(categorieIsEmpty && error) && (
              <div className="form-error">
                <p className="error-description">
                  Il manque la catégorisation de l'excuse
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
                  updateApologyFieldEdit(evt.currentTarget.value, 'title');
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
                  updateApologyFieldEdit(evt.currentTarget.value, 'content');
                }}
              />
            </label>
            <div className="form-categories-choice">
              <h2 className="form-categories-title">
                Les catégories :
              </h2>
              <div className="form-categories">
                { allCategories.map((category) => (
                  <label key={category.id} htmlFor="checkbox" className="form-label checkbox">
                    {category.title}

                    <input
                      type="checkbox"
                      className="form-input checkbox"
                      id={`checkbox-${category.slug}`}
                      name="checkbox"
                      value={category.id}
                      onChange={(evt) => {
                        if (!selectedCategories.includes(String(category.id))) {
                          addCategorie(evt.target.value);
                        }
                        else {
                          removeCategorie(evt.target.value);
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
              Valider les modifications
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

ApologyEdit.propTypes = {
  fetchAllCategories: PropTypes.func.isRequired,
  fetchApologyEdit: PropTypes.func.isRequired,
  allCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  isFetched: PropTypes.bool.isRequired,
  updateApologyFieldEdit: PropTypes.func.isRequired,
  addCategorie: PropTypes.func.isRequired,
  removeCategorie: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  categorieIsEmpty: PropTypes.bool.isRequired,
};

export default ApologyEdit;
