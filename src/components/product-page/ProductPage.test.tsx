import React from 'react';
import uuid from 'uuid';
import { render, screen } from '@testing-library/react';
import ProductPage from './ProductPage.component';

test('render products header 4 ', () => {
  render(<ProductPage />)
  const header = screen.getByText(/products/i);
  expect(header).toHaveClass('MuiTypography-h4');
});