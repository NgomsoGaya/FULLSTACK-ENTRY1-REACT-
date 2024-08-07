import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">SolefulSupply</div>
      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-bar"
            />
          </li>
          <li><a href="/login">Login</a></li>
          <li><a href="/wishlist">Wishlist</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={handleMobileMenuToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
