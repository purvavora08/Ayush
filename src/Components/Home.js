import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header>
        <button className="toggle-menu" onClick={() => document.querySelector('.nav-menu').classList.toggle('open')}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1>Ayurveda Medicinal Plants and Herbs</h1>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/favorites">Favourites</a></li>
            <li><a href="#">My Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Welcome to the Ayurveda Medicinal Plants and Herbs</h2>
        </section>
      </main>
    </div>
  );
}

export default Home;
