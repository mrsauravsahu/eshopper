import axios from 'axios';

export const getItems = async () => {
  const getItemsResponse = await axios.get('/items');
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
