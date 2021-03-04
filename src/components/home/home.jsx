import React from 'react';
import { Product } from '../product/product';

import './home.css';

export const Home = ({ products }) => (
  <div className="home__products">
    {products.map((product) => (
      <Product product={product} />
    ))}
  </div>
);
