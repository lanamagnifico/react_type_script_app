import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  ThemeProvider,
  AppBar,
  Toolbar,
  List,
  ListItem
} from '@material-ui/core';

import HomePage from './components/home-page/HomePage.component';
import ProductPage from './components/product-page/ProductPage.component';
import theme from './styles/theme';
import MealPlan from './components/meal-plan/MealPlan.component';

interface IAppProps { }

function App({ }: IAppProps) {
  return (
    <ThemeProvider theme={theme} aria-label="main">
      <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={ProductPage} />
          <Route path="/mealplan" exact component={MealPlan} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
