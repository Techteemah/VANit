import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Component/Button';
import { useState, useEffect } from 'react';
import {TiArrowBack} from "react-icons/ti";
import { IoMdArrowRoundBack} from 'react-icons/io';
import { TiArrowForward } from "react-icons/ti";
import axios from 'axios';
import Cookies from 'js-cookie';




const OrderAssessment = () => {
  const [currentVan, setCurrentVan] = useState(0);
  const [getAssess, setGetAssess] = useState({})
  const [randomNumber, setrandomNumber] = useState ('') 
  

  const getOrderAccessment = async ()=>{
    // const user = Cookies.get("userId")
    const userId =  Cookies.get("userId")

    const amount = Cookies.get("amount")
    setrandomNumber(amount)

    console.log(randomNumber);
    

    const res = await axios.get(`https://vanish-backend.onrender.com/api/v1/movements/orderAssessment/${userId}`)
    setGetAssess(res.data.data)
  }

console.log('from get access',getAssess)
  const vans = [
    { name: "Small Van", image: "https://res.cloudinary.com/dxldk0ytk/image/upload/v1737384619/smallVan_vuwlk7.png" },
    { name: "Medium Van", image: "https://res.cloudinary.com/dxldk0ytk/image/upload/v1733402497/van-removebg-preview_1_by98oi.png" },
    { name: "Large Van", image: "https://res.cloudinary.com/dxldk0ytk/image/upload/v1736538558/gecwhjs08uvijxqx4n8q.png" },
  ];

  const handleNextVan = () => {
    setCurrentVan((currentVan + 1) % vans.length);
  };

  const handlePreviousVan = () => {
    setCurrentVan((currentVan - 1 + vans.length) % vans.length);
  };
  useEffect(()=>{
    getOrderAccessment()
  },[])

  return (
    <Container>
      <BackArrow>
        <Link to="/movement" className="back-link">
          <IoMdArrowRoundBack size={26} color="#818181" />
        </Link>
      </BackArrow>

      <ContainerText>Based on your order assessment</ContainerText>
      <TruckImage>
        <img src={vans[currentVan].image} alt={vans[currentVan].name} />
      </TruckImage>

      <Note>
        Note: If you require a larger van or truck, please select a larger option from the catalog.
      </Note>

      <CatalogueArrows>
        <ArrowLeft>
          <TiArrowBack size={25} color="white" onClick={handlePreviousVan} />
        </ArrowLeft>


        
        <ArrowRight>
          <TiArrowForward size={25} color="white" onClick={handleNextVan} />
        </ArrowRight>
      </CatalogueArrows>

      <SummaryContainer>
        <SummaryBox>
          <SummarySection>
            <Title>Travel Summary:</Title>
            <Text>
              <span>Pickup:</span>
              <span> {getAssess.pickUpLocation} </span>
            </Text>
            <Text>
              <span>Drop-Off:</span>
              <span>{getAssess.dropOffLocation}</span>
            </Text>
            <Title>Price Summary:</Title>
            <Text>
              <span>Service Charge:</span>
              <span>{randomNumber}</span>
            </Text>
            {/* <Text>
              <span>Required Services:</span>
            </Text>
            <Text>
              <span>Packaging & Loading:</span>
            </Text>
            <Text>
              <span>Cleaning Service:</span>
            </Text>
            <Text>
              <span>Offloading:</span>
            </Text> */}
            {/* <Services>
              <span>Services:</span>
              <span>N 100,000.00</span>
            </Services> */}
          </SummarySection>

          <SummarySection>
            <Title>Services Summary:</Title>
            <Text>
              <span>Van Size:</span>
              <span>{getAssess.typeOfVehicle}</span>
            </Text>
            <Text>
              <span>Distance:</span>
              <span>81.1km</span>
            </Text>

            <Title>Order Schedule:</Title>
            <Text>
              <span>Date:</span>
              <span>{getAssess.pickUpDate}</span>
            </Text>
            {/* <Text>
              <span>Time:</span>
              <span>Now</span>
            </Text> */}
          </SummarySection>
        </SummaryBox>
      </SummaryContainer>
      
      <Footer>
        <Link to="/EstimateCard">
          <Button name="Pay" bgcolor="#126A10" color="white" width={160} height={48} />
        </Link>
      </Footer>
    </Container>
    
  );
};

export default OrderAssessment;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
  box-sizing: border-box;

  @media (max-width: 350px) {
    width: 350px;
    height: 1076px;
    padding: 15px;
    box-shadow: none;
  }
`;

const BackArrow = styled.div`
  IoMdArrowRoundBack {
    position: absolute;
    top: 20px;
    left: 600px;
    font-weight: 300;
    .back-link {
      border: none;
      cursor: pointer;
    }
  }
`;

const ContainerText = styled.div`
  color: #126a10;
  font-size: 15px;
  margin-bottom: 0px;
  margin-left: 0px;
  text-align: left;
  font-weight: 200;

  @media (max-width: 350px) {
    font-size: 16px;
  }
`;

const TruckImage = styled.div`
  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin: auto;
    margin-left: 170px;
  }

  @media (max-width: 350px) {
    max-width: 300px;
  }
`;

const Note = styled.p`
  font-size: 14px;
  font-family: poppins;
  margin-bottom: 20px;
  color: #818181;
  text-align: center;

  @media (max-width: 350px) {
    font-size: 8px;
  }
`;

const CatalogueArrows = styled.div`
  position: absolute;
  top: 250px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ArrowLeft = styled.div`
  position: absolute;
  left: 10px;
  background-color: #126a10;
  border-radius: 45%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ArrowRight = styled.div`
  position: absolute;
  right: 540px;
  background-color: #126a10;
  border-radius: 45%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 350px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const SummaryBox = styled.div`
  display: flex;
  gap: 30px;
  flex: 1;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 250px;
  width: 48%;  

  @media (max-width: 350px) {
    flex: 1 1 100%;
    padding: 10px;
  }
`;

const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  min-width: 250px;

  @media (max-width: 350px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: #126a10;
  font-weight: bold;
  font-family: poppins;

  @media (max-width: 350px) {
    font-size: 14px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #818181;
  margin: 5px 0;

  & span:first-child {
    font-weight: bold;
  }

  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

const Services = styled.div`
  font-size: 14px;
  font-family: poppins;
  font-weight: bold;
  margin-top: 10px;
  color: #126a10;
  display: flex;
  justify-content: space-between;

  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

const Footer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 350px) {
    margin-top: 20px;
  }
`;