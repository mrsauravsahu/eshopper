import React from 'react';
import PropTypes from 'prop-types';

import styles from './quantity-counter.module.css';

export const QuantityCounter = ({
  quantityInBasket,
  quantityAvailable,
  onIncrement,
  onDecrement,
}) => (
  <div className={`${quantityInBasket === 0 ? styles.containerBasketEmpty : styles.containerBasketFilled} ${styles.container}`}>
    {quantityAvailable > 0 ? (
      <>
        <button
          className={`${styles.reduceQuantityButton} ${styles.quantityButton}`}
          type="button"
        >
          -
        </button>
        <span className={styles.message}>{`${quantityInBasket} in Basket`}</span>
        <button
          className={`${styles.incrementQuantityButton} ${styles.quantityButton}`}
          type="button"
        >
          +
        </button>
      </>
    ) : <span className={`${styles.message} ${styles.soldOut}`}>SOLD OUT</span>}
  </div>
);

QuantityCounter.propTypes = {
  quantityAvailable: PropTypes.number.isRequired,
  quantityInBasket: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
