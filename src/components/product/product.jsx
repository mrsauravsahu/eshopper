import React from 'react';
import PropTypes from 'prop-types';

import styles from './product.module.css';

export const ProductPropType = {
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  unitQuantity: PropTypes.number.isRequired,
};

export const Product = ({ product }) => (
  <div className={styles.container}>
    <img src={product.imageUrl} alt={`Purchase ${product.name}`} />
    <div clsssName={styles.manufacturer}>{product.manufacturer}</div>
    <div className={styles.name}>{product.name}</div>
    <div>{product.unitQuantity}</div>
  </div>
);

Product.propTypes = {
  product: PropTypes.shape(ProductPropType).isRequired,
};
