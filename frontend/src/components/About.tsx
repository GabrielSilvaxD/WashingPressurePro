import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Washing Pressure PRO</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to Washing Pressure PRO, your trusted partner for professional pressure washing services. 
              With years of experience in the industry, we specialize in transforming residential and commercial 
              properties with our expert cleaning solutions.
            </p>
            <p>
              Our team uses state-of-the-art equipment and eco-friendly cleaning solutions to deliver outstanding 
              results every time. We take pride in our attention to detail and commitment to customer satisfaction.
            </p>
            <p>
              Whether you need house washing, driveway cleaning, or commercial services, we have the expertise 
              to handle projects of any size. We're fully licensed, insured, and dedicated to exceeding your 
              expectations.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
