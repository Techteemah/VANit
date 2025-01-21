import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesCard = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // Slow appear animation
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 }, // Initial state: hidden and slightly below
      {
        opacity: 1,
        y: 0, // Move to original position
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // Animation starts when 85% of the card is in the viewport
          toggleActions: "restart none none none", // Reanimate on scroll
        },
      }
    );
  }, []);

  return (
    <Container ref={cardRef}>
      <div className="before">
        <div className="Container">
          <div>{props.img}</div>
          <h2>{props.title}</h2>
          <p>{props.text1}</p>
          <p>{props.text2}</p>
          <p>{props.text3}</p>
          <p>{props.text4}</p>
        </div>
      </div>
    </Container>

  );
};


export default ServicesCard;
const Container = styled.div`
padding: 2px;
background:linear-gradient(90deg,#D7C525,#126A10);
border-radius: 24px;
 
,


 .Container{position: relative;
  /* border: 5px solid transparent;  */
  border-radius: ${({ borderRadius }) => borderRadius || '24px'}; 
  background: white; 
  background-clip: border-box;
  box-sizing: border-box;
  padding: ${({ padding }) => padding || '30px'};
  width:350px;
  height: 250px;
   
  border-color:linear-gradient(90deg,#D7C525,#126A10); ;
  /* padding: 30px; */
}
  
  .Container::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    z-index: -1;
    border-radius: ${({ borderRadius }) => borderRadius || '111px'};
    background: white;



  }






  .Container {
    /* border: 2px solid transparent; 
    border-image: linear-gradient(90deg,#D7C525,#126A10);
    border-image-slice: 1; */
    /* width:350px;
    height: 250px;
    padding: 30px;
    background-color:white; 
    border-radius: 8px; */

  

p{
line-height:15px;
}

  

  h2{
    margin-bottom: 15px;
    color:#126A10;
    font-size: 20px;
  }

  div{
    background-color:#E7F0E7;
    border-radius: 10px;
    color:#126A10;
    display: inline-block;
    width:60px;
    height: 60px;
    text-align: center;
    align-content: center;
    margin-bottom: 15px;

    img{
      width: 30px;
      margin-bottom: 20px;
    }
  }
} 
  
`