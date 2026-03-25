import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<><Navbar /><ProductList /></>} />
            <Route path="/cart" element={<><Navbar /><CartItem /></>} />
            <Route path="/about" element={<><Navbar /><AboutUs /></>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
