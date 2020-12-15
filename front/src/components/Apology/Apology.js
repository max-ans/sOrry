import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import './apology.scss';

const Apology = ({
  fetchApologyInformations,
}) => {
  const { slug } = useParams();

  useEffect(() => {
    fetchApologyInformations(slug);
  }, [slug]);

  return (
    <main className="apology">
      page d'une excuse
    </main>
  );
};

Apology.propTypes = {
  fetchApologyInformations: PropTypes.func.isRequired,
};

export default Apology;
