import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field/Field';
import { AlertOctagon, HelpCircle } from 'react-feather';

import { Link } from 'react-router-dom';

import './registration.scss';

const Registration = ({
  email,
  password,
  firstname,
  lastname,
  nickname,
  changeInputValue,
  submitForm,
  registrationError,
  emptyField,
}) => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    submitForm();
  };
  return (
    <div className="registration">
      <form
        action=""
        className="registration-form"
        onSubmit={handleFormSubmit}
      >
        <fieldset className="registration-form fieldset">
          <legend className="registration-form legend">Inscription</legend>
          <div className="registration-form-information">
            <HelpCircle className="help" />
            <ul className="information-list">
              <li className="list-items">
                - Le format doit convenir au format e-mail : votre@email.com
              </li>
              <li className="list-items">
                - Le mot de passe doit contenir 1 caractère majuscule, 1 caractère minuscule,
                1 caractère spécial, 1 chiffre et entre 8 et 16 caractères
              </li>
              <li className="list-items">
                - Le prénom ne doit pas dépasser 50 caractères
              </li>
              <li className="list-items">
                - Le nom ne doit pas dépasser 50 caractères
              </li>
              <li className="list-items">
                - Le pseudo ne doit pas dépasser 50 caractères
              </li>
            </ul>
          </div>
          {registrationError && (
            <div className="registration-form-error">
              <AlertOctagon />
              <span className="message">
                {emptyField ? 'Tous les champs ne sont pas remplis...' : 'Certains champs ne sont pas conformes...'}
              </span>
            </div>
          )}
          <Field
            className="registration-form-field"
            identifier="email"
            type="email"
            label="E-mail"
            value={email}
            changeField={changeInputValue}
          />
          <Field
            className="registration-form-field"
            identifier="password"
            type="password"
            label="Mot de passe"
            value={password}
            changeField={changeInputValue}
          />
          <Field
            className="registration-form-field"
            identifier="firstname"
            label="Prénom"
            value={firstname}
            changeField={changeInputValue}
          />
          <Field
            className="registration-form-field"
            identifier="lastname"
            label="Nom"
            value={lastname}
            changeField={changeInputValue}
          />
          <Field
            className="registration-form-field"
            identifier="nickname"
            label="Pseudo"
            value={nickname}
            changeField={changeInputValue}
          />
          <button className="registration-form-button" type="submit">S'enregistrer</button>
          <p className="registration-form-paragraphe">
            Déjà inscrit ? Connectez vous <Link to="/connexion" className="paragraphe-link">ici</Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};
Registration.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  registrationError: PropTypes.bool.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  emptyField: PropTypes.bool.isRequired,
};

export default Registration;
