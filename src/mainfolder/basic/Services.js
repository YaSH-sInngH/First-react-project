import React, { useState } from 'react';
import './home.css';
import Service from './Service';
import serviceData from './serviceAPI';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelect = (id) => {
    setSelectedService(id);
  };

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service-cards-container">
        {serviceData.map((service) => (
          <Service
            key={service.id}
            id={service.id}
            serviceName={service.serviceName}
            image={service.image}
            isSelected={selectedService === service.id}
            onSelect={handleServiceSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
