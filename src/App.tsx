import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';

import HomePage from './components/home-page/HomePage';
import ProductPage from './components/product-page/ProductPage';
import theme from './styles/theme';
import MealPlan from './components/meal-plan/MealPlan';

interface AppProps { }

function App({ }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/mealplan">MealPlan</Link>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductPage} />
        <Route path="/mealplan" exact component={MealPlan} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
