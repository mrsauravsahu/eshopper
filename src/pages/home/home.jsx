import React from 'react';
import PropTypes from 'prop-types';

import { Product, ProductPropType } from '../../components/product/product';

import styles from './home.module.css';

export const Home = ({ products, onIncrement, onDecrement }) => (
  <div className={styles.products}>
    {products.map((product) => (
      <Product
        key={product.id}
        product={product}
        onIncrement={() => onIncrement(product.id, product.quantityInBasket)}
        onDecrement={() => onDecrement(product.id, product.quantityInBasket)}
      />
    ))}
  </div>
);

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(ProductPropType)),
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

Home.defaultProps = {
  products: [],
};
