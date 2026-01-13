import React, { useState, useEffect } from 'react';
import './Services.css';

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  icon: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch services from API
    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        // Fallback to hardcoded services if API fails
        setServices([
          {
            id: 1,
            name: 'House Washing',
            description: 'Professional exterior house washing to restore your home\'s beauty',
            price: 'Starting at $150',
            icon: '🏠'
          },
          {
            id: 2,
            name: 'Driveway Cleaning',
            description: 'Remove oil stains, dirt, and grime from your driveway',
            price: 'Starting at $100',
            icon: '🚗'
          },
          {
            id: 3,
            name: 'Deck & Patio',
            description: 'Restore and protect your outdoor living spaces',
            price: 'Starting at $120',
            icon: '🪵'
          },
          {
            id: 4,
            name: 'Commercial Washing',
            description: 'Professional pressure washing for businesses',
            price: 'Custom Quote',
            icon: '🏢'
          },
          {
            id: 5,
            name: 'Roof Cleaning',
            description: 'Safe and effective roof cleaning to extend its lifespan',
            price: 'Starting at $200',
            icon: '🏠'
          },
          {
            id: 6,
            name: 'Fence Cleaning',
            description: 'Revitalize your fence and increase curb appeal',
            price: 'Starting at $80',
            icon: '🚧'
          }
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Expert pressure washing solutions for every need
        </p>
        
        {loading ? (
          <div className="loading">Loading services...</div>
        ) : (
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <p className="service-price">{service.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
