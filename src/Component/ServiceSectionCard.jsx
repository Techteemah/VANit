import React from "react";
import styled from "styled-components";

// Styled Components
const CardContainer = styled.div`
  width: 140px; /* Default width for larger screens */
  height: 180px; /* Default height for larger screens */
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  background-color: #f9f9f9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Add hover effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  
  @media (max-width: 1024px) { /* For tablets */
    width: 120px; /* Reduce width */
    height: 160px;
  }

  @media (max-width: 768px) { 
    width: 100px; 
    height: 140px;
    padding: 8px;
  }

  @media (max-width: 480px) { /* For very small screens */
    width: 80px;
    height: 120px;
    padding: 5px;
  }
`;

const Icon = styled.img`
  width: 40px; /* Default size */
  height: 40px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 30px; /* Smaller size for mobile */
    height: 30px;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;

const Title = styled.h3`
  margin: 0 0 5px;
  font-size: 14px; /* Default font size */
  color: #333;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 12px; /* Smaller font for mobile */
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 12px; /* Default font size */
  color: #555;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 10px; /* Smaller font for mobile */
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const ServiceSectionCard = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <Icon src={icon} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default ServiceSectionCard;
