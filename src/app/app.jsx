import React from 'react';
import { Home } from '../components/home/home';
import { Nav } from '../components/nav/nav';

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          id: 1,
          name: 'Apple',
          manufacturer: 'FreshO',
          unitQuantity: '1kg',
          unitPrice: 40,
          imageUrl: 'img/fruits/apple.png',
        },
        {
          id: 2,
          name: 'Mango',
          manufacturer: 'FreshO',
          unitQuantity: '1kg',
          unitPrice: 80,
          imageUrl: 'img/fruits/mango.png',
        },
        {
          id: 3,
          name: 'Stawberry',
          manufacturer: 'FreshO',
          unitQuantity: '1kg',
          unitPrice: 80,
          imageUrl: 'img/fruits/strawberry.png',
        },
        {
          id: 4,
          name: 'Peach',
          manufacturer: 'FreshO',
          unitQuantity: '1kg',
          unitPrice: 80,
          imageUrl: 'img/fruits/peach.png',
        },
        {
          id: 5,
          name: 'Grapes',
          manufacturer: 'FreshO',
          unitQuantity: '1kg',
          unitPrice: 80,
          imageUrl: 'img/fruits/grape.png',
        },
        {
          id: 6,
          name: 'Pineapple',
          manufacturer: 'FreshO',
          unitQuantity: '1kg',
          unitPrice: 80,
          imageUrl: 'img/fruits/pineapple.png',
        },
        {
          id: 7,
          name: 'Banana',
          manufacturer: 'FreshO',
          unitQuantity: '1kg',
          unitPrice: 80,
          imageUrl: 'img/fruits/banana.png',
        },
        {
          id: 8,
          name: 'Cherry',
          manufacturer: 'FreshO',
          unitQuantity: '1kg',
          unitPrice: 80,
          imageUrl: 'img/fruits/cherry.png',
        },
        {
          id: 9,
          name: 'Orange',
          manufacturer: 'FreshO',
          unitQuantity: '1kg',
          unitPrice: 80,
          imageUrl: 'img/fruits/orange.png',
        },
      ],
    };
  }

  render = () => {
    const { products } = this.state;

    return (
      <>
        <Nav />
        <Home products={products} />
      </>
    );
  }
}
