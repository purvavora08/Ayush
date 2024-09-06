import React, { useState, useEffect } from "react";
import "./App.css";
import PlantCard from "./PlantCard";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favPlants")) || [];
    setFavorites(savedFavorites);
  }, []);

  const addToFavorites = (plantName, plantHtml) => {
    const updatedFavorites = [...favorites, { name: plantName, html: plantHtml }];
    setFavorites(updatedFavorites);
    localStorage.setItem("favPlants", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (plantName) => {
    const updatedFavorites = favorites.filter((item) => item.name !== plantName);
    setFavorites(updatedFavorites);
    localStorage.setItem("favPlants", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="App">
      <header>
        <button className="toggle-menu" onClick={() => document.querySelector(".nav-menu").classList.toggle("open")}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1>Ayurveda Medicinal Plants and Herbs</h1>
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
        <section id="plant-list">
          <div id="plants">
            <PlantCard
              plant={{
                name: "Aloe Vera",
                scientificName: "Aloe barbadensis",
                family: "Asphodelaceae",
                hindiName: "घृतकुमारी",
                commonName: "Ghritkumari",
                description: "Aloe Vera is a succulent plant known for its healing properties...",
                imageUrl: "https://m.media-amazon.com/images/I/71V+Q59-NuL.jpg",
              }}
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
            <PlantCard
              plant={{
                name: "Tulsi",
                scientificName: "Ocimum sanctum",
                family: "Lamiaceae",
                hindiName: "तुलसी",
                commonName: "Holy Basil",
                description: "Tulsi is a sacred plant in India, revered in Hindu culture...",
                imageUrl: "https://pankajakasthuri.in/cdn/shop/articles/blog_23-01-2020-17-min_1024x1024.png?v=1694601379",
              }}
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
            {/* Add more PlantCards as needed */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
