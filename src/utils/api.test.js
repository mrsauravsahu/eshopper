import axios from 'axios';
import { mockItems, mockOrders } from '../mockdata/api';
import { products } from '../mockdata/app';
import { getItems, getOrders } from './api';

describe('api', () => {
  let axiosGetMock;

  beforeEach(() => {
    axiosGetMock = jest
      .spyOn(axios, 'get')
      .mockResolvedValue({ data: null });
  });

  describe(getItems.name, () => {
    test('should get items from GET /items', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: [] } });
      await getItems();
      expect(axiosGetMock).toHaveBeenCalledWith('/items');
    });

    test('should map the response based on how the app needs', async () => {
      axiosGetMock.mockResolvedValue({
        data: {
          data: mockItems,
        },
      });

      const items = await getItems();
      expect(items).toEqual(products);
    });
  });

  describe(getOrders.name, () => {
    test('should get orders from GET /orders', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: [] } });
      await getOrders();
      expect(axiosGetMock).toHaveBeenCalledWith('/orders');
    });

    test('should return orders array', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: mockOrders } });
      const orders = await getOrders();
      expect(orders).toEqual(mockOrders);
    });
  });
});
