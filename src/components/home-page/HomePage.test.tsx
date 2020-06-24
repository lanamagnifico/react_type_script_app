import * as React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage.component';

test('renders large page component', () => {
  render(<HomePage />);
  screen.debug();
  const home = screen.getByLabelText('home');
  expect(home).toHaveClass('MuiContainer-maxWidthLg');
});

test('renders home link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders products link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/products/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders meal plan link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/meal plan/i);
  expect(linkElement).toBeInTheDocument();
});