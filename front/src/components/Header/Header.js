import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'react-feather';
import className from 'classnames';

import Nav from 'src/containers/Nav/Nav';

import './header.scss';

const Header = ({ setMenuIsOpen, menuIsOpen }) => (
  <header className="header">
    <div className="header-banner">
      <h1 className="header-title">
        s'Orry
      </h1>
      <Menu
        className={className('header-buttonMenu ', { 'isActive ': menuIsOpen })}
        onClick={setMenuIsOpen}
      />
    </div>
    <Nav />
  </header>
);
Header.propTypes = {
  setMenuIsOpen: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};

export default Header;
