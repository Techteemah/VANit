import styled from "styled-components"
import React, { useState } from 'react';
import Google from "../assets/flat-color-icons_google.png"
import Apple from "../assets/devicon_apple.png"
import { Link,  } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

    const DriversSignIn = ()=>{
    const navigate = useNavigate ()
    const [name, setname] = useState('');
    const [email,setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }
  
      
      const formData = {
        name,
        email,
        password
      }

      console.log(formData);
      
      try{
        const response = await axios.post("https://vanish-backend.onrender.com/api/v1/users/driverSignin", formData)
        console.log(response);
        Cookies.set ("userID", response.data._id)
        
        if (response.data.success) {
            
            navigate("/driversdashboard")
        }
        
      } catch (error) {

      }
    };

    const handlenameChange = (e) => {
        setname(e.target.value)
    }

    const handleemailChange = (e) => {
        setemail (e.target.value)
    }
    const handlepasswordChange = (e) => {
        setpassword (e.target.value)
    }
    


    return(
        <Carrier>
            <Signwrapper>
                <Signtitle>
                    <h2>
                        <span>Sign </span>
                        <span>In</span>
                    </h2>
                    <hr></hr>
                    
                    <p>Welcome Back</p>
                    
                </Signtitle>

                <form onSubmit={handleSubmit}>

                    <Label>Name</Label>
                    <Input type="text"
                    name = "name"
                    value = {name}
                    onChange={handlenameChange}
                    placeholder = "Name"/>


                    <Label>Email Address</Label>
                    <Input type="email"
                    name = "emailaddress"
                    value = {email}
                    onChange={handleemailChange}
                    placeholder = "name@email.com"/>


                    <Label>Password</Label>
                    <Input type="password"
                    name = "password"
                    value = {password}
                    onChange={handlepasswordChange}
                    placeholder = "Enter Password"/>

                    


                </form>
                <p>Forgot Password?</p>

                <Button onClick = {handleSubmit}>
                    Login
                </Button>

                <p className="black">or login with</p>

                <Button className="whitebtn">
                    <img src={Google} alt=""/>
                    <span className="blk">Sign in with Google</span>
                </Button>

                <Button className="blackbtn">
                    <img src={Apple} alt=""/>
                    <span className="wtn">Sign in with Apple</span>
                </Button>

                <p className="bgs">
                    Don't have an account?<Link to ="/driverssignup" style={{ textDecoration: 'none' }}> <span>Sign Up</span>
                    </Link>
                </p>




            </Signwrapper>
        </Carrier>
    )
}

export default DriversSignIn

const Carrier = styled.div`
display: flex;
height: inherit;
/* background-color: #126A10; */
justify-content: center;
align-items: center;
    
`
const Signwrapper = styled.div`
    background-color: white;
    width: 100%;
    max-width:400px;
    border-radius: 10px;
    padding: 25px;
    border: 1px solid #F8F8F8 ;

    p{
        font-size: 15px;
        text-align: right;
        color: #407BFF;
    }

    .black{
        color: black;
        text-align: center;
    }

    .bgs{
        font-size: 15px;
        text-align: center;
        color: black;
    }
    span{
        color:  #126A10;
    }
    

    .whitebtn{
        width: 87%;
        height: 48px;
        color: black;
        background-color: white;
        border: 1px solid black;
        margin-left: 23px;
        display: flex;
        align-items: center;
        justify-content:center;
        gap: 10px;
        font-weight: 200;

    }
    .wtn{
        color: #F8F8F8;
        
    }

    .blackbtn{
        width: 87%;
        height: 48px;
        color: white;
        background-color: black;
        border: 1px solid black;
        margin-left: 23px;
        display: flex;
        align-items: center;
        justify-content:center;
        gap: 10px;
    }
    .blk{
        color: #101010;
    }

    
    


`

const Signtitle = styled.div`
    
     text-align: center;
     color: #126A10;
     /* margin-bottom: 8px; */
     font-family: Poppins;
     /* border-bottom: 1px solid #126A10; */
     /* line-height: 8px; */

     span:first-child{
        color: black;
     }

     span:last-child{
        color: #126A10;
        
     }

     
     
     

 
    p{
        text-align: center;
        font-size: 15px;
        font-family: Poppins;
        color: black;
    }

    

 
    
`

const Input = styled.input`
width: 90%;
padding: 10px;
margin: 4px 0;
border: 1px solid #D7C525;
margin-left: 12px;
/* border: 1px solid #126A10; */
/* box-sizing: border-box; */

&::placeholder{
    color: #F8F8F8;
    
}


border-radius: 10px;
font-size: 15px;
/* display: block; */

&:focus {
    outline: none;
}

    
`

const Label = styled.label`
    color: #126A10;
    font-family: Poppins;
    display: block;
    margin-left: 12px;
    
`

const Button = styled.button`
     width: 95%;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid #126A10;
    margin: 5px 0;
    height: 43px;
    background-color: #126A10;
    color: white;
    cursor: pointer;
    margin-left: 8px;

    
`
