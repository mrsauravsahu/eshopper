import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './nav.module.css';

export const Nav = ({ cartCount }) => (
  <nav className={styles.nav}>
    <Link to="/">
      <span className={styles.brand}>e-shopper</span>
    </Link>
    <Link to="/cart">
      <div className={styles.basketLink}>
        <span>My Basket</span>
        <span>{`${cartCount} items`}</span>
      </div>
    </Link>
  </nav>
);

Nav.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
