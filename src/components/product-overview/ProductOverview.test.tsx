import React from 'react';
import uuid from 'uuid';
import { render, screen } from '@testing-library/react';
import ProductOverview from './ProductOverview.component';
import IProduct from '../../entity/Product';

test('render products table ', () => {
  render(<ProductOverview productList={testProductList} />);
  const table = screen.getByLabelText('products table body');
  screen.debug();
  expect(table.children.length).toBe(testProductList.length);
});

const testProductList: IProduct[] = [
  {
    id: uuid.v4(),
    name: 'carrot',
    readyToEat: true,
    condiment: false,
    category: 'vegie',
},
{
    id: uuid.v4(),
    name: 'brokkoli',
    readyToEat: false,
    condiment: false,
    category: 'vegie',
  },
  {
    id: uuid.v4(),
    name: 'salt',
    readyToEat: true,
    condiment: true,
    category: 'spices',
}
]  