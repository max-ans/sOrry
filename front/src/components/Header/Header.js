import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'react-feather';

import Nav from 'src/containers/Nav/Nav';

import './header.scss';

const Header = ({ setMenuIsOpen }) => (
  <header className="header">
    <div className="header-banner">
      <h1 className="header-title">
        s'Orry
      </h1>
      <Menu
        className="header-buttonMenu"
        onClick={setMenuIsOpen}
      />
    </div>
    <Nav />
  </header>
);
Header.propTypes = {
  setMenuIsOpen: PropTypes.func.isRequired,
};

export default Header;
