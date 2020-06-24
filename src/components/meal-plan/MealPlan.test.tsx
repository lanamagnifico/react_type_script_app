import * as React from 'react';
import { render, screen } from '@testing-library/react';
import MealPlan from './MealPlan.component';

test('renders meal plan header 4', () => {
  render(<MealPlan />);
  const header = screen.getByText(/meal plan/i);
  expect(header).toHaveClass('MuiTypography-h4');
});