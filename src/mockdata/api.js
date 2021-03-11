export const mockItems = [
  {
    id: 1,
    name: 'apple',
    price: 120,
    count: 20,
    category: 'Fruits & Vegatables',
  },
  {
    id: 2,
    name: 'table cloth',
    price: 200,
    count: 3,
    category: 'Household Items',
  },
  {
    id: 3,
    name: 'butter',
    price: 20,
    count: 2,
    category: 'Dairy & Eggs',
  },
];

export const mockOrders = [
  {
    items: [
      {
        id: 1,
        name: 'apple',
        price: 120,
        count: 1,
        category: 'Fruits & Vegatables',
      },
    ],
    id: 1,
    date: 1615122360481,
  },
  {
    items: [
      {
        id: 2,
        name: 'table cloth',
        price: 200,
        count: 1,
        category: 'Household Items',
      },
      {
        id: 3,
        name: 'butter',
        price: 20,
        count: 1,
        category: 'Household Items',
      },
    ],
    id: 2,
    date: 1615122649963,
  },
];
