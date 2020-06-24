
import * as React from 'react';
import uuid from 'uuid';
import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList.component';
import IProduct from '../../entity/Product';

test('renders shopping list header 4', () => {
  render(<ShoppingList items={testShopping} />);
  const header = screen.getByText(/shopping list/i);
  expect(header).toHaveClass('MuiTypography-h4');
});


test('renders three items', () => {
  render(<ShoppingList items={testShopping} />);
  const list = screen.getByLabelText('shopping-list');
  expect(list.children.length).toBe(testShopping.length);
});


const testShopping: IProduct[] = [
  {
      id: uuid.v4(),
      name: 'eggs M',
      readyToEat: false,
      condiment: false,
      category: 'eggs',
  },
  {
      id: uuid.v4(),
      name: 'white fish',
      readyToEat: false,
      condiment: false,
      category: 'seafood',
  },
  {
      id: uuid.v4(),
      name: 'salat',
      readyToEat: true,
      condiment: false,
      category: 'vegie',
  }
]