import React from 'react';

import { Link } from 'react-router-dom'; 
import styled from 'styled-components'; 

const OptionPage = () => {
  

  return (
    <PageContainer>
      <HeaderContainer>
        <h1>Choose Your Options</h1>
      </HeaderContainer>
      <OptionsContainer>

        <Link to="/ownvan" style={{ textDecoration: 'none' }}>
          <OptionCard>
            <OptionTitleContainer>
              <h2>I Own a Van</h2>
            </OptionTitleContainer>
            <OptionIconContainer>
              <img 
                src="https://res.cloudinary.com/dxldk0ytk/image/upload/v1735412620/Vector_3_iszl78.png" 
                alt="Driver Icon" 
              />
            </OptionIconContainer>
          </OptionCard>
        </Link>

        <Link to="/needvan" style={{ textDecoration: 'none' }}>
          <OptionCard>
            <OptionTitleContainer>
              <h2>I Need a Van</h2>
            </OptionTitleContainer>
            <OptionIconContainer>
              <img 
                src="https://res.cloudinary.com/dxldk0ytk/image/upload/v1735412746/Vector_4_vqbq0b.png" 
                alt="User Icon" 
              />
            </OptionIconContainer>
          </OptionCard>
        </Link>

      </OptionsContainer>
    </PageContainer>
  );
};

export default OptionPage;




const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  margin-bottom: 30px;
  text-align: center;

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: #126A10;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 75px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const OptionCard = styled.div`
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const OptionTitleContainer = styled.div`
  margin-bottom: 15px;

  h2 {
    font-size: 16px;
    color: #126A10;

    font-weight: 500;


    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const OptionIconContainer = styled.div`
  img {
    width: 60px;
    height: auto;

    @media (max-width: 768px) {
      width: 50px;
    }
  }

`;

