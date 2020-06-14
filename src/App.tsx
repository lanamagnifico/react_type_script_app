import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './components/home-page/HomePage';
import ProductPage from './components/product-page/ProductPage';

interface AppProps {}

function App({}: AppProps) {
  return (
    <Router> 
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" exact component={ProductPage} />
    </Router>  
  );
}

export default App;
