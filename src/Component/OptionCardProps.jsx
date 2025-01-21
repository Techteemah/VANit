import React from 'react'
import styled from "styled-components";
import Button from "./Button";

import { Link} from 'react-router-dom';


const OptionCardProps = ({ title, icon, link, buttonName }) => {
    return (
        <Container>
            <PageTitle> <h1>Choose Your Options</h1></PageTitle>
          <CardContainer>
          <CardTitle>
            <h2>{title}</h2>
          </CardTitle>
          <CardIcon>{icon}</CardIcon>
          <ButtonContainer>
          <Link to={link}>
            <Button name={buttonName} bgcolor="#126A10" color="white" width={160} height={48} />
          </Link>
        </ButtonContainer>
          </CardContainer>
        </Container>
        
    );
  };
  
  export default OptionCardProps;
  
  const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;
  
const CardContainer = styled.div`
background-color: white;
border-radius: 10px;
width: 400px;
padding: 20px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
position: relative;
text-align: center;
`;

const PageTitle = styled.div`
h1{
    font-size: 24px;
    color: #126A10 ;
    margin-bottom: 40px;
}
  
`;

const CardTitle = styled.div`
  margin-bottom: 15px;

  h2 {
    font-size: 24px;
    color: #126A10;
    margin: 0;
  }
`;

const CardIcon = styled.div`
  font-size: 40px;
  color: #126A10;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;


  a{
    text-decoration:none;
  }

`;
  