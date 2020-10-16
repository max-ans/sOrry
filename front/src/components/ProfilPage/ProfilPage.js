import React from 'react';
import PropTypes from 'prop-types';
import { ThumbsUp } from 'react-feather';

import './profilPage.scss';

const ProfilPage = ({ user }) => (
  <section className="profilPage">
    <div className="profil-left">
      <form action="" className="profil-left-form">
        <label htmlFor="firstname" className="form-label">Prénom :
          <input
            type="text"
            className="form-input firstname"
            id="firstname"
            value={user.firstname}
            name="firstname"
            onChange={() => console.log('tape')}
          />
        </label>
        <label htmlFor="lastname" className="form-label"> Nom :
          <input
            type="text"
            className="form-input lastname"
            id="lastname"
            name="lastname"
            value={user.lastname}
            onChange={() => console.log('tape')}
          />
        </label>
        <label htmlFor="nickname" className="form-label"> Pseudo :
          <input
            type="text"
            className="form-input nickname"
            id="nickname"
            name="nickname"
            value={user.nickname}
            onChange={() => console.log('tape')}

          />
        </label>
        <label htmlFor="mail" className="form-label"> Email :
          <input
            type="email"
            className="form-input mail"
            id="mail"
            name="mail"
            value={user.email}
            onChange={() => console.log('tape')}
          />
        </label>
        <label htmlFor="password" className="form-label"> Mot de passe :
          <input
            type="password"
            className="form-input password"
            id="password"
            name="password"
            readOnly
          />
        </label>
      </form>
    </div>
    <hr />
    <div className="profil-right">
      <h2 className="list-title">
        Vos excuses
      </h2>
      <ul className="profil-right-list">
        {(user.apologies.length > 0) && (
          user.apologies.map((apologie) => (
            <li key={apologie.id} className="profil-right-list-items">
              <div className="items-left">
                <a href="" className="items-link">
                  {apologie.title}
                </a>
                <p className="items-content">
                  {apologie.content.substr(0, 35)} ....
                </p>
              </div>
              <div className="items-right">
                <p className="items-likes">
                  <ThumbsUp /> <br /> 46658
                </p>
              </div>
            </li>
          )))}
        {(user.apologies.length <= 0) && (
          <div className="list-empty">
            <p className="list-empty-info">
              Vous n'avez encore publié aucune excuses.
            </p>
            <p className="list-empty-info">
              Rendez-vous <a href="" className="list-empty-redirect">ici</a> pour publier votre
              première excuses ;-)
            </p>
          </div>
        )}
      </ul>
    </div>
  </section>
);

ProfilPage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    apologies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default ProfilPage;
