import React, { useState } from 'react';
import './UnaniPlants.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const UnaniPlants = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  const plants = [
    {
      name: 'Muleti',
      scientificName: 'Glycyrrhiza glabra',
      family: 'Fabaceae',
      hindiName: 'मुलैठी',
      commonName: 'Licorice',
      description: 'Muleti is used in Unani medicine for its soothing effects on the respiratory system, digestive health, and its ability to support adrenal function.',
      uses: [
        { title: 'Respiratory Health', detail: 'Helps soothe coughs and respiratory issues.' },
        { title: 'Digestive Health', detail: 'Supports digestive health and alleviates heartburn.' }
      ],
      recipe: 'Licorice Tea: Steep licorice root in hot water and drink daily.',
      imageUrl: 'https://www.dabur.com/Medical%20Plants/Mulethi%20%281%29.jpg'
    },
    {
      name: 'Neem',
      scientificName: 'Azadirachta indica',
      family: 'Meliaceae',
      hindiName: 'नीम',
      commonName: 'Indian Lilac',
      description: 'Neem is renowned for its antibacterial, antiviral, and antifungal properties. It is used in Unani medicine to treat skin conditions, infections, and to promote overall health.',
      uses: [
        { title: 'Skin Conditions', detail: 'Effective against acne and other skin infections.' },
        { title: 'Infections', detail: 'Helps in fighting bacterial and fungal infections.' }
      ],
      recipe: 'Neem Infusion: Boil Neem leaves in water, use as a skin wash.',
      imageUrl: 'https://vastubotanics.com/ImageUpload/Item100017.jpg'
    },
    {
      name: 'Shatavari',
      scientificName: 'Asparagus racemosus',
      family: 'Asparagaceae',
      hindiName: 'शतावरी',
      commonName: 'Wild Asparagus',
      description: 'Shatavari is highly valued in Unani medicine for its role in supporting female reproductive health, boosting immunity, and promoting general well-being.',
      uses: [
        { title: 'Female Reproductive Health', detail: 'Supports hormonal balance and menstrual health.' },
        { title: 'Immunity', detail: 'Enhances overall immune system function.' }
      ],
      recipe: 'Shatavari Tea: Brew Shatavari root in boiling water and drink daily.',
      imageUrl: 'https://www.sundari.com/cdn/shop/articles/Shatavari_Blog_1200x1200.jpg?v=1662095387'
    }
  ];

  return (
    <div>
      <header>
        <button className="toggle-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1>Unani Medicinal Plants and Herbs</h1>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">My Profile</a></li>
            <li><a href="#">Favourites</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="plant-list">
          <div id="plants">
            {plants.map((plant, index) => (
              <div key={index} className="plant-card">
                <img src={plant.imageUrl} alt={plant.name} className="plant-image" />
                <div className="plant-content">
                  <div className="plant-details">
                    <h3>{plant.name}</h3>
                    <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
                    <p><strong>Family:</strong> {plant.family}</p>
                    <p><strong>Hindi Name:</strong> {plant.hindiName}</p>
                    <p><strong>Common Name:</strong> {plant.commonName}</p>
                    <p>{plant.description}</p>
                    <div className="features">
                      <button className="feature-btn" onClick={() => toggleFeature(index)}>
                        Uses <span className="arrow">{activeFeature === index ? '▲' : '▼'}</span>
                      </button>
                      {activeFeature === index && (
                        <div className="feature-content">
                          {plant.uses.map((use, idx) => (
                            <div key={idx} className="subsection">
                              <h4>{use.title}</h4>
                              <p>{use.detail}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="features">
                      <button className="feature-btn" onClick={() => toggleFeature(index + plants.length)}>
                        Recipe <span className="arrow">{activeFeature === index + plants.length ? '▲' : '▼'}</span>
                      </button>
                      {activeFeature === index + plants.length && (
                        <div className="feature-content">
                          <p>{plant.recipe}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button className="add-to-favorites">
                  <FontAwesomeIcon icon={faStar} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UnaniPlants;
