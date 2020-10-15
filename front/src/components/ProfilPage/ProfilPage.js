import React from 'react';

import './profilPage.scss';

const ProfilPage = () => (
  <section className="profilPage">
    <div className="profil-left">
      <form action="" className="profil-left-form">
        <label htmlFor="firstname" className="form-label">
          <input
            type="text"
            className="form-input firstname"
            id="firstname"
            name="firstname"
          />
        </label>
        <label htmlFor="lastname" className="form-label">
          <input
            type="text"
            className="form-input lastname"
            id="lastname"
            name="lastname"
          />
        </label>
        <label htmlFor="nickname" className="form-label">
          <input
            type="text"
            className="form-input nickname"
            id="nickname"
            name="nickname"
          />
        </label>
        <label htmlFor="mail" className="form-label">
          <input
            type="text"
            className="form-input mail"
            id="mail"
            name="mail"
          />
        </label>
        <label htmlFor="password" className="form-label">
          <input
            type="text"
            className="form-input password"
            id="password"
            name="password"
          />
        </label>
      </form>
    </div>
    <div className="profil-right">
      <ul className="profil-right-list">
        <li className="profil-right-list-items"><a href="" className="items-link">1ere histoire</a></li>
        <li className="profil-right-list-items"><a href="" className="items-link">2ème histoire</a></li>
        <li className="profil-right-list-items"><a href="" className="items-link">3ème histoire</a></li>
        <li className="profil-right-list-items"><a href="" className="items-link">4ème histoire</a></li>
      </ul>
    </div>
  </section>
);

export default ProfilPage;
