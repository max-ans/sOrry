import React from 'react';

import './apologyCreate.scss';

const ApologyCreate = () => (
  <div className="apology-create">
    <form
      action=""
      className="apology-form"
    >
      <fieldset
        className="form-fieldset"
      >
        <legend className="form-legend">Poster une excuse</legend>
        <label htmlFor="title" className="form-label">
          Titre de l'excuse :
          <input
            type="text"
            className="form-input"
            id="title"
            name="title"
          />
        </label>
        <label htmlFor="apology" className="form-label">
          L'excuse :
          <textarea
            rows="10"
            type="textarea"
            className="form-input"
            id="apology"
            name="apology"
          />
        </label>
        <button
          type="submit"
          className="form-submit"
        >
          Poster
        </button>
      </fieldset>
    </form>
  </div>
);

export default ApologyCreate;
