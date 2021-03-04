import React from 'react';
import './product.css';

export const Product = ({ product }) => (
  <div className="product">
    <img src={product.imageUrl} alt={`Purchase ${product.name}`} />
    <div className="product__manufacturer">{product.manufacturer}</div>
    <div className="product__name">{product.name}</div>
    <div>{product.unitQuantity}</div>
  </div>
);
