import React, { useState, useEffect } from 'react';
import './App.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favPlants = JSON.parse(localStorage.getItem('favPlants')) || [];
    setFavorites(favPlants);
  }, []);

  return (
    <div className="App">
      <header>
        <button className="toggle-menu" onClick={() => document.querySelector('.nav-menu').classList.toggle('open')}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1>Favorites</h1>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">My Profile</a></li>
            <li><a href="/favorites">Favourites</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="favorites">
          <div id="fav-plants">
            {favorites.length === 0 ? (
              <p>No favorite plants added yet!</p>
            ) : (
              favorites.map((item, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: item.html }} />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Favorites;
