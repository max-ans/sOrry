/* eslint-disable quote-props */
import React from 'react';
import PropTypes from 'prop-types';
import { User, UserCheck } from 'react-feather';
import className from 'classnames';
import { Link } from 'react-router-dom';

import './nav.scss';

const Nav = ({ menuIsOpen, isLogged }) => (
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
        <UserCheck
          className="header-nav-items-icon connected"
        />
      )}
    </Link>
  </nav>
);
Nav.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Nav;
