import axios from 'axios';

export const getItems = async () => {
  const getItemsResponse = await axios.get('/api/items');
  const itemJson = getItemsResponse.data.data;

  const mappedItems = itemJson.map((item) => ({
    id: item.id,
    name: item.name,
    quantityAvailable: item.count,
    unitPrice: item.price,
    category: item.category,
    manufacturer: 'FreshO',
    quantityInBasket: 0,
    imageUrl: `img/${item.category.split(' ')[0].toLowerCase()}/${item.name.replace(' ', '').toLowerCase()}.png`,
  }));

  return mappedItems;
};

export const getOrders = async () => {
  const getOrdersResponse = await axios.get('/api/orders');
  const ordersJson = getOrdersResponse.data.data;

  return ordersJson;
};

export const createOrder = async (order) => {
  const createdOrderResponse = await axios.post('/api/orders', order);
  const createdOrder = createdOrderResponse.data.data;
  return createdOrder;
};
