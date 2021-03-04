import React from 'react';
import PropTypes from 'prop-types';

import styles from './nav.module.css';

export const Nav = ({ cartCount }) => (
  <nav className={styles.nav}>
    <span className={styles.brand}>e-shopper</span>
    <div className={styles.basketLink}>
      <span>My Basket</span>
      <span>{`${cartCount} items`}</span>
    </div>
  </nav>
);

Nav.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
