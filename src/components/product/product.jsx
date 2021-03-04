import React from 'react';
import styles from './product.module.css';

export const Product = ({ product }) => (
  <div className={styles.container}>
    <img src={product.imageUrl} alt={`Purchase ${product.name}`} />
    <div className={styles.manufacturer}>{product.manufacturer}</div>
    <div className={styles.name}>{product.name}</div>
    <div>{product.unitQuantity}</div>
  </div>
);
