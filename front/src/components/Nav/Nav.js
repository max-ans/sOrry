import React from 'react';
import PropTypes from 'prop-types';
import { User } from 'react-feather';
import className from 'classnames';

import './nav.scss';

const Nav = ({ menuIsOpen }) => (
  <nav className={className('header-nav', { 'header-nav isClose': menuIsOpen })}>
    <a href="" className="header-nav-items">
      Top excuses
    </a>
    <a href="" className="header-nav-items">
      Excuses par Catégories
    </a>
    <a href="" className="header-nav-items">
      À propos
    </a>
    <a href="" className="header-nav-items">
      Contact
    </a>
    <a href="" className="header-nav-items--user">
      <User
        className="header-nav-items-icon"
      />
    </a>
  </nav>
);
Nav.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
};

export default Nav;
