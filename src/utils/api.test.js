import axios from 'axios';
import { getItems } from './api';

describe(getItems.name, () => {
  let axiosGetMock;

  beforeEach(() => {
    axiosGetMock = jest
      .spyOn(axios, 'get')
      .mockResolvedValue({ data: null });
  });

  test('should get items from GET /items', async () => {
    axiosGetMock.mockResolvedValue({ data: { data: [] } });
    await getItems();
    expect(axiosGetMock).toHaveBeenCalledWith('/items');
  });

  test('should map the response based on how the app needs', async () => {
    axiosGetMock.mockResolvedValue({
      data: {
        data: [
          {
            id: 1,
            name: 'apple',
            price: 120,
            count: 20,
            category: 'Fruits & Vegatables',
          },
        ],
      },
    });

    const items = await getItems();
    expect(items)
      .toEqual([
        {
          id: 1,
          name: 'apple',
          manufacturer: 'FreshO',
          unitPrice: 120,
          imageUrl: 'img/fruits/apple.png',
          quantityInBasket: 0,
          quantityAvailable: 20,
          category: 'Fruits & Vegatables',
        },
      ]);
  });
});
