import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'react-feather';

import Nav from './Nav';

import './header.scss';

const Header = ({ openMenu, toggleMenu }) => {
  console.log(openMenu);
  return (
    <header className="header">
      <h1 className="header-title">s'Orry</h1>
      <Menu
        className="header-burgerButton"
        onClick={toggleMenu}
      />
      {openMenu && <Nav /> }
    </header>
  );
};
Header.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Header;
