import React from 'react';
import PropTypes from 'prop-types';

import styles from './quantity-counter.module.css';

export const QuantityCounter = ({
  quantityInBasket,
  onIncrement,
  onDecrement,
}) => (
  <div className={`${quantityInBasket === 0 ? styles.containerBasketEmpty : styles.containerBasketFilled} ${styles.container}`}>
    <button
      className={`${styles.reduceQuantityButton} ${styles.quantityButton}`}
      type="button"
    >
      -
    </button>
    <span className={styles.quantityInBasket}>{`${quantityInBasket} in Basket`}</span>
    <button
      className={`${styles.incrementQuantityButton} ${styles.quantityButton}`}
      type="button"
    >
      +
    </button>
  </div>
);

QuantityCounter.propTypes = {
  quantityInBasket: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
