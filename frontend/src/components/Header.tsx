import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>💧 Washing Pressure PRO</h1>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('services')}>Services</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
