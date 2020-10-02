import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from '@react-hook/window-size';
import { Menu } from 'react-feather';

import Nav from './Nav';

import './header.scss';

const Header = ({ openMenu, toggleMenu, setOpenMenu }) => {
  console.log(openMenu);
  const [width] = useWindowSize();
  console.log(width);
  useEffect(() => {
    if (width > 768) {
      setOpenMenu();
    }
  });
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
  setOpenMenu: PropTypes.func.isRequired,
};

export default Header;
