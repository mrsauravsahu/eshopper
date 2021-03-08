import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '../../components/button/button';
import { ProductTable } from '../../components/product-table/product-table';
import { ProductPropType } from '../../components/product/product';
import styles from './cart.module.css';

export const Cart = ({ cart }) => (
  <div className={styles.container}>
    <h1 className={styles.header}>{`Your basket (${cart.length} items)`}</h1>
    <hr className={styles.headerSeparator} />
    {cart.length === 0
      ? <div className={styles.emptyCartMessage}>Looks like your cart is empty 😟... </div>
      : <ProductTable products={cart} />}

    <Button>Continue Shopping</Button>
    <Button primary>Checkout</Button>
  </div>
);

Cart.propTypes = {
  cart: PropTypes.arrayOf(ProductPropType).isRequired,
};
