import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const PlantCard = ({ plant }) => {
  const [isUsesOpen, setIsUsesOpen] = useState(false);
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-content">
        <div className="plant-details">
          <h3>{plant.name}</h3>
          <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
          <p><strong>Family:</strong> {plant.family}</p>
          <p><strong>Common Name:</strong> {plant.commonName}</p>
          <p>{plant.description}</p>

          {/* Uses Section */}
          <div className="features">
            <button className="feature-btn" onClick={() => setIsUsesOpen(!isUsesOpen)}>
              Uses <span className={`arrow ${isUsesOpen ? 'open' : ''}`}>&#9662;</span>
            </button>
            {isUsesOpen && (
              <div className="feature-content">
                {plant.uses.map((use, index) => (
                  <div className="subsection" key={index}>
                    <h4>{use.title}</h4>
                    <p>{use.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recipe Section */}
          <div className="features">
            <button className="feature-btn" onClick={() => setIsRecipeOpen(!isRecipeOpen)}>
              Recipe <span className={`arrow ${isRecipeOpen ? 'open' : ''}`}>&#9662;</span>
            </button>
            {isRecipeOpen && (
              <div className="feature-content">
                <p>{plant.recipe}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="add-to-favorites" title="Add to Favorites">
        <FontAwesomeIcon icon={faStar} />
      </button>
    </div>
  );
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const plants = [
    {
      name: 'Lotus',
      scientificName: 'Nelumbo nucifera',
      family: 'Nelumbonaceae',
      commonName: 'Lotus',
      image: 'https://example.com/lotus.jpg',
      description: 'Lotus is revered in Siddha medicine...',
      uses: [
        { title: 'Digestive Health', description: 'Lotus seeds help in improving digestion and treating constipation.' },
        { title: 'Fever Reduction', description: 'Consuming lotus extracts can help in lowering body temperature during fevers.' }
      ],
      recipe: 'Lotus Seed Tea: Boil lotus seeds in water and consume the tea to aid digestion.'
    },
    {
      name: 'Neem',
      scientificName: 'Azadirachta indica',
      family: 'Meliaceae',
      commonName: 'Neem',
      image: 'https://example.com/neem.jpg',
      description: 'Neem is a cornerstone of Siddha medicine...',
      uses: [
        { title: 'Skin Care', description: 'Neem oil is used to treat acne, eczema, and other skin irritations.' },
        { title: 'Immune Support', description: 'Neem boosts the immune system and helps in fighting infections.' }
      ],
      recipe: 'Neem Leaf Decoction: Boil neem leaves in water and consume to enhance immunity.'
    },
    {
      name: 'Tulsi',
      scientificName: 'Ocimum sanctum',
      family: 'Lamiaceae',
      commonName: 'Holy Basil',
      image: 'https://example.com/tulsi.jpg',
      description: 'Tulsi is highly valued in Siddha medicine...',
      uses: [
        { title: 'Stress Relief', description: 'Tulsi helps in managing stress and anxiety by balancing cortisol levels.' },
        { title: 'Respiratory Health', description: 'Effective in treating coughs, colds, and asthma.' }
      ],
      recipe: 'Tulsi Tea: Steep fresh tulsi leaves in hot water and drink to relieve stress and improve respiratory health.'
    }
  ];

  return (
    <div>
      <header>
        <button className="toggle-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1>Siddha Medicinal Plants and Herbs</h1>
        {menuOpen && (
          <nav className="nav-menu">
            <ul>
              <li><a href="ak.html">Home</a></li>
              <li><a href="#">My Profile</a></li>
              <li><a href="#">Favourites</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </nav>
        )}
      </header>
      <main>
        <section id="plant-list">
          {plants.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
