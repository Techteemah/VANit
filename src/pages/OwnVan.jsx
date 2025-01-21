import React from 'react';
import styled from 'styled-components';
import OptionCardProps from '../Component/OptionCardProps';


const OwnVan = () => {
  return (
    <Container>
      <OptionCardProps
        title="I Own a Van"
        link="/DriversSignUp"
        buttonName="SignUp"
        icon={
          <img
            src="https://res.cloudinary.com/dxldk0ytk/image/upload/v1735412620/Vector_3_iszl78.png"
            alt="User Profile Icon"
          />
        }
      />
    </Container>
  );
};
export default OwnVan;

const Container = styled.div``
