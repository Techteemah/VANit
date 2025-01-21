import React from 'react';
import styled from 'styled-components';
import OptionCardProps from '../Component/OptionCardProps';


const LoginOwnVan = () => {
  return (
    <Container>
      <OptionCardProps
        title="I Own a Van"
        link="/DriversSignIn"
        buttonName="Login"
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
export default LoginOwnVan;

const Container = styled.div``
