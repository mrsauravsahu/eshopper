import axios from 'axios';
import { mockItems } from '../mockdata/api';
import { products } from '../mockdata/app';
import { getItems } from './api';

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
});
