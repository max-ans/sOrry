import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field/Field';

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
          <Field
            className="registration-form-field"
            identifier="email"
            label="E-mail"
            value={email}
            changeField={changeInputValue}
          />
          <Field
            className="registration-form-field"
            identifier="password"
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
  changeInputValue: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default Registration;
