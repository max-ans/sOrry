import React from 'react';

import './contact.scss';

const Contact = () => (
  <div className="contact">
    <h2 className="contact title">Contact</h2>
    <p className="contact-paragraphe">
      Vous souhaitez nous faire part d'une remarque,
      d'un bug ou tout simplement échanger ?
      N'hésitez pas! Ce formulaire est fait pour vous :wink:
    </p>
    <form action="" className="contact-form">
      <fieldset className="form-fieldset">
        <label htmlFor="email" className="form-label">
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
          />
        </label>
        <label htmlFor="text" className="form-label">
          <textarea
            type="textarea"
            className="form-input"
            id="text"
            name="text"
          />
        </label>
        <label htmlFor="checkbox" className="form-label">
          <input
            type="checkbox"
            className="form-input"
            id="checkbox"
            name="checkbox"
          />
        </label>
      </fieldset>
    </form>
  </div>
);

export default Contact;
