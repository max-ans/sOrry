import React from 'react';
import PropTypes from 'prop-types';

import './connection.scss';

const Connection = ({
  login,
  password,
  rememberMe,
  updateConnectionInput,
  setRememberMe,
}) => (
  <div className="connection">
    <form action="" className="connection-form">
      <fieldset className="connection-form-fieldset">
        <legend className="connection-form-legend">Connexion</legend>
        <label
          className="connection-form-label"
          htmlFor="nickname"
        > Identifiant
          <input
            type="text"
            name="nickname"
            id="nickname"
            value={login}
            onChange={(evt) => {
              updateConnectionInput(evt.target.value, 'login');
            }}
            required
            className="connection-form-input "
          />
          <span className="connection-form-input-info login">
            Adresse e-mail ou pseudo
          </span>
        </label>
        <label
          htmlFor="password"
          className="connection-form-label"
        > Mot de passe
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(evt) => {
              updateConnectionInput(evt.target.value, 'password');
            }}
            required
            className="connection-form-input "
          />
          <span className="connection-form-input-info password">
            Votre mot de passe doit respecter ce format:
            <ul className="info-list">
              <li className="info-list-item">Une lettre majuscule</li>
              <li className="info-list-item">Une lettre minuscule</li>
              <li className="info-list-item">Un chiffre</li>
              <li className="info-list-item">Un caractère spécial</li>
              <li className="info-list-item">Entre 8 et 16 caractères</li>
            </ul>
          </span>
        </label>
        <label
          htmlFor="checkbox"
          className="connection-form-label checkbox"
        >Se souvenir de moi
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="connection-form-input checkbox"
            checked={rememberMe}
            onChange={setRememberMe}
          />
        </label>
        <button
          type="submit"
          className="connection-form-button"
        >
          Connexion
        </button>
        <p className="connection-register-paragraphe ">
          Vous n'êtes pas inscrit ? cliquez <a href="" className="connection-register-link"> ici</a>
        </p>
      </fieldset>
    </form>
  </div>
);

Connection.propTypes = {
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  updateConnectionInput: PropTypes.func.isRequired,
  setRememberMe: PropTypes.func.isRequired,
};

export default Connection;
