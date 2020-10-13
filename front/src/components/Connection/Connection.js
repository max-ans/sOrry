import React from 'react';

import './connection.scss';

const Connection = () => (
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
            type="text"
            name="password"
            id="password"
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

export default Connection;
