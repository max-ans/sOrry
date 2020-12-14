import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './apology_by_categories.scss';

const ApologyByCategories = ({
  allCategories,
  closeHeaderMenu,
}) => {
  useEffect(() => {
    closeHeaderMenu();
  }, []);

  const { slug } = useParams();

  return (
    <div className="apology-by-categories">
      listing des excuses par categories
      {console.log(slug)}
    </div>
  );
};

ApologyByCategories.propTypes = {
  allCategories: PropTypes.array.isRequired,
  closeHeaderMenu: PropTypes.func.isRequired,
};

export default ApologyByCategories;
