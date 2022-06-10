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
  const message = isValid ? "valid" : "invalid";
  return (
    <>
      <input
        onInput={onInput}
        placeholder={placeholder}
        type={type}
      >
      </input>
      {isValid === undefined ? null : message}
    </>
  );
};

Input.propTypes = {
  isValid: PropTypes.bool,
  onData: PropTypes.func,

  placeholder: PropTypes.string,

  type: PropTypes.string,
};

Input.defaultProps = {
  onData: undefined,
  type: "text",
};
