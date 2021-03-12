import axios from 'axios';
import {
  mockCreatedOrder, mockCreateOrderItemsPayload, mockItems, mockOrders,
} from '../mockdata/api';
import { mockProducts } from '../mockdata/app';
import { createOrder, getItems, getOrders } from './api';

describe('api', () => {
  let axiosGetMock;
  let axiosPostMock;

  beforeEach(() => {
    axiosGetMock = jest.spyOn(axios, 'get');
    axiosGetMock.mockClear();
    axiosGetMock.mockResolvedValue({ data: null });

    axiosPostMock = jest.spyOn(axios, 'post');
    axiosPostMock.mockClear();
    axiosPostMock.mockResolvedValue({ data: null });
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
      expect(items).toEqual(mockProducts);
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

  describe(createOrder.name, () => {
    test('should create order with POST /orders and payload', async () => {
      axiosPostMock.mockResolvedValue({ data: { data: {} } });
      await createOrder(mockCreateOrderItemsPayload);
      expect(axiosPostMock).toHaveBeenLastCalledWith('/orders', mockCreateOrderItemsPayload);
    });

    test('should return created order', async () => {
      axiosPostMock.mockResolvedValue({ data: { data: mockCreatedOrder } });
      const createdOrder = await createOrder(mockCreateOrderItemsPayload);
      expect(createdOrder).toEqual(mockCreatedOrder);
    });
  });
});
