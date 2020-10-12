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
        > Pseudo ou adresse mail
          <input
            type="text"
            name="nickname"
            id="nickname"
            required
            className="connection-form-input"
          />
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
            className="connection-form-input"
          />
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
