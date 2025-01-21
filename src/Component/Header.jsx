import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi"
import Button from '/src/Component/Button.jsx'
import { useState } from 'react'
import { Link } from "react-router-dom"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = () => {


  // State to track if the pane is open or closed
  const [isOpen, setIsOpen] = useState(false);

    // Toggle the state
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };





    const logoRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    timeline.to(logoRef.current, {
      x: 70, // Move 500px to the right
      duration: 2,
      ease: "power2.inOut",
    });
    timeline.to(logoRef.current, {
      x: 0, // Return to the starting point
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);



  return (
    <Container>
        <div className='logo' ref={logoRef}>
            <a href="/">   <img  src="/logo.png" alt="vanish logo" /></a>
        </div>
        <div className='nav'>
            <ul id="nav">
                <a href="/"><li>Home</li></a>
                <a href="/Service"><li>Services</li></a>
                <a href="/about-us"><li>About Us</li></a>
            </ul>
           
            <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
             {/* Side Pane */}
              <div className={`side-pane ${isOpen ? "open" : ""}`} id='sidePane'>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/services">Servicest</a></li>
                  <li><a href="/about-us">About-Us</a></li>
                  <li><a href="/sign-in">Sign In</a></li>
                  <li><a href="/log-in">Log In</a></li>
                </ul>
              </div>
        </div>
        <div className='btn'>
         <Link to ="/OptionPage"> <a href="/SignUp"><Button name='Sign Up' bgcolor='#126A10' color='white ' width= {160} height={48}/></a> </Link> 
         <Link to ="/LoginOptionPage"> <Button name='Log In' bgcolor='white' color='#126A10' width= {160} height={48}/> </Link>
            
            
        </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow:.5px 0.1px 15px lightgrey;
  box-shadow: bl;
  position: sticky;
  top: 0px;
  z-index: 3;
  background-color: white;

  .hamburger{
    display: none;
  }
  #sidePane{
    display: none;
  }

  .logo{
    img{
      width:110px;
      cursor: pointer;
    }
  }

  .nav{
    a{
      text-decoration: none;
      color: black;
    }
    ul{
        list-style: none;
        display: flex;
        gap: 40px;
       margin-top:15px;
        
      li {
  color: #000; 
  font-size: 16px; 
  transition: all 0.3s ease; 
  position: relative; 
  cursor: pointer; 
}

li:hover {
  color: #126A10; 
  
  transform: scale(1.1); 
  text-shadow: 0 4px 8px rgba(18, 106, 16, 0.3); 
}

li::before {
  content: ""; 
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: #126A10;
  transition: width 0.4s ease; 
}

li:hover::before {
  width: 100%; 
}

    }
    #nav2{
      display:none; 
    } 
  }
  .btn{
    display:flex;
    gap: 10px;
    .btn1{
    width: 140px;
    height: 40px;
    border-radius: 15px;
    background-color: #126A10;
    color: white;
    border: none;
    cursor: pointer;
    margin-right: 20px;
  }
  .btn2{
    width: 140px;
    height: 40px;
    border-radius: 15px;
    background-color: white;
    color: #126A10;
    border: 1px solid #126A10;
    cursor: pointer;
  }

  }

  @media (max-width: 429px) {


    .logo{
    img{
      width:85px;
    }
  }
    #nav{
      display:none; 
    } 
   
    .btn{
      display:none;
    }
    .hamburger{
    display: flex;
  }

  /* Side pane */
  #sidePane{
    display: flex;
  }
.side-pane {
  position: fixed;
  top: 40px;
  right: -250px; /* Initially hidden */
  width: 150px;
  height: fit;
  padding-bottom: 50px;
  background: #383737a3;
  /* color: red; */
  transition: 0.3s ease-in-out;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 999;
  
}

.side-pane.open {
  right: 0; /* Slide in when open */
}

.side-pane ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.side-pane li {
  /* margin-right: 10px ; */
  /* text-align: right; */
}

.side-pane a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}
  }
  `