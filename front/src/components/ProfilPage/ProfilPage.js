/* eslint-disable quote-props */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThumbsUp, AlertOctagon, PlusCircle } from 'react-feather';
import className from 'classnames';
import { Link, useParams } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import { validateEmailFormat, validatePasswordFormat } from 'src/utils';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
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
  success,
  failure,
  emailFormat,
  passwordFormat,
  inputFormatWrong,
  closeHeaderMenu,
  resetRedirect,
}) => {
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    sendUserForm();
  };
  useEffect(() => {
    closeHeaderMenu();
    resetRedirect();
  });
  const { slug } = useParams();
  return (
    <section className="profilPage">
      <div className="profil-left">
        <form action="" className="profil-left-form" onSubmit={handleSubmitForm}>
          {failure && (
            <div className="form-message">
              <AlertOctagon /> <span className="message">Il y a un problème dans le formulaire</span>
            </div>
          )}

          {success && (
            <div className="form-message success">
              <ThumbsUp /> <span className="message">Vos modifications ont été enregistrées</span>
            </div>
          )}
          <label htmlFor="mail" className="form-label"> Email :
            <input
              type="email"
              className={className('form-input mail', { 'wrong': emailFormat })}
              id="mail"
              name="mail"
              value={email}
              onChange={(evt) => {
                updateUserInput(evt.target.value, 'email');
              }}
              onBlur={(evt) => {
                if (!validateEmailFormat(evt.target.value)) {
                  inputFormatWrong(!validateEmailFormat(evt.target.value), 'emailFormat');
                }
                else {
                  inputFormatWrong(!validateEmailFormat(evt.target.value), 'emailFormat');
                }
              }}
            />
          </label>
          {emailFormat && (
            <div className="form-error-message">
              <AlertOctagon />
              <p> Le format de l'email ne correspond pas</p>
            </div>
          )}
          <label htmlFor="password" className="form-label"> Mot de passe :
            <input
              type="password"
              className={className('form-input', { 'wrong': passwordFormat })}
              id="password"
              name="password"
              value={password}
              onChange={(evt) => {
                updatePasswordInput(evt.target.value);
              }}
              onBlur={(evt) => {
                if (!validatePasswordFormat(evt.target.value)) {
                  inputFormatWrong(!validatePasswordFormat(evt.target.value), 'passwordFormat');
                }
                else {
                  inputFormatWrong(!validatePasswordFormat(evt.target.value), 'passwordFormat');
                }
              }}

            />
          </label>
          {passwordFormat && (
            <div className="form-error-message">
              <AlertOctagon />
              <p>Ce mot de passe ne respecte pas les règles de sécurité</p>
            </div>
          )}
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
          <div className="list-add">
            <Tippy
              className="list-add-tooltip"
              animation="scale"
              inertia
              placement="left"
              duration={500}
              content="Ajouter un excuse"
            >
              <Link
                to="/poster-une-excuse"
              >
                <PlusCircle
                  className="list-add-icon"
                />
              </Link>
            </Tippy>
          </div>
          {(user.apologies.length > 0) && (
            user.apologies.map((apologie) => (
              <Link
                to={`/excuse/${apologie.slug}`}
                key={apologie.id}
              >
                <li className="profil-right-list-items">
                  <div className="items-left">
                    <h3 className="items-link">
                      {apologie.title}
                    </h3>
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
              </Link>
            )))}
          {(user.apologies.length <= 0) && (
            <div className="list-empty">
              <p className="list-empty-info">
                Vous n'avez encore publié aucune excuses.
              </p>
              <p className="list-empty-info">
                Rendez-vous&nbsp;
                <Link
                  to="/poster-une-excuse"
                  className="list-empty-redirect"
                >
                  ici
                </Link> pour publier votre
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
  success: PropTypes.bool.isRequired,
  failure: PropTypes.bool.isRequired,
  emailFormat: PropTypes.bool.isRequired,
  passwordFormat: PropTypes.bool.isRequired,
  inputFormatWrong: PropTypes.func.isRequired,
  closeHeaderMenu: PropTypes.func.isRequired,
  resetRedirect: PropTypes.func.isRequired,
};

export default ProfilPage;
