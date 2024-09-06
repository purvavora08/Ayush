import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PlantCard from './components/PlantCard';

const App = () => {
  // Example plant data
  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      scientificName: "Aloe barbadensis",
      family: "Asphodelaceae",
      commonName: "Aloe Vera",
      image: "https://example.com/aloe-vera.jpg",
      description: "Aloe Vera is known for its soothing and healing properties...",
      features: {
        uses: [
          { title: "Skin Care", description: "Aloe Vera gel helps in soothing sunburns and skin irritations." },
          { title: "Digestive Health", description: "Consuming Aloe Vera juice supports digestion and detoxification." }
        ],
        recipe: "Aloe Vera Juice: Blend Aloe Vera gel with water and a touch of lemon juice."
      }
    },
    {
      id: 2,
      name: "Ginger",
      scientificName: "Zingiber officinale",
      family: "Zingiberaceae",
      commonName: "Ginger",
      image: "https://example.com/ginger.jpg",
      description: "Ginger is a powerful herb in Naturopathy...",
      features: {
        uses: [
          { title: "Digestive Health", description: "Ginger aids in digestion..." },
          { title: "Anti-inflammatory", description: "It has anti-inflammatory properties that can help with joint pain." }
        ],
        recipe: "Ginger Tea: Boil ginger slices in water and add honey."
      }
    },
    // Add more plants as needed
  ];

  return (
    <div>
      <Header />
      <main>
        <section id="plant-list">
          <div id="plants">
            {plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
