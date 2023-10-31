import React from 'react';
import '../styles.css'; // Import your custom CSS file
import ShopPage from './ShopPage';
import Landing from '../Images/Landing.jpg';
const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="header-title">PORORO</h1>
        <p className="header-subtitle">Your One-Stop-Shop for Fresh Flowers</p>
        <a href="#shop" className="header-button">
          Explore Now
        </a>
      </header>
      <section id='landing' className='top-section'>
        <img src={Landing} alt="Top-section" className='imgtop'/>
      </section>
      <section id="shop" className="shop-section">
        <h2 className="shop-title">Shop Our Beautiful Flowers</h2>
        <ShopPage />
      </section>

      <section className="about-section">
        <p className="about-description">
          At Pororo, we are dedicated to providing the freshest and most beautiful
          flowers for every occasion. With a passion for quality and design,
          we create stunning arrangements that capture the essence of each season.
        </p>
      </section>

      <footer className="footer">
        <p className="footer-text">© 2023 PORORO, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
