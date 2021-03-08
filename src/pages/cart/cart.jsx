import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/button/button';
import { ProductTable } from '../../components/product-table/product-table';
import { ProductPropType } from '../../components/product/product';
import styles from './cart.module.css';

export const Cart = ({ cart }) => {
  const history = useHistory();

  const totalPrice = cart.reduce(
    (currentTotal, product) => currentTotal + product.unitPrice * product.quantityInBasket,
    0,
  );
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{`Your basket (${cart.length} items)`}</h1>
      <hr className={styles.headerSeparator} />
      {cart.length === 0
        ? <div className={styles.emptyCartMessage}>Looks like your cart is empty 😟... </div>
        : <ProductTable products={cart} />}

      <div className={styles.checkout}>
        <Button
          className={styles.continueShopping}
          onClick={() => history.push('/')}
        >
          Continue Shopping
        </Button>
        {cart.length !== 0
          ? (
            <div className={styles.totalSection}>
              <div className={styles.totalPrice}>{`Total - ₹${totalPrice}`}</div>
              <hr />
              <Button primary className={styles.checkoutButton} onClick={() => history.push('/checkout')}>Checkout</Button>
            </div>
          ) : null}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(ProductPropType).isRequired,
};
