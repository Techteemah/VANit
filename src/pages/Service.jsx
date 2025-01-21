
import React from "react";
import ServiceSection from "../Component/ServiceSection";
import ServiceSectionCard from "../Component/ServiceSectionCard";
import styled from "styled-components";
import Pic1 from "../assets/pic1.png"
import Pic2 from "../assets/pic2.png"
import Pic3 from "../assets/pic3.png"
import Pic4 from "../assets/pic4.png"
import Pic5 from "../assets/pic5.png"
import Pic7 from "../assets/pic8.png"
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";
import Icon4 from "../assets/icon4.svg";
import Icon5 from "../assets/icon5.svg";
import Icon6 from "../assets/icon6.svg";
import Icon7 from "../assets/icon7.svg";


// Sample services data
const services = [
  {
    title: "Track Every Van In Real Time",
    description: "Stay updated on your fleet status with real-time location tracking and solutions.",
    icon: Pic2, // Replace with actual image
    image: Pic7,
    reverse: false,
   
    
  },
  {
    title: "Items Security",
    description: "Item Security is our top priority",
    image: Pic5,
    icon: Pic1,
    reverse: true,
    
  },
  {
    title: "Clear & No Hidden Fees",
    description: "Transparent pricing to ensure trust in our services.",
    icon: Pic3,
    image: Pic4,
    reverse: false,
   
  },
];

const sections = [
    {
        icon: Icon1, 
        title: "Secure",
        description: "Create confidence among users by priortizing their security",
      },
      {
        icon: Icon2, // Use an emoji or replace with an icon library
        title: "Customer Support",
        description: "Provide multiple ways for users to reach out, ensuring accessibility.",
      },
    {
        icon: Icon3, // Use an emoji or replace with an icon library
        title: "Negotiation",
        description: "Facilitate clear communication between users and service providers.",
      },
      {
        icon: Icon4,
        title: "Scheduling",
        description: "Provide options to accommodate different schedules and urgent requests.",
      },
      {
        icon: Icon5,
        title: "Developers",
        description: "Expertise in UI/UX design and front-end frameworks like React.",
      },
      {
        icon: Icon6,
        title: "The People",
        description: "User interface (UI) responsiveness and accessibility for users.",
      },
      {
        icon: Icon7, // Use an emoji or replace with an icon library
        title: "Speed",
        description: "Use AI based tools for dynamic pricing and scheduling to reduce delays.",
      },
]

function ServicePage() {
  return (
    <div>
        <span style={{background: "white"}}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#126A10", paddingTop: "80px", fontFamily: "Inter", fontWeight:"bolder" }}> <span style={{color: "black"}}>Our</span> Services</h1>
      <p style={{ textAlign: "center", marginBottom: "30px", height: "100px", width: "100%", display:"flex", alignItems: "center", justifyContent: "center", textWrap: "wrap", fontFamily: "Inter", fontWeight:"bold"}}>Our app gives you unparalled visibility into your entire logistics network. Whether you're managing <br/>a single delivery or overseeing thousands, you can track the exact location of every shipment in real time.</p>
      </span>
      {services.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          icon={service.icon}
          reverse={service.reverse}
        />
      ))},
{
      <CardGrid>
      {sections.map((section, index) => (
        <ServiceSectionCard
          key={index}
          icon={section.icon}
          title={section.title}
          description={section.description}
        />
      ))}
    </CardGrid>
      }

    </div>
  );
}

export default ServicePage;
const CardGrid = styled.div`
   display: flex;
  justify-content: space-between; /* Ensures space between cards */
  flex-wrap: wrap;
  gap: 10px; /* Space between cards */
  padding: 80px 0 80px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: center; /* Center align for smaller screens */
  }
`;
