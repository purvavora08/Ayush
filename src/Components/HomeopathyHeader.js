import React from 'react';

function Header() {
  const toggleMenu = () => {
    document.querySelector('.nav-menu').classList.toggle('open');
  };

  return (
    <header>
      <button className="toggle-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1>AYUSH Medicinal Plants and Herbs</h1>
      <nav className="nav-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">My Profile</a></li>
          <li><a href="#">Favourites</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
