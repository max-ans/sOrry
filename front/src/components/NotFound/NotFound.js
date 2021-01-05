import React from 'react';
import { Link } from 'react-router-dom';

import './notFound.scss';

const NotFound = () => (
  <div className="notFound">
    <h2 className="not-found-title">
      <span
        className="emoji"
        role="img"
        aria-label="banana"
      >
        🍌
      </span>
      &nbsp;404 Not Found&nbsp;
      <span
        className="emoji"
        role="img"
        aria-label="banana"
      >
        🍌
      </span>
    </h2>
    <p className="not-found-description">
      La page que vous demandez n'existe pas ou a été déplacée
    </p>
    <button
      className="back-link"
      type="button"
    >
      <Link
        to="/"
      >
        Revenir à la page d'accueil
      </Link>
    </button>
  </div>
);

export default NotFound;
