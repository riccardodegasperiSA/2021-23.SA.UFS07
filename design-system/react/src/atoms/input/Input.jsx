import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ isValid, onData, placeholder, type }) => {
  function onInput(inputEvent) {
    console.log("input.onInput ", inputEvent);
    if (typeof(onData) === "function"){
      onData(inputEvent.target.value);
    }
  }
  return (
    <input
      onInput={onInput}
      placeholder={placeholder}
      type={type}
    >
    </input>
  );
};

Input.propTypes = {
  isValid: PropTypes.bool.isRequired,
  onData: PropTypes.func,

  placeholder: PropTypes.string,

  type: PropTypes.string,
};

Input.defaultProps = {
  onData: undefined,
  type: "text",
};
