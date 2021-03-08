import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './button.module.css';

export const Button = ({
  children,
  primary,
  onClick,
  className,
}) => (
  <button
    className={cn(className, { [styles.primary]: primary, [styles.secondary]: !primary })}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  primary: false,
};
