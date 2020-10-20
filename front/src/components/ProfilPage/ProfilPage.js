import React from 'react';
import PropTypes from 'prop-types';
import { ThumbsUp, AlertOctagon } from 'react-feather';
import className from 'classnames';

import { validateEmailFormat } from 'src/utils';

import './profilPage.scss';

const ProfilPage = ({
  user,
  email,
  firstname,
  lastname,
  nickname,
  password,
  updateUserInput,
  sendUserForm,
  updatePasswordInput,
  failure,
  format,
  inputFormatWrong,
}) => {
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    sendUserForm();
  };
  return (
    <section className="profilPage">
      <div className="profil-left">
        <form action="" className="profil-left-form" onSubmit={handleSubmitForm}>
          {failure && (
            <div className="form-message">
              <AlertOctagon /> <span className="message">Il y a un problème dans le formulaire</span>
            </div>
          )}
          <label htmlFor="mail" className="form-label"> Email :
            <input
              type="email"
              // eslint-disable-next-line quote-props
              className={className('form-input mail', { 'wrong': format })}
              id="mail"
              name="mail"
              value={email}
              onChange={(evt) => {
                updateUserInput(evt.target.value, 'email');
              }}
              onBlur={(evt) => {
                if (!validateEmailFormat(evt.target.value)) {
                  inputFormatWrong(!validateEmailFormat(evt.target.value));
                }
                else {
                  inputFormatWrong(!validateEmailFormat(evt.target.value));
                }
              }}
            />
          </label>
          <label htmlFor="password" className="form-label"> Mot de passe :
            <input
              type="password"
              className="form-input "
              id="password"
              name="password"
              value={password}
              onChange={(evt) => {
                updatePasswordInput(evt.target.value);
              }}

            />
          </label>
          <label htmlFor="firstname" className="form-label">Prénom :
            <input
              type="text"
              className="form-input firstname"
              id="firstname"
              value={firstname}
              name="firstname"
              onChange={(evt) => {
                updateUserInput(evt.target.value, 'firstname');
              }}
            />
          </label>
          <label htmlFor="lastname" className="form-label"> Nom :
            <input
              type="text"
              className="form-input lastname"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={(evt) => {
                updateUserInput(evt.target.value, 'lastname');
              }}
            />
          </label>
          <label htmlFor="nickname" className="form-label"> Pseudo :
            <input
              type="text"
              className="form-input nickname"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={(evt) => {
                updateUserInput(evt.target.value, 'nickname');
              }}

            />
          </label>
          <button
            type="submit"
            className="form-submit"
          >
            Enregistrer les modifications
          </button>
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
                    <ThumbsUp /> <br /> {apologie.likes}
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
                première excuses &#128521;
              </p>
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};
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
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  updateUserInput: PropTypes.func.isRequired,
  sendUserForm: PropTypes.func.isRequired,
  updatePasswordInput: PropTypes.func.isRequired,
  failure: PropTypes.bool.isRequired,
  format: PropTypes.bool.isRequired,
  inputFormatWrong: PropTypes.func.isRequired,
};

export default ProfilPage;
