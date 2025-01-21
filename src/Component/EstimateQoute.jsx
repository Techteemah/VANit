import React from "react";
import styled from "styled-components";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "./Button"; 

const EstimateQuote = ({ estimate = 0 }) => {
  return (
    <Container>
      <Cardcontainer>
        <Link to="/">
          <CloseButton>
            <AiOutlineClose />
          </CloseButton>
        </Link>
        <h2>Your VANit estimate!</h2>
        <Emoji>
          <BsEmojiLaughingFill />
        </Emoji>
        <p>Your VANit estimate is</p>
        <p className="amount">₦{estimate.toFixed(2)}</p>
        <Link to="/signup">
          <Button name="Next" bgcolor="#126a10" color="white" width={160} height={48} />
        </Link>
      </Cardcontainer>
    </Container>
  );
};

export default EstimateQuote;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const Cardcontainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 400px; 
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;

  h2 {
    font-size: 20px;
    color: #126a10;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    color: black;
    margin: 5px 0;

    &.amount {
      font-size: 28px;
      color: #126a10;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%; 
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 95%; 
    padding: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: grey;

  &:hover {
    color: black;
  }
`;

const Emoji = styled.div`
  font-size: 80px;
  margin: 20px 0;
  color: #f0c419;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;
