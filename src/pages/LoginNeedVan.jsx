import React from 'react'
import styled from 'styled-components'
import OptionCardProps from '../Component/OptionCardProps'


const LoginNeedVan = () => {
    return (
      <Container>
        <OptionCardProps
          title="I Need a Van"
          link="/SignIn"
          buttonName="Login"
          icon={
            <img
              src="https://res.cloudinary.com/dxldk0ytk/image/upload/v1735412746/Vector_4_vqbq0b.png"
              alt="UserIcon"
            />
          }
        />
      </Container>
    );
  };


export default LoginNeedVan;

const Container= styled.div ``
