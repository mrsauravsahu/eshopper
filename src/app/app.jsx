import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Nav } from '../components/nav/nav';
import { Cart } from '../pages/cart/cart';
import { Checkout } from '../pages/checkout/checkout';
import { Home } from '../pages/home/home';

export const App = () => {
  const [products, setProducts] = useState([]);

  const onIncrement = (id, currentQuantity) => {
    setProducts({
      ...products,
      products: products.products.map((product) => (product.id !== id ? product : {
        ...product,
        quantityInBasket: currentQuantity + 1,
      })),
    });
  };

  const onDecrement = (id, currentQuantity) => {
    if (currentQuantity === 0) return;

    setProducts({
      ...products,
      products: products.products.map((product) => (product.id !== id ? product : {
        ...product,
        quantityInBasket: currentQuantity - 1,
      })),
    });
  };

  return (
    <HashRouter>
      <Nav cartCount={products.reduce((
        accumulator, product,
      ) => accumulator + product.quantityInBasket, 0)}
      />
      <Switch>
        <Route path="/cart">
          <Cart cart={products.filter((product) => product.quantityInBasket > 0)} />
        </Route>
        <Route path="/checkout">
          <Checkout cart={products.filter((product) => product.quantityInBasket > 0)} />
        </Route>
        <Route path="/">
          <Home
            products={products}
            onIncrement={(id, currentQuantity) => onIncrement(id, currentQuantity)}
            onDecrement={(id, currentQuantity) => onDecrement(id, currentQuantity)}
          />
        </Route>
      </Switch>
    </HashRouter>
  );
};
