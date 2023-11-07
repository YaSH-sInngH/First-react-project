import React from 'react';
import './home.css';
import Card from './Card'; // Import the Card component

const cardData = [
  {
    imageUrl: '/images/image1.jpg',
    text: 'We have the best machines'
  },
  {
    imageUrl: '/images/image2.jpg',
    text: 'We provide the best equipments.'
  },
  {
    imageUrl: '/images/image3.jpg',
    text: 'We have the best trainers.'
  }
];

const About = () => {

  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default About;
