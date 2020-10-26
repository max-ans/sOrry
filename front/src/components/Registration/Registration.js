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
          className="registration-form field"
          identifier="email"
          placeholder="votre@email.com"
          label="E-mail"
        />
        <Field
          className="registration-form field"
          identifier="password"
          placeholder="Entrer un mot de passe sur"
          label="Mot de passe"
        />
        <Field
          className="registration-form field"
          identifier="firstname"
          placeholder="Prénom"
          label="Prénom"
        />
        <Field
          className="registration-form field"
          identifier="lastname"
          placeholder="Nom de famille"
          label="Nom"
        />
        <Field
          className="registration-form field"
          identifier="nickname"
          placeholder="Votre pseudo"
          label="Pseudo"
        />
        <button type="submit">S'enregistrer</button>
        <p className="registration-form-paragraphe">
          Déjà inscrit ? Connectez vous <a href="">ici</a> .
        </p>
      </fieldset>
    </form>
  </div>
);

export default Registration;
