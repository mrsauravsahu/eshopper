import PropTypes from 'prop-types';
import React from 'react';
import { QuantityCounter } from '../quantity-counter/quantity-counter';
import styles from './product.module.css';

export const ProductPropType = {
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  quantityInBasket: PropTypes.number.isRequired,
  quantityAvailable: PropTypes.number.isRequired,
};

export const Product = ({ product, onIncrement, onDecrement }) => (
  <div className={`${styles.container} ${product.quantityAvailable === 0 ? styles.containerProductSoldOut : ''}`} data-testid="product">
    <img
      src={product.imageUrl}
      alt={`Purchase ${product.name}`}
      className={styles.image}
    />
    <div className={styles.manufacturer}>{product.manufacturer}</div>
    <div className={styles.name}>{product.name}</div>
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
