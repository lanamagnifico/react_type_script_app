import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import ProductPage from './components/product-page/ProductPage';

interface AppProps {}

function App({}: AppProps) {
  return (
    <Router> 
      <Link to="/products">Products</Link>
      <Route path="/products" component={ProductPage} />
    </Router>  
  );
}

export default App;
