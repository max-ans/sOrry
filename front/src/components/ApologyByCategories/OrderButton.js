import React from 'react';
import PropTypes from 'prop-types';

const OrderButton = ({ action, status }) => (
  <div className="order-button">
    <p className="order-choice">
      Organiser par :
    </p>
    <div className="choices">
      <p className="order-date">
        Date
      </p>
      <button
        type="button"
        className="button"
        onClick={action}
      >
        <div className={status ? 'ball checked' : 'ball'} />
      </button>
      <p className="order-likes">
        Like
      </p>
    </div>
  </div>
);

OrderButton.propTypes = {
  action: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};

export default OrderButton;
