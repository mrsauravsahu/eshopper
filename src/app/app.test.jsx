import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { mockProducts } from '../mockdata/app';
import { getItems } from '../utils/api';
import { App } from './app';

jest.mock('../utils/api');

describe(App.name, () => {
  beforeEach(() => {
    getItems.mockClear();
  });

  test('should invoke getItems', async () => {
    await waitFor(() => render(<App />));

    expect(getItems).toHaveBeenCalledTimes(1);
    const products = screen.getAllByTestId('product');
    expect(products.length).toEqual(mockProducts.length);
  });
});
