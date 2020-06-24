import * as React from 'react';
import uuid from 'uuid';
import { render, screen } from '@testing-library/react';
import MealPlanDayList from './MealPlanDayList.coponent';
import IMealPlanDay from '../../entity/MealPlanDay';


test('renders wednesday as subtitle1', () => {
  render(<MealPlanDayList mealPlanDay={testMealPlanDay} />)
  const header = screen.getByText(/wednesday/i);
  expect(header).toHaveClass('MuiTypography-subtitle1');
});


test('renders two items', () => {
  render(<MealPlanDayList mealPlanDay={testMealPlanDay} />)
  const list = screen.getByLabelText('meal-pan-of-the-day'); 
  expect(list.children.length).toBe(testMealPlanDay.meals.length);
});



const testMealPlanDay: IMealPlanDay = {
  day: new Date(2020, 5, 24),
  meals: [
    {
      id: uuid.v4(),
      name: 'eggs',
      readyToEat: false,
      condiment: false,
      category: 'eggs',
    },
    {
      id: uuid.v4(),
      name: 'brokkoli',
      readyToEat: false,
      condiment: false,
      category: 'vegie',
  }
  ]
}