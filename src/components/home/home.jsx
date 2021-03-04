import React from 'react';
import PropTypes from 'prop-types';

import { Product, ProductPropType } from '../product/product';

import styles from './home.module.css';

export const Home = ({ products }) => (
  <div className={styles.products}>
    {products.map((product) => (
      <Product product={product} />
    ))}
  </div>
);

Home.propTypes = {
  products: PropTypes.arrayOf(ProductPropType),
};

Home.defaultProps = {
  products: [],
};
