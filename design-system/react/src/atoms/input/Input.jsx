import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ id, isValid, onData, placeholder, type, label }) => {
  function onInput(inputEvent) {
    console.log("input.onInput ", inputEvent);
    if (typeof(onData) === "function"){
      onData(inputEvent.target.value);
    }
  }
  const message = isValid ? "valid" : "invalid";
  return (
    <>
      <input
        id={id}
        onInput={onInput}
        placeholder={placeholder}
        type={type}
      >
      </input>
      {label === undefined ? null : <label htmlFor={id}>{label}</label>}
      {isValid === undefined ? null : message}
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  label: PropTypes.string,
  onData: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  onData: undefined,
  type: "text",
  label: undefined,
};
