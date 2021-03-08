import PropTypes from 'prop-types';
import React from 'react';
import { ProductPropType } from '../product/product';
import styles from './product-table.module.css';

export const ProductTable = ({ products }) => (
  <table className={styles.container}>
    <tr className={styles.row}>
      <th className={`${styles.headerCell}`}>Item Description</th>
      <th className={styles.headerCell}>Unit Price</th>
      <th className={styles.headerCell}>Quantity</th>
      <th className={styles.headerCell}>Subtotal</th>
    </tr>
    <tbody>
      {
        products.map((product) => (
          <>
            <tr className={styles.dataRow}>
              <td className={`${styles.dataCell} ${styles.itemDescriptionCell}`}>
                <div>
                  <div className={styles.manufacturer}>{product.manufacturer}</div>
                  <div className={styles.name}>{product.name}</div>
                </div>
              </td>
              <td className={styles.dataCell}>{`₹${product.unitPrice}`}</td>
              <td className={styles.dataCell}>{product.quantityInBasket}</td>
              <td className={styles.dataCell}>{`₹${product.unitPrice * product.quantityInBasket}`}</td>
            </tr>
          </>
        ))
      }
    </tbody>
  </table>
);

ProductTable.propTypes = {
  products: PropTypes.arrayOf(ProductPropType).isRequired,
};
