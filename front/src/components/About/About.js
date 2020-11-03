import React from 'react';
import { Link } from 'react-router-dom';

import max from 'src/assets/images/max.jpg';
import './about.scss';

const About = () => (
  <div className="about">
    <img
      src={max}
      alt="le développeur"
      className="about-img"
    />
    <h2 className="about-title">
      <span className="about-title-span">sorry</span>
      ,&nbsp;mais pourquoi ?
    </h2>
    <p className="about-content">
      Combien de fois vous est-il arrivé d'être en retard au travail,
      repas de famille ou tout simplement un rendez-vous ?
      Et combien de fois avez-vous dû chercher des excuses,
      toutes aussi foireuses les une que les autres ?
      sOrry est un solution qui vous permettra de ne plus avoir à
      chercher pendant de longues minutes un excuses de retard (valable... ou pas)
      pour vous justifier.
      Cette solution se veut humoristique et n'as pas pour but de promouvoir le retard!
      Son but est simplement de vous faire passer un bon moment,
      en vous faisant lire les perles des excuses de retards.
      Et qui sait ?! Ça vous sauveras peut être les miches.... ou pas.
    </p>
    <h2 className="about-title">
      Le mot du développeur.
    </h2>
    <p className="about-content">
      Salut
      <span
        role="img"
        aria-label="hello"
        className="emoji"
      >
        👋
      </span>
      Moi c'est Maxence, Je suis un ancien mécano reconverti
      dans le déveleppement web. Le site que tu contemple actuellement est
      une de mes réalisations. Ce site je l'est fait sur mon temps libre
      avec autant de serieux que possible, bien que le sujet
      de celui-ci ne le soit pas. Mon objectif, en créant ce site, etait
      de faire passer un agréablement moment a l'utilisateur (toi du coup)
      pas seulement en lisant les perles des excuses de retard que
      j'ai pu entendre ici et là, mais aussi en fournissant une interface
      intuitive, compréhensive et jolie. Bon... Pour le joli,
      c'est a l'appréciation de chacun hein
      <span
        role="img"
        aria-label="wink"
        className="emoji"
      >
        😉
      </span>
      Si jamais l'expérience que je te propose te plait, n'hesite pas a me
      le faire savoir en te rendant
      <Link to="/contact"> ici </Link>. Dans le cas contraire,
      que tu est rencontré un bug, un souci d'affichage ou autres,
      même musique, je t'invite a me remonter l'information en te rendant
      <Link to="/contact"> ici </Link>.
      Je te remercie de m'avoir lu et te souhaite une agréable visite.
    </p>
  </div>
);

export default About;
