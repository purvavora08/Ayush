import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <button className="toggle-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1>Naturopathy Medicinal Plants and Herbs</h1>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="#">My Profile</a></li>
          <li><a href="/fav">Favourites</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
