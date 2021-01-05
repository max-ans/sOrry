import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';
import Banana from 'src/assets/images/banana.jpeg';

const Footer = () => (
  <footer className="footer">
    <div className="footer-flex">
      <div className="footer-left">
        <div className="footer-left-left">
          <nav className="footer-left-navleft">
            <Link
              className="navleft-items"
              to="/"
            >
              Sorry
            </Link>
            <Link
              className="navleft-items"
              to="/top-excuses"
            >
              Top excuses
            </Link>
            <Link
              to="/excuses-par-categories"
              className="navleft-items"
            >
              Excuses par catégorie
            </Link>
          </nav>
        </div>
        <div className="footer-left-right">
          <nav className="footer-left-navright">
            <Link
              to="/a-propos"
              className="navright-items"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="navright-items"
            >
              Contact
            </Link>
            <Link
              className="navright-items"
              to="/connexion"
            >
              Mon profil
            </Link>
          </nav>
        </div>
      </div>
      <div className="footer-right">
        <img src={Banana} alt="" className="footer-right-icon" />
      </div>
    </div>
    <div className="footer-bottom">
      &copy; Max-ans  | make with &hearts; by Maxence Royer
    </div>

  </footer>
);

export default Footer;
