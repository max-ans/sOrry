/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Eye, EyeOff } from 'react-feather';
import './field.scss';

/**
 * A field to be used inside a form : label and input
 */
const Field = ({
  identifier,
  placeholder,
  label,
  type,
  value,
  changeField,
  see,
  seeAction,
}) => {
  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;
    changeField(name, inputValue);
  };

  return (
    <div className="field">
      {!(type === 'password') && (
        <>
          <input
            className="input"
            id={identifier}
            placeholder={placeholder}
            name={identifier}
            type={type}
            value={value}
            onChange={handleChange}
          />
          <label
            className="label"
            htmlFor={identifier}
          >
            {label}
          </label>
        </>
      )}
      {(type === 'password') && (
        <>
          <input
            className="input"
            id={identifier}
            placeholder={placeholder}
            name={identifier}
            type={see ? 'text' : 'password'}
            value={value}
            onChange={handleChange}
          />
          <label
            className="label"
            htmlFor={identifier}
          >
            {label}{see ? <Eye size={25} onClick={seeAction} /> : <EyeOff size={25} onClick={seeAction} />}
          </label>
        </>
      )}
    </div>
  );
};

Field.propTypes = {
  /** identifier for the input : used both for name and id => must be unique */
  identifier: PropTypes.string.isRequired,
  /** text used as placeholder */
  placeholder: PropTypes.string,
  /** text used as label */
  label: PropTypes.string.isRequired,
  /** type of the input */
  type: PropTypes.string,
  /** text used as value for the input */
  value: PropTypes.string,
  /** called when onChange event is received by the input, two parameters :
   * - identifier
   * - new value
   */
  changeField: PropTypes.func.isRequired,
  see: PropTypes.bool,
  seeAction: PropTypes.func,
};

Field.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  see: false,
  seeAction: undefined,
};

export default Field;
