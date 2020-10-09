import React from 'react';

import Carousel from 'src/containers/Carousel/Carousel';
import Description from 'src/components/Description/Description';

import './main.scss';

const Main = () => (
  <main className="main">
    <h2 className="main-title">
      les meilleurs excuses
    </h2>
    <Carousel />
    <Description />
  </main>
);

export default Main;
