import React from 'react';

const Card = ({ imageUrl, text }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" />
      <div className="card-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
