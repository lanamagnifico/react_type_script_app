import * as React from 'react';
import uuid from 'uuid';
import { render, screen } from '@testing-library/react';
import ShoppingItem from './ShoppingItem.component';
import IProduct from '../../entity/Product';

test('renders product name', () => {
  render(<ShoppingItem product={testProduct} key={5}/>);
  const linkElement = screen.getByText(testProduct.name);
  expect(linkElement).toBeInTheDocument();
});

test('renders product category', () => {
  render(<ShoppingItem product={testProduct} key={5}/>);
  const linkElement = screen.getByText(testProduct.category);
  expect(linkElement).toBeInTheDocument();
});

test('renders delete button in the end', () => {
  render(<ShoppingItem product={testProduct} key={5}/>);
  const button = screen.getByRole('button', { name: 'delete'});
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('MuiIconButton-edgeEnd');
});

const testProduct: IProduct = {
  id: uuid.v4(),
  name: 'white fish',
  readyToEat: false,
  condiment: false,
  category: 'seafood',
};