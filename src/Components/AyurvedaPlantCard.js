import React, { useState } from "react";

function PlantCard({ plant, favorites, addToFavorites, removeFromFavorites }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isFavorited = favorites.some((item) => item.name === plant.name);

  const handleFavorite = () => {
    if (isFavorited) {
      removeFromFavorites(plant.name);
    } else {
      addToFavorites(plant.name, plant);
    }
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
            <button onClick={() => setIsExpanded(!isExpanded)} className="feature-btn">
              Uses <span className="arrow">&#9662;</span>
            </button>
            {isExpanded && (
              <div className="feature-content">
                <div className="subsection">
                  <h4>Health Care</h4>
                  <p>Helps soothe digestive issues and promotes regularity.</p>
                </div>
                <div className="subsection">
                  <h4>Skin Care</h4>
                  <p>Used for treating burns, cuts, and moisturizing the skin.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className={`add-to-favorites ${isFavorited ? "favorited green" : ""}`} onClick={handleFavorite}>
        <i className="fas fa-star"></i>
      </button>
    </div>
  );
}

export default PlantCard;

