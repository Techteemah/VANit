import React, { useState } from 'react';
import styled from 'styled-components';
import CardImage from '../../Component/CardImage';

// Styled Components
const PaymentContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fefefe;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${props => (props.error ? 'red' : '#ccc')};
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
  display: block;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #126A10;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CloseButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background: #0056b3;
  }
`;

// Utility function to detect card type
const detectCardType = (number) => {
  const cardPatterns = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    discover: /^6(?:011|5)/,
  };

  for (const [card, pattern] of Object.entries(cardPatterns)) {
    if (pattern.test(number)) return card;
  }
  return '';
};

// Main PaymentPage component
const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState({ show: false, success: false });

  // Handle card number input
  const handleCardNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    const formatted = input.replace(/(\d{4})/g, '$1 ').trim(); // Format as 1234 5678 9012 3456
    setCardNumber(formatted);
    setCardType(detectCardType(input));
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Invalid card number. Must be 16 digits.';
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date. Format: MM/YY';
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      newErrors.cvv = 'Invalid CVV. Must be 3 or 4 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setModal({ show: true, success: true });
    } else {
      setModal({ show: true, success: false });
    }
  };

  return (
    <PaymentContainer>
      <Title>Payment Page</Title>

     
      <CardImage cardType={cardType} />

      <form onSubmit={handleSubmit}>
        <Label htmlFor="cardNumber">Card Number:</Label>
        <Input 
          type="text" 
          id="cardNumber" 
          value={cardNumber} 
          onChange={handleCardNumberChange} 
          placeholder="1234 5678 9012 3456" 
          maxLength="19" 
          error={errors.cardNumber} 
        />
        {errors.cardNumber && <ErrorText>{errors.cardNumber}</ErrorText>}

        <Label htmlFor="expiryDate">Expiry Date (MM/YY):</Label>
        <Input 
          type="text" 
          id="expiryDate" 
          value={expiryDate} 
          onChange={(e) => setExpiryDate(e.target.value)} 
          placeholder="MM/YY" 
          maxLength="5" 
          error={errors.expiryDate} 
        />
        {errors.expiryDate && <ErrorText>{errors.expiryDate}</ErrorText>}

        <Label htmlFor="cvv">CVV:</Label>
        <Input 
          type="text" 
          id="cvv" 
          value={cvv} 
          onChange={(e) => setCvv(e.target.value)} 
          placeholder="123" 
          maxLength="4" 
          error={errors.cvv} 
        />
        {errors.cvv && <ErrorText>{errors.cvv}</ErrorText>}

        <Button type="submit">Pay Now</Button>
      </form>

      {modal.show && (
        <ModalOverlay>
          <ModalContent>
            {modal.success ? (
              <h3>Payment Successful!</h3>
            ) : (
              <h3>Payment Failed!</h3>
            )}
            <CloseButton onClick={() => setModal({ show: false, success: false })}>
              Close
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </PaymentContainer>
  );
};

export default PaymentPage;
