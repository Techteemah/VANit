import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Cookies from "js-cookie"
import axios from "axios";

// import { useNavigate } from "react-router-dom";


const Movement = () => {
        const navigate = useNavigate ()
        const userId = Cookies.get ("userID")
        const [serviceType, setServiceType] = useState('');
        const [pickUpDate, setpickUpDate] = useState('');
        const [pickUpLocation, setpickUpLocation] = useState('');
        const [pickUpZone, setpickUpZone] = useState ('')
        const [dropOffLocation, setdropOffLocation] = useState ('')
        const [dropOffZone, setdropOffZone] = useState ('')
        const [typeOfVehicle, settypeOfVehicle] = useState ('')
        const [randomNumber, setrandomNumber] = useState ('') 
        const amount = Math.floor(Math.random () * 300000)+ 100000
        console.log(amount);
        Cookies.set("amount", amount) 
        const [error, setError] = useState ('')
        const handleSubmit = async (e) => {
            e.preventDefault ();

            if (
                !serviceType ||
                !pickUpDate ||
                !pickUpLocation ||
                !pickUpZone ||
                !dropOffLocation ||
                !dropOffZone ||
                ! typeOfVehicle) {setError ('All input fields are required')
                 return;   
                }

            const formData = {
                serviceType,
                pickUpDate,
                pickUpLocation,
                pickUpZone,
                dropOffLocation,
                dropOffZone,
                typeOfVehicle,
            }
            console.log(formData);
            console.log(userId);
            

            try{
                const response = await axios.post(`https://vanish-backend.onrender.com/api/v1/movements/location/${userId}`,
                    formData
                )
                 setTimeout (() =>{
                    if(response.status == 201){
                        navigate ("/orderassessment")

                    }

                },2000)
                
            }
            catch (error) {
                console.log(error.response);
                setError (error.response.data.message)
            };
        };

        const handleserviceTypeChange =(e) =>{
            setServiceType (e.target.value)
            
        }

        const handlepickUpDateChange = (e) =>{
            setpickUpDate (e.target.value)
        }

        const handlepickUpLocationChange = (e) =>{
            setpickUpLocation (e.target.value)
        }

        const handlepickUpZoneChange = (e) => {
            setpickUpZone (e.target.value)

        }

        const handledropOffLocationChange = (e) => {
            setdropOffLocation (e.target.value)
        }

        const handledropOffZoneChange = (e) => {
            setdropOffZone (e.target.value)
        }

        const handletypeOfVehicle = (e) => {
            settypeOfVehicle (e.target.value)
        }
        
    
return(

    <Main>
        <Head>
            <h3>Movement Details</h3>
        </Head>

        <p id="move">Move from A to Z</p>

        <Form onSubmit={handleSubmit}>
         {error && <ErrorText>{error}</ErrorText>}
            <p id="para">Enter the following details</p>
         <Contain>
            {/* <label className="move-label" htmlFor="" >Service Type</label> <br /> <br />
            <select className="select" name="service option">
            <option value= "Residence"> HOME</option> 
            <option value= "Warehouse">WAREHOUSE</option>
            <option value = "Office"> OFFICE</option>
            </select> */}


            <label className="move-label" htmlFor="" >Service Type</label> <br /> <br /> 
            <select className="select" name="service option" value={serviceType} onChange={handleserviceTypeChange}>
            <option value= "HOME"> HOME</option> 
            <option value= "WAREHOUSE">WAREHOUSE</option>
            <option value = "OFFICE"> OFFICE</option>
            </select> <br /> <br />
            <label className="move-label" htmlFor="">Pick-Up Date</label><br /> <br />
            <input className="move-input" type="date" placeholder="29/10/2024" value={pickUpDate} onChange={handlepickUpDateChange} autoComplete/><br /> <br />

            <label className="move-label" htmlFor="">Pick-Up Address</label> <br /> <br />
            <input className="move-input" type="text" placeholder="1, Muba Abiru street, Ikorodu" value={pickUpLocation} onChange={handlepickUpLocationChange}autoComplete /> <br /> <br />

            <label className="move-label" htmlFor="">Pick-Up Zone</label><br /> <br />
            <input className="move-input" type="text" placeholder="Lagos" value={pickUpZone} onChange={handlepickUpZoneChange}/> <br /> <br />

            <label className="move-label" htmlFor="">Drop-Off Address</label><br /> <br />
            <input className="move-input" type="text" placeholder="10,Shagamu street, Igando" value={dropOffLocation} onChange={handledropOffLocationChange}/> <br /> <br /> 

            <label className="move-label" htmlFor="">Drop-Off Zone</label> <br /> <br />
            <input className="move-input" type="text" placeholder="Lagos" value={dropOffZone} onChange={handledropOffZoneChange} /> <br /> <br />

            <label>Type of Vehicle</label>
                    <select className="select" name="type of Vehicle" value={typeOfVehicle} onChange={handletypeOfVehicle} >
                    <option value= "Small Vam"> Small Van</option> 
                    <option value= "Medium Van">Medium Van</option>
                    <option value= "Large Van">Large Van</option>
                    </select>
            <button onClick={handleSubmit}> Submit </button> 
            </Contain>
        </Form>



    </Main>
)

}

