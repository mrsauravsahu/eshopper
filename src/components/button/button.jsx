import PropTypes from 'prop-types';
import React from 'react';
import styles from './button.module.css';

export const Button = ({
  children,
  primary,
  onClick,
}) => (
  <button
    className={primary ? styles.primary : styles.secondary}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  primary: false,
};
