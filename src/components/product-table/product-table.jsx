import React from 'react';
import styles from './product-table.module.css';

export const ProductTable = () => (
  <table className={styles.container}>
    <thead className={styles.row}>
      <td className={`${styles.headerCell} ${styles.itemDescriptionCell}`}>Item Description</td>
      <td className={styles.headerCell}>Unit Price</td>
      <td className={styles.headerCell}>Quantity</td>
      <td className={styles.headerCell}>Subtotal</td>
    </thead>
  </table>
);
