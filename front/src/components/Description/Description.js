import React from 'react';
import { Link } from 'react-router-dom';

import './description.scss';

const Description = () => (
  <section className="description">
    <h2 className="description-title">
      <span className="description-title-span">en retard ?</span>
    </h2>
    <p className="description-content">
      Vous arrivez au travail avec un heure de retard, le boss
      vous regarde comme si vous aviez flinguer sa journée...
      Et la, euréka!!! Vous avez l'excuse imparable, il est imossible
      que l'on vous blâme cette fois!
      Faites s'en profiter la communauté en la postant sur votre profil.
      <Link
        to="/poster-une-excuse"
        className="content-link"
      >
        Poster une excuse
      </Link>

    </p>
  </section>
);

export default Description;
