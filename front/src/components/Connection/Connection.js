/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AlertOctagon, Eye, EyeOff } from 'react-feather';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-extreme.css';
import './connection.scss';

const Connection = ({
  login,
  password,
  rememberMe,
  loginError,
  updateConnectionInput,
  setRememberMe,
  sendLoginForm,
  closeHeaderMenu,
  resetRedirect,
  seePasswordStatus,
  seePassword,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendLoginForm();
  };
  // give focus at first input in form when
  // component was mount and after, only when
  // loginError status was update
  useEffect(() => {
    document.getElementById('nickname').focus();
  }, [loginError]);
  useEffect(() => {
    closeHeaderMenu();
    resetRedirect();
  }, []);

  return (
    <div className="connection">
      <form action="" className="connection-form" onSubmit={handleSubmit}>
        <fieldset className="connection-form-fieldset">
          <legend className="connection-form-legend">Connexion</legend>
          {loginError && (
            <span className="connection-form-error">
              <AlertOctagon className="connection-form-error-icon" /> Identifiants incorrects.
            </span>
          )}
          <label
            className="connection-form-label"
            htmlFor="nickname"
          > Identifiant
            <Tippy
              className="tooltip"
              interactive
              animation="scale-extreme"
              inertia
              trigger="click"
              placement="top-end"
              duration={500}
              zIndex={9999}
              content="votre adresse e-mail"
              arrow="false"
            >
              <input
                type="text"
                name="nickname"
                id="nickname"
                value={login}
                onChange={(evt) => {
                  updateConnectionInput(evt.target.value, 'login');
                }}
                required
                className="connection-form-input "
              />
            </Tippy>

          </label>
          <label
            htmlFor="password"
            className="connection-form-label"
          >
            <span className="eye-icon">
              Mot de passe  {seePasswordStatus ? <Eye size={25} onClick={seePassword} /> : <EyeOff size={25} onClick={seePassword} /> }
            </span>
            <input
              type={seePasswordStatus ? 'text' : 'password'}
              name="password"
              id="password"
              value={password}
              onChange={(evt) => {
                updateConnectionInput(evt.target.value, 'password');
              }}
              required
              className="connection-form-input "
            />
          </label>
          <label
            htmlFor="checkbox"
            className="connection-form-label checkbox"
          >Se souvenir de moi
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="connection-form-input checkbox"
              checked={rememberMe}
              onChange={setRememberMe}
            />
          </label>
          <button
            type="submit"
            className="connection-form-button"
          >
            Connexion
          </button>
          <p className="connection-register-paragraphe ">
            Vous n'êtes pas inscrit ? cliquez <Link to="/inscription" className="connection-register-link"> ici</Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};
Connection.propTypes = {
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  updateConnectionInput: PropTypes.func.isRequired,
  setRememberMe: PropTypes.func.isRequired,
  sendLoginForm: PropTypes.func.isRequired,
  loginError: PropTypes.bool.isRequired,
  closeHeaderMenu: PropTypes.func.isRequired,
  resetRedirect: PropTypes.func.isRequired,
  seePasswordStatus: PropTypes.bool.isRequired,
  seePassword: PropTypes.func.isRequired,
};

export default Connection;
