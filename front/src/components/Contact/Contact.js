/* eslint-disable quote-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendContactForm();
  };
  return (
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
          <label htmlFor="email" className="form-label">
            Votre adresse email :
            {emailFormatAlert && <span className="label-alert"> Le format ne correspond pas a celui d'un email</span>}
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
            type="submit"
          >
            { formSent ? 'Votre message a bien été transmis' : 'Envoyer'}
          </button>
        </fieldset>
      </form>
    </div>
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

};

export default Contact;
