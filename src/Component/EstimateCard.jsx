import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"; 
import Button from "./Button"; 
import axios from "axios";
import Cookies from "js-cookie";

const EmailModal = ({ isOpen, onClose, onSubmitEmail, randomNumber }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Side-effect if needed in the future
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    onSubmitEmail(email);

    const payment = async () => {
      try {
        const orderId = Math.random().toString(36).substring(2, 15);
        const response = await axios.post("https://vanish-backend.onrender.com/api/v1/payment/makePayment", {
          email,
          amount: randomNumber,
          orderId: "hjsyduhe6398uv",
        });

        console.log("Payment successful", response.data);

        if (response.data.success) {
          const authorizationUrl = response.data.authorization_url;
          window.open(authorizationUrl, "_blank");
        }
      } catch (error) {
        console.error("Payment failed", error);
      }
    };

    payment();
    setEmail(""); // Reset the email input field
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <AiOutlineClose />
        </CloseButton>
        <h3>Please enter your email to proceed</h3>
        <form onSubmit={handleEmailSubmit}>
          <EmailInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <Button type="submit" bgcolor="#126a10" color="white" width={160} height={48} name="Submit">
            Submit
          </Button>
          <Button type="button" bgcolor="red" color="white" width={160} height={48} name="Cancel" clickMe={onClose}>
            Cancel
          </Button>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

const EstimateCard = ({ estimate = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomNumber, setRandomNumber] = useState('');

  useEffect(() => {
    const amount = Cookies.get("amount");
    if (amount) {
      setRandomNumber(amount);
    }
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitEmail = (email) => {
    console.log("Email submitted:", email);
    handleCloseModal();
  };

  return (
    <Container>
      <Cardcontainer>
        <CloseButton onClick={handleCloseModal}>
          <AiOutlineClose />
        </CloseButton>
        <h2>Your VANit estimate!</h2>
        <Emoji>
          <BsEmojiLaughingFill />
        </Emoji>
        <p>Your VANit estimate is</p>
        <p className="amount">NGN{randomNumber}</p>
        <Button
          name="Pay Now"
          bgcolor="#126a10"
          color="white"
          width={160}
          height={48}
          clickMe={handleOpenModal}
        />
      </Cardcontainer>

      <EmailModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmitEmail={handleSubmitEmail}
        randomNumber={randomNumber} // Pass randomNumber prop here
      />
    </Container>
  );
};

export default EstimateCard;

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: grey;

  &:hover {
    color: black;
  }
`;

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
