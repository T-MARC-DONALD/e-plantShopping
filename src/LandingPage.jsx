import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Welcome to Paradise Nursery, your premier destination for beautiful houseplants. 
          We believe that every home deserves a touch of green, and our carefully curated 
          collection of houseplants will transform your living space into a thriving paradise. 
          From low-maintenance succulents to stunning tropical varieties, we have the perfect 
          plant for every home and every skill level.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
