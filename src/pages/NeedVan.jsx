import React from 'react'
import styled from 'styled-components'
import OptionCardProps from '../Component/OptionCardProps'


const NeedVan = () => {
    return (
      <Container>
        <OptionCardProps
          title="I Need a Van"
          link="/SignUp"
          buttonName="SignUp"
          icon={
            <img
              src="https://res.cloudinary.com/dxldk0ytk/image/upload/v1735412746/Vector_4_vqbq0b.png"
              alt="User Profile Icon"
            />
          }
        />
      </Container>
    );
  };


export default NeedVan

const Container= styled.div ``
