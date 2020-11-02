import React from 'react';

import './contact.scss';

const Contact = () => (
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
    <form action="" className="contact-form">
      <fieldset className="form-fieldset">
        <legend className="form-legend">Contact</legend>
        <label htmlFor="email" className="form-label">
          Votre adresse email :
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
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
          />
        </label>
        <label htmlFor="checkbox" className="form-label checkbox">
          J'accepte d'être contacté par l'équipe :
          <input
            type="checkbox"
            className="form-input"
            id="checkbox"
            name="checkbox"
          />
        </label>
        <button className="form-submit" type="submit">Envoyer</button>
      </fieldset>
    </form>
  </div>
);

export default Contact;
