import React from 'react';
import { Product } from '../product/product';

import styles from './home.module.css';

export const Home = ({ products }) => (
  <div className={styles.products}>
    {products.map((product) => (
      <Product product={product} />
    ))}
  </div>
);
