import React from 'react';
import { useParams } from 'react-router-dom';

import './apology.scss';

const Apology = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <main className="apology">
      page d'une excuse
    </main>
  );
};
export default Apology;
