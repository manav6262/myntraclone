import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductListing from './components/ProductListing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProductListing />
      <Footer />
    </div>
  );
}

export default App;
