import React, { useState } from 'react';
import './App.css';

const Searcbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <header>
        <div className={`menu-toggle ${navOpen ? 'active' : ''}`} onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>AYUSH</h1>
        <div className="search-wrapper">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>
      </header>
      <main>
        <div className="category">
          <div>
            <a href="/ayurveda">
              <h2>Ayurveda</h2>
              <p>Ayurveda is an ancient system of medicine that originated in India. It focuses on balance in the body's systems through diet, herbal treatment, and yogic practices.</p>
            </a>
          </div>
          <div>
            <a href="/unani">
              <h2>Unani</h2>
              <p>Unani medicine is based on the teachings of Hippocrates and Galen. It emphasizes the balance of bodily humors and uses herbal remedies.</p>
            </a>
          </div>
          <div>
            <a href="/siddhi">
              <h2>Siddhi</h2>
              <p>Siddhi medicine involves spiritual healing and is practiced in India. It focuses on achieving balance through meditation and holistic treatments.</p>
            </a>
          </div>
          <div>
            <a href="/naturopathy">
              <h2>Yoga & Naturopathy</h2>
              <p>Yoga and Naturopathy combine physical postures, breathing exercises, and natural remedies to promote holistic health and wellness.</p>
            </a>
          </div>
          <div>
            <a href="/homeopathy">
              <h2>Homeopathy</h2>
              <p>Homeopathy is a system of alternative medicine that uses highly diluted substances to stimulate the body's natural healing processes.</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Searchbar;
