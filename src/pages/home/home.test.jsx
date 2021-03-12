import { getByText, render } from '@testing-library/react';
import React from 'react';
import { getItems } from '../../utils/api';
import { Home } from './home';

describe(Home.name, () => {
  beforeEach(() => {
    getItems.mockClear();
  });

  test.skip('should display products', () => {
    render(<Home />);

    expect(getByText('apple'));
  });
});
