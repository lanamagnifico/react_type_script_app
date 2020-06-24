import * as React from 'react';
import uuid from 'uuid';
import { render, screen } from '@testing-library/react';
import ProductRow from './ProductRow.component';
import IProduct from '../../entity/Product';

test('renders product name', () => {
  render(<ProductRow product={testProduct}/>);
  const nameElement = screen.getByText(testProduct.name);
  expect(nameElement).toBeInTheDocument();
});

test('renders product category', () => {
  render(<ProductRow product={testProduct}/>);
  const categoryElement = screen.getByText(testProduct.category);
  expect(categoryElement).toBeInTheDocument();
});

const testProduct: IProduct = {
  id: uuid.v4(),
  name: 'white fish',
  readyToEat: false,
  condiment: false,
  category: 'seafood',
};