export default Movement

const Main = styled.div`
    height: 1000px;
    background-color: #FAFAFA;
    #move{
        text-align:center;
        font-style: italic;
        color: #126a10;
    }

    @media (max-width: 429px) {
        height: 900px;
    background-color: #FAFAFA;
    #move{
        text-align:center;
        font-style: italic;
        color: #126a10;
    }


    }

    @media (max-width: 900px) {
        height: 900px;
    background-color: #FAFAFA;
    #move{
        text-align:center;
        font-style: italic;
        color: #126a10;
    }

    }

`
const Head = styled.div`
    height: 80px;
    /* border: 1px solid #126a10; */
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

    h3{
        text-align: center;
        padding-top: 35px;
        display:flex;
        justify-content: center;
        
    }

    @media (max-width: 429px) {
        height: 80px;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

    h3{
        text-align: center;
        padding-top: 35px;
        display:flex;
        justify-content: center;
        
    }

    }

    @media (max-width: 900px) {

        height: 80px;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

    h3{
        text-align: center;
        padding-top: 35px;
        display:flex;
        justify-content: center;
        
    }
    }

`

const Form = styled.div`
    
      height: 850px;
      width: 350px;
      /* border: 1px solid; */
      margin: auto;
      margin-top: 35px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
     border-radius: 10px;
     background-color: white;
     
    

     #para{

     text-align: center;
     padding-top: 20px;
     font-size: 12px;
     color: #126a10;
     }

     @media (max-width: 429px) {
        height: 750px;
      width: 350px;
      /* border: 1px solid; */
      margin: auto;
      margin-top: 35px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
     border-radius: 10px;
     background-color: white;
     
    

     #para{

     text-align: center;
     padding-top: 20px;
     font-size: 12px;
     color: #126a10;
     }

     }

     @media (max-width: 900px) {

        height: 750px;
      width: 350px;
      /* border: 1px solid; */
      margin: auto;
      margin-top: 35px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
     border-radius: 10px;
     background-color: white;
     
    

     #para{

     text-align: center;
     padding-top: 20px;
     font-size: 12px;
     color: #126a10;
     }
     }
     
     
`
const Contain = styled.div`
padding-left: 30px;

.move-label{
        color: #126a10;
        font-size: 12px;
        font-weight: 700
     }


.move-input{
    border-radius: 10px;
    height: 40px;
    width: 300px;
    border-color: #F8F8F8;
    background-color: #f3f0f0 ; 
    border: none;
    padding-left:15px;
    margin-top: -10px;
}

.select{
    border-radius: 10px;
    height: 40px;
    width: 300px;
    border-color: #F8F8F8;
    background-color: #f3f0f0 ; 
    border: none;
    padding-left:15px;
}

button{
      background-color: #126A10;
      width:200px;
      height:40px;
      border-radius: 15px;
      color: white;
      border:none;
      margin-left: 50px;
      margin-top: 20px;
    
      
   }

   @media (max-width: 429px) {
    padding-left: 30px;

.move-label{
        color: #126a10;
        font-size: 12px;
     }


.move-input{
    border-radius: 10px;
    height: 40px;
    width: 300px;
    border-color: #F8F8F8;
    background-color: #f3f0f0 ; 
    border: none;
    padding-left:15px;
}

button{
      background-color: #126A10;
      width:200px;
      height:40px;
      border-radius: 15px;
      color: white;
      border:none;
      margin-left: 50px;
      margin-bottom: 20px;
    
      
   }


   }

   @media (max-width: 900px) {

    padding-left: 30px;

.move-label{
        color: #126a10;
        font-size: 12px;
     }


.move-input{
    border-radius: 10px;
    height: 40px;
    width: 300px;
    border-color: #F8F8F8;
    background-color: #f3f0f0 ; 
    border: none;
    padding-left:15px;
}

button{
      background-color: #126A10;
      width:200px;
      height:40px;
      border-radius: 15px;
      color: white;
      border:none;
      margin-left: 50px;
      margin-top: 20px;
    
      
   }


   }

`

const ErrorText = styled.p`
    color: red;
    font-size: 18px;

    `