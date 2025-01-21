import styled from "styled-components"
import bg from "../assets/bg.jpg"

import { Link } from "react-router-dom";


const Location = () => {

    return (
      <Background>
        <img src="" alt="" />
      <Service>
        <Geo>
        <PickUp>
            <p>Pickup : 1 Muba Abiru Street Ikorodu Lagos</p> <br />
            <p>Drop-Off : 388 Herbert Macaulay Wy. Lagos</p> <br />
            <p>Distance: 8km</p>

        </PickUp>
        <Form>
         <Form1>
         <p>Other Required Services:</p> <br /> <br />
         <input type="checkbox" /> <label>Packaging </label> 
         <input type="checkbox" /> <label>Loading</label> <br /> <br />
         <input type="checkbox" /> <label>Offloading</label>
         <input type="checkbox" /> <label>Arranging</label> <br /> <br />
         {/* <input type="checkbox" /> <label>Cleaning </label>
         <input type="checkbox" /> <label>Packaging & Loading</label><br /> <br /> */}
         {/* <input type="checkbox" /> <label>Packaging & Loading</label>
         <input type="checkbox" /> <label>Packaging & Loading</label> */}
         </Form1>
         <p id='disclaimer'>Note: All selected service charge will be added in-line with the most suitable van for your moving request.</p>
         

       </Form>
       
        </Geo>

        <Link to="/Driver">
        <button>Proceed</button>
        </Link>


        </Service>
        </Background>
    )
}

export default Location

const Background = styled.div`
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-image:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${bg});
`

const Service = styled.div`
   width: 800px;
   height: 420px;
   margin: auto;
   margin-top: 70px;
   background-color: #F8F8F8;
   border-radius:18px;
   font-size: 13px;
   font-family: "Poppins";

   button{
      background-color: #126A10;
      width:126px;
      height:40px;
      border-radius: 10px;
      color: white;
      border:none;
      margin-left: 350px;
      margin-top: 40px;
      
      
   }
   @media (max-width: 429px) {
    width: 90%;
    height: 507px;
    margin: auto;
    font-size: 13px;


    button{
      background-color: #126A10;
      width:126px;
      height:40px;
      border-radius: 10px;
      color: white;
      border:none;
      margin-left: 120px;
      margin-top: 95px;
    
      
   }


   }

   @media (max-width: 900px) {
    width: 90%;
    height: 507px;
    margin: auto;
    font-size: 13px;
          /* border:1px solid; */


    button{
      background-color: #126A10;
      width:126px;
      height:40px;
      border-radius: 10px;
      color: white;
      border:none;
      
      
   }


   }


`
const Geo = styled.div`
   display: flex;
   justify-content: space-around;
   padding-top:50px;


   @media (max-width: 429px) {
    display: flex;
    flex-direction: column;
    /* border:1px solid; */
    /* width: 360px; */
    height: 350px;

    }  
  
`

const PickUp = styled.div`
     p{
        color: #5a5757;
     }
       

     @media (max-width: 429px) {
      p{
        padding-left: 15px; 
        margin-top: 20px;
        /* border:1px solid; */
      }

     }

     @media (max-width: 900px) {
        p{
        padding-left: 15px; 
        margin-top: 20px;
        
      }
     }
`
const Form = styled.div`
    
    width: 390px;
    height: 243px;
    background-color:#f1efef;
    padding-left: 35px;
    
    

    #disclaimer{
      color:#D91616;
      font-size: 10px;
      margin-top: 30px;
   }
   
    label{
        margin-right:30px;
        margin-top: 20px;
        color:#2e2c2c;
        font-size:12px;
        font-family: "Poppins";

    }
    p{
        color: #126A10;
        font-size:14px;
        margin-top: 30px;

    }
    
    @media (max-width: 429px) {
        width: 350px;
        height: 310px;
        margin-top: 20px;
    }

    label{
        margin-right:20px;
        margin-top: 20px;
        color:#2e2c2c;
        font-size:12px;
        font-family: "Poppins";

    }

    p{
        color: #126A10;
        font-size:14px;
        margin-top: 30px;
        text-align: center;

    }

    @media (max-width: 900px) {

        width: 350px;
        height: 310px;
        margin-top: 20px;
    }

    label{
        margin-right:20px;
        margin-top: 20px;
        color:#2e2c2c;
        font-size:12px;
        font-family: "Poppins";

    }

    p{
        color: #126A10;
        font-size:14px;
        margin-top: 30px;
        text-align: center;

    }
    


`
const Form1 = styled.div`

`
