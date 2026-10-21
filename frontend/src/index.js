import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
// import PricingPage from './landing_page/pricing/PricingPage';
// import AboutPage from './landing_page/about/AboutPage';
// import SupportPage from './landing_page/support/SupportPage';
// import ProductPage from './landing_page/products/ProductPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <HomePage />
       {/* <PricingPage />
       <AboutPage />
       <ProductPage />
       <SupportPage /> */}
  </React.StrictMode>
);
