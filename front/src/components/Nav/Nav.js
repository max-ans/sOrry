/* eslint-disable quote-props */
import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { User, UserCheck } from 'react-feather';
import className from 'classnames';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import './nav.scss';

const Nav = ({ menuIsOpen, isLogged, user }) => (
  <nav className={className('header-nav', { 'header-nav isClose': !menuIsOpen })}>
    <a href="" className="header-nav-items">
      Top excuses
    </a>
    <a href="" className="header-nav-items">
      Excuses par Catégories
    </a>
    <Link
      className="header-nav-items"
      to="/a-propos"
    >
      À propos
    </Link>
    <Link
      className="header-nav-items"
      to="/contact"
    >
      Contact
    </Link>
    <Link
      className={className('header-nav-items--user', { 'connected': isLogged })}
      to="/connexion"
    >
      {!isLogged && (
        <User
          className="header-nav-items-icon"
        />
      )}
      {isLogged && (
        <Tippy
          className="user-icon-tooltip"
          interactive
          animation
          inertia
          placement="bottom"
          duration={100}
          zIndex={9999}
          content={(
            <>
              <h3 className="tooltip-title">
                Connecté en tant que:
              </h3>
              <ul className="tooltip-list">
                <li className="tooltip-items">Email: {user.email}</li>
                <li className="tooltip-items">Pseudo: {user.nickname}</li>
              </ul>
              <button
                type="button"
                className="tooltip-button"
              >
                Se déconnecter
              </button>
            </>
          )}
        >
          <UserCheck
            className="header-nav-items-icon connected"
          />
        </Tippy>
      )}
    </Link>
  </nav>
);
Nav.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    nickname: PropTypes.string,
  }).isRequired,
};

export default Nav;
