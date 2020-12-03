/* eslint-disable quote-props */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AlertOctagon } from 'react-feather';
import Loader from 'src/components/Loader/Loader';

import './contact.scss';

import { validateEmailFormat } from 'src/utils';

const Contact = ({
  email,
  text,
  checkbox,
  updateInputValue,
  emailFormatAlert,
  emailFormatWrong,
  emailFormatGood,
  toggleCheckbox,
  sendContactForm,
  formSent,
  formError,
  closeHeaderMenu,
  sending,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendContactForm();
  };
  useEffect(() => {
    closeHeaderMenu();
  });
  return (
    <>
      {sending && <Loader />}
      {!sending && (
      <div className="contact">
        <div className="contact-header">

          <p className="contact-paragraphe">
            Vous souhaitez nous faire part d'une remarque,
            d'un bug ou tout simplement donner votre avis ?
            N'hésitez pas! Ce formulaire est fait pour vous.
            <span
              role="img"
              aria-label="clin d'oeil"
              className="paragraphe-emoji"
            >
              😉
            </span>
          </p>
        </div>
        <form action="" className="contact-form" onSubmit={handleSubmit}>
          <fieldset className="form-fieldset">
            <legend className="form-legend">Contact</legend>
            { formError && (
              <p className="form-problem">
                L'envoie de votre message a échoué car un ou plusieurs
                élément(s) du formulaire est/sont incorrect(s). <br /><br />
                - L'email doit être fourni et correspondre au format suivant : <br />
                ex :  votre@email.com <br /><br />
                - Votre message doit comporter au minimum 3 caractères et au maximum 1200 .
              </p>
            )}
            <label htmlFor="email" className="form-label">
              Votre adresse email :
              {emailFormatAlert && (
              <div className="label-alert">
                <AlertOctagon /> Le format ne correspond pas a celui d'un email
              </div>
              )}
              <input
                type="email"
                className={classNames('form-input', { 'wrong': emailFormatAlert })}
                id="email"
                name="email"
                value={email}
                onChange={(evt) => {
                  updateInputValue(evt.target.value, 'email');
                }}
                onBlur={(evt) => {
                  if (!validateEmailFormat(evt.target.value)) {
                    emailFormatWrong();
                  }
                  else {
                    emailFormatGood();
                  }
                }}
              />

            </label>
            <label htmlFor="text" className="form-label">
              Votre message :
              <textarea
                rows="10"
                type="textarea"
                className="form-input"
                id="text"
                name="text"
                value={text}
                onChange={(evt) => {
                  updateInputValue(evt.target.value, 'text');
                }}
              />
            </label>
            <label htmlFor="checkbox" className="form-label checkbox">
              J'accepte d'être contacté par l'équipe :
              <input
                type="checkbox"
                className="form-input checkbox"
                id="checkbox"
                name="checkbox"
                value={checkbox}
                checked={checkbox}
                onChange={toggleCheckbox}
              />
            </label>
            <button
              className="form-submit"
              type={formSent ? 'button' : 'submit'}
            >
              { formSent ? 'Votre message a bien été transmis' : 'Envoyer'}
            </button>
          </fieldset>
        </form>
      </div>
      )}
    </>
  );
};
Contact.propTypes = {
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checkbox: PropTypes.bool.isRequired,
  updateInputValue: PropTypes.func.isRequired,
  emailFormatAlert: PropTypes.bool.isRequired,
  emailFormatWrong: PropTypes.func.isRequired,
  emailFormatGood: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  sendContactForm: PropTypes.func.isRequired,
  formSent: PropTypes.bool.isRequired,
  formError: PropTypes.bool.isRequired,
  closeHeaderMenu: PropTypes.func.isRequired,
  sending: PropTypes.bool.isRequired,
};

export default Contact;
