import React from 'react';
import PropTypes from 'prop-types';

import styles from './product.module.css';
import { QuantityCounter } from '../quantity-counter/quantity-counter';

export const ProductPropType = {
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  unitQuantity: PropTypes.string.isRequired,
  quantityInBasket: PropTypes.number.isRequired,
  quantityAvailable: PropTypes.number.isRequired,
};

export const Product = ({ product, onIncrement, onDecrement }) => (
  <div className={styles.container}>
    <img
      src={product.imageUrl}
      alt={`Purchase ${product.name}`}
      className={styles.image}
    />
    <div className={styles.manufacturer}>{product.manufacturer}</div>
    <div className={styles.name}>{product.name}</div>
    <div className={styles.unitQuantity}>{product.unitQuantity}</div>
    <div className={styles.cartSection}>
      {`MRP ₹${product.unitPrice}/-`}
      <QuantityCounter
        quantityInBasket={product.quantityInBasket}
        quantityAvailable={product.quantityAvailable}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  </div>
);

Product.propTypes = {
  product: PropTypes.shape(ProductPropType).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
