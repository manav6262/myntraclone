import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Myntra</div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products" />
      </div>
      <ul className="nav-links">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Beauty</li>
      </ul>
    </nav>
  );
};

export default Navbar;
