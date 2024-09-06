import React, { useState, useEffect } from 'react';

const PlantCard = ({ plant }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showUses, setShowUses] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);

  useEffect(() => {
    const storedFavorite = localStorage.getItem(`favorite-${plant.id}`) === 'true';
    setIsFavorite(storedFavorite);
  }, [plant.id]);

  const toggleFavorite = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    localStorage.setItem(`favorite-${plant.id}`, newFavoriteStatus);
  };

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

          <div className="features">
            <button className="feature-btn" onClick={() => setShowUses(!showUses)}>
              Uses <span className="arrow">{showUses ? '▲' : '▼'}</span>
            </button>
            {showUses && (
              <div className="feature-content">
                {plant.features.uses.map((use, index) => (
                  <div className="subsection" key={index}>
                    <h4>{use.title}</h4>
                    <p>{use.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="features">
            <button className="feature-btn" onClick={() => setShowRecipe(!showRecipe)}>
              Recipe <span className="arrow">{showRecipe ? '▲' : '▼'}</span>
            </button>
            {showRecipe && (
              <div className="feature-content">
                <p>{plant.features.recipe}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className={`add-to-favorites ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
        <i className="fas fa-star"></i>
      </button>
    </div>
  );
};

export default PlantCard;
