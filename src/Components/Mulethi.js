import React, { useState } from 'react';
import './style.css'; // External CSS file
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';

const Muleti = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [featureOpen, setFeatureOpen] = useState({}); // For toggling features

    // Toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Toggle individual feature section
    const toggleFeature = (index) => {
        setFeatureOpen((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="muleti-app">
            <header>
                <button className="toggle-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="header-slide">
                    <div className="slide-container">
                        <img src="m.webp" alt="Slide 1" />
                        <img src="mt.jpg" alt="Slide 2" />
                    </div>
                </div>
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
                        {/* Plant 1: Muleti (Licorice) */}
                        <div className="plant-card">
                            <div className="plant-content">
                                <div className="plant-details">
                                    <h1>Mulethi</h1>
                                    <p><strong>Scientific Name:</strong> Glycyrrhiza glabra</p>
                                    <p><strong>Family:</strong> Fabaceae</p>
                                    <p><strong>Hindi Name:</strong> मुलैठी</p>
                                    <p><strong>Common Name:</strong> Licorice</p>
                                    <p>
                                        Muleti is used in Unani medicine for its soothing effects on the respiratory system,
                                        digestive health, and its ability to support adrenal function.
                                    </p>
                                    <div className="features">
                                        <button
                                            className="feature-btn"
                                            onClick={() => toggleFeature(1)}
                                        >
                                            Uses <span className="arrow">&#9662;</span>
                                        </button>
                                        <div
                                            className="feature-content"
                                            style={{ display: featureOpen[1] ? 'block' : 'none' }}
                                        >
                                            <div className="subsection">
                                                <h4>Respiratory Health</h4>
                                                <p>Helps soothe coughs and respiratory issues.</p>
                                            </div>
                                            <div className="subsection">
                                                <h4>Digestive Health</h4>
                                                <p>Supports digestive health and alleviates heartburn.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features">
                                        <button
                                            className="feature-btn"
                                            onClick={() => toggleFeature(2)}
                                        >
                                            Recipe <span className="arrow">&#9662;</span>
                                        </button>
                                        <div
                                            className="feature-content"
                                            style={{ display: featureOpen[2] ? 'block' : 'none' }}
                                        >
                                            <p>Licorice Tea: Steep licorice root in hot water and drink daily.</p>
                                        </div>
                                    </div>
                                    <button className="add-to-favorites" style={{ marginLeft: '90%' }}>
                                        <i className="fas fa-star"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Add more plant cards as needed */}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Muleti;
