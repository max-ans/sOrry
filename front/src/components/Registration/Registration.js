import React from 'react';
import Field from 'src/components/Field/Field';
import { Link } from 'react-router-dom';

import './registration.scss';

const Registration = () => (
  <div className="registration">
    <form action="" className="registration-form">
      <fieldset className="registration-form fieldset">
        <legend className="registration-form legend">Inscription</legend>
        <Field
          className="registration-form-field"
          identifier="email"
          label="E-mail"
        />
        <Field
          className="registration-form-field"
          identifier="password"
          label="Mot de passe"
        />
        <Field
          className="registration-form-field"
          identifier="firstname"
          label="Prénom"
        />
        <Field
          className="registration-form-field"
          identifier="lastname"
          label="Nom"
        />
        <Field
          className="registration-form-field"
          identifier="nickname"
          label="Pseudo"
        />
        <button className="registration-form-button" type="submit">S'enregistrer</button>
        <p className="registration-form-paragraphe">
          Déjà inscrit ? Connectez vous <Link to="/connexion" className="paragraphe-link">ici</Link>
        </p>
      </fieldset>
    </form>
  </div>
);

export default Registration;
