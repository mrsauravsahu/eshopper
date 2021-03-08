import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './button.module.css';

export const Button = ({
  children,
  primary,
  onClick,
  className,
  type,
}) => (
  <button
    className={cn(className, { [styles.primary]: primary, [styles.secondary]: !primary })}
    // eslint-disable-next-line react/button-has-type
    type={type}
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
  type: PropTypes.oneOf('button', 'submit'),
};

Button.defaultProps = {
  className: '',
  primary: false,
  type: 'button',
};
