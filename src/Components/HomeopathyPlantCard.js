import React, { useState } from 'react';

function PlantCard({ plant }) {
  const [showUses, setShowUses] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);

  const toggleContent = (type) => {
    if (type === 'uses') setShowUses(!showUses);
    if (type === 'recipe') setShowRecipe(!showRecipe);
  };

  return (
    <div className="plant-card">
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
            <button className="feature-btn" onClick={() => toggleContent('uses')}>
              Uses <span className="arrow">&#9662;</span>
            </button>
            {showUses && (
              <div className="feature-content">
                {plant.uses.map((use, index) => (
                  <div className="subsection" key={index}>
                    <h4>{use.category}</h4>
                    <p>{use.details}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="features">
            <button className="feature-btn" onClick={() => toggleContent('recipe')}>
              Recipe <span className="arrow">&#9662;</span>
            </button>
            {showRecipe && (
              <div className="feature-content">
                <p>{plant.recipe}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="add-to-favorites">
        <i className="fas fa-star"></i>
      </button>
    </div>
  );
}

export default PlantCard;
