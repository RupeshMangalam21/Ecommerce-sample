import React from 'react';
import '../styles.css'; // Import your custom CSS file
import ShopPage from './ShopPage';
import Landing2 from '../Images/Landing2.mp4';
// import sectionbg2 from '../Images/sectionbg2.jpg'
import { FaShoppingCart } from 'react-icons/fa';
import ReviewsCarousel from '../Components/ReviewsCarousel'

// import Cart from '../Components/Cart';
const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="header-title">Sweet Addictions</h1>
        <p className="header-subtitle">Your One-Stop-Shop for Fresh Cakes and Baked Goodness!</p>
        <a href='#cart' className='cart-button'>
        <FaShoppingCart /> _ My Cart
        </a>
        <a href="#shop" className="header-button">
          Explore Now
        </a>
      </header>
      <section id='landing' className='top-section'>
        <video src={Landing2} autoPlay loop muted className='imgtop'></video>
      </section>
      <section className="section-with-overlay">
        <div className="overlay"></div>
        <div className="visit-us">
          <h2>Visit Us</h2>
          <p>Sector 15 Market</p>
          <p>Chandigarh, India</p>
        </div>
      </section>
      <section id="shop" className="shop-section">
        <h2 className="shop-title">Shop Our Delicious Cakes</h2>
        <ShopPage />
      </section>
      <section className='reviews-section' style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '60px', marginTop: '120px' }}>What Our Customers Say</h2>
        <ReviewsCarousel />
      </section>
      <section className="about-section">
        <p className="about-description">
        At Sweet Addictions, we are committed to delivering the freshest and most delectable treats for every occasion. With a devotion to quality and creative craftsmanship, we craft delightful confections that capture the essence of each occasion.
        </p>
      </section>

      <footer className="footer">
        <p className="footer-text">© 2023 PORORO, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
