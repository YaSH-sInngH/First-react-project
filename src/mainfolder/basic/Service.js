import React from 'react';

const Service = ({ id, serviceName, image, isSelected, onSelect }) => {
  const cardClassName = `service-card ${isSelected ? 'selected' : ''}`;

  return (
    <div className={cardClassName} onClick={() => onSelect(id)}>
      <div className="circle-badge">{id}</div>
      <h3 className="service-name">{serviceName}</h3>
      <img src={image} alt={serviceName} />
    </div>
  );
};

export default Service;
