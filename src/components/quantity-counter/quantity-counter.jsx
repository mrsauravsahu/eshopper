import React from 'react';

import styles from './quantity-counter.module.css';

export const QuantityCounter = ({
  quantity,
  onIncrement,
  onDecrement,
}) => (
  <div className={styles.container}>
    <button
      className={styles.quantityButton}
      type="button"
    >
      -
    </button>
    <span className={styles.quantityInBasket}>{`${quantity} in Basket`}</span>
    <button
      className={styles.quantityButton}
      type="button"
    >
      +
    </button>
  </div>
);
