import React from "react";
import styled from "styled-components";

// Styled components for ServiceSection
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #126A10;
  border-radius: 18px;
  padding: 10px;
  margin: 25px auto;
  max-width: 80%;
  height: 250px;
  background-color: #f9f9f9;

   
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

`;

const TextContent = styled.div`
 flex: 1;
  margin-right: ${({ reverse }) => (reverse ? "0" : "15px")};
  margin-left: ${({ reverse }) => (reverse ? "15px" : "0")};
padding: 60px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Title = styled.h3`
  margin: 0 0 10px;
  color: #126A10;
  font-family: Inter;
  font-weight: Bold;
`;

const Description = styled.p`
  margin: 0;
  color: #000
  font-family: Inter;
  font-weight: Bold;

`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 450px;
  height: 250px;
  margin-right: ${({ reverse }) => (reverse ? "0px" : "-10px")};
  border-radius: 10px;
  ;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

function ServiceSection({ reverse, title, description, image, icon }) {
  return (
    <Section reverse={reverse}>
      <TextContent reverse={reverse}>
        <Icon src={icon} alt="Service Icon" />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContent>
      <Image src={image} alt={title} />
    </Section>
  );
}

export default ServiceSection;
