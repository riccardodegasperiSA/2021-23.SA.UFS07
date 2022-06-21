import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Text = ({ label }) => {
  return (
    <span>{label}</span>
  )
};

Text.propTypes = {
  label: PropTypes.string.isRequired,
};

Text.defaultProps = {
  label: "Hello World",
};
