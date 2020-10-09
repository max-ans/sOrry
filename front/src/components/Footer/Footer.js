import React from 'react';

import './footer.scss';
import Banana from 'src/assets/images/banana.jpeg';

const Footer = () => (
  <footer className="footer">
    <div className="footer-flex">
      <div className="footer-left">
        <div className="footer-left-left">
          <nav className="footer-left-navleft">
            <a className="navleft-items" href="">Sorry</a>
            <a className="navleft-items" href="">Top excuses</a>
            <a className="navleft-items" href="">Excuses par catégorie</a>
          </nav>
        </div>
        <div className="footer-left-right">
          <nav className="footer-left-navright">
            <a className="navright-items" href="">À propos</a>
            <a className="navright-items" href="">Contact</a>
            <a className="navright-items" href="">Mon profil</a>
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
