import { useFormik } from 'formik';
import React from 'react';
import { Button } from '../../components/button/button';
import styles from './checkout.module.css';

export const Checkout = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
    },
  });

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <p>We&apos;ll require your contact information to send the items in your cart... 😁</p>
      <form className={styles.checkoutForm}>
        <label htmlFor="name">
          Your name:
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={formik.handleChange}
          />
        </label>
        <label htmlFor="email">
          Your email:
          <input
            name="email"
            type="text"
            placeholder="john_doe@example.com"
            onChange={formik.handleChange}
          />
        </label>
        <label htmlFor="phoneNumber">
          Your email:
          <input
            name="phoneNumber"
            type="text"
            placeholder="+91 987654321"
            onChange={formik.handleChange}
          />
        </label>
        <Button primary className={styles.placeOrder}>Place order</Button>
      </form>
    </div>
  );
};
