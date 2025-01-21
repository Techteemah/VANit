import React from 'react';
import styled from 'styled-components';

// Styled Component for the card image
const StyledCardImage = styled.img`
  width: 120px;
  height: auto;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

// CardImage Component
const CardImage = ({ cardType }) => {
  // Map of card types to image URLs
  const cardImages = {
    visa: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
    mastercard: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg',
    amex: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg',
    discover: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Discover_Card_logo.svg',
    default: 'https://via.placeholder.com/120x60?text=Card+Unknown',
  };

  // Select the image based on card type or use the default image
  const imageUrl = cardImages[cardType] || cardImages.default;

  return <StyledCardImage src={imageUrl} alt={`${cardType} card`} />;
};

export default CardImage;
