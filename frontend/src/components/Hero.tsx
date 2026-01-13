import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Professional Pressure Washing Services</h1>
        <p className="hero-subtitle">
          Transform your property with our expert cleaning solutions
        </p>
        <p className="hero-description">
          We bring years of experience and top-quality equipment to make your home or business shine like new.
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          Get A Free Quote
        </button>
      </div>
      <div className="hero-features">
        <div className="feature">
          <span className="feature-icon">⭐</span>
          <h3>Experienced Team</h3>
          <p>Trained professionals</p>
        </div>
        <div className="feature">
          <span className="feature-icon">💯</span>
          <h3>Quality Guaranteed</h3>
          <p>100% satisfaction</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🛡️</span>
          <h3>Fully Insured</h3>
          <p>Licensed & bonded</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
