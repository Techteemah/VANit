import styled from "styled-components"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";





const DriversSignUp = ()=> {
    const navigate = useNavigate ()
    const [fullname, setname] = useState('');
    const [address, setaddress] = useState('');
    const [driverLicenceNumber, setdriverLicenceNumber] = useState('');
    const [licenceType, setlicenceType] = useState('');
    const [carType, setcarType] = useState('');
    const [email, setemail] = useState('');
    const [phone,setphone] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState
     ('');
    const [driverTerms, setDriverTerms] = useState(false)
    const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }  

    const formData = {

        name:fullname,
        address,
        driverLicenceNumber,
        licenceType,
        carType,
        email,
        phone,
        password,
        TandC: driverTerms,
    }
    console.log(formData);
    
    try{
        const response = await axios.post("https://vanish-backend.onrender.com/api/v1/users/driverSignup", formData

        )
        if (response.status === 201) {
            setSuccess ("User Signed Up Sucessfully")
            setTimeout (() =>{
                navigate ("/DriversSignIn")
            },2000)
        }
    }
    catch (error) {
        console.log(error.response);
        setError (error.response.data.message)
    };


  };

  const handlenameChange = (e) => {
    setname (e.target.value)
  }

  const handleaddressChange =  (e) =>{
    setaddress(e.target.value)
  }


  const handledriverLicenceNumberChange =  (e) =>{
    setdriverLicenceNumber(e.target.value)
  }

  const handlelicenceTypeChange =  (e) =>{
    setlicenceType(e.target.value)
  }

  const handlecarTypeChange =  (e) =>{
    setcarType(e.target.value)
  }

  const handleemailChange =  (e) =>{
    setemail(e.target.value)
  }

  const handlepasswordChange =  (e) =>{
    setpassword(e.target.value)
  }


  const handlephoneChange =  (e) =>{
    setphone(e.target.value)
  }

  const handleTandCChange =  (e) =>{
    setDriverTerms(!driverTerms)

  }
   
    
    return(
        <Carrier>
            <Signwrapper>
                <Signtitle>
                    <h2>
                        <span>Sign </span>
                        <span>Up</span>
                    </h2>
                    
                    <hr></hr>
                    <p>It is not long before you embark on this journey!</p>

                </Signtitle>
                <form onSubmit={handleSubmit}> 
                    {error}

                    {error && <ErrorText>{error}</ErrorText>}
                    {success && <SuccessText>{success}</SuccessText>}

                    <Label>Full Name</Label>
                    <Input type="text"
                    placeholder = "Input your name"
                    // name = "Ameenah"
                    value = {fullname}
                    onChange={handlenameChange} />

                    <Label>Address</Label>
                    <Input type="text"
                    placeholder = "city"
                    name = "Address"
                    value = {address}
                    onChange={handleaddressChange}
                    />

                    <Label>Driver's License Number</Label>
                    <Input type="text"
                    name = "536267235356"
                    value = {driverLicenceNumber}
                    onChange={handledriverLicenceNumberChange}
                    placeholder = "536267235356"/>

                    {/* <Label>Type of Vehicle</Label>
                    <Input type="text"
                    name = "must be a van"
                    value = {carType}
                    onChange={handlecarTypeChange}
                    placeholder = "must be a van"/> */}


                    <Label>License Type</Label>
                    <select className="select"onChange={handlelicenceTypeChange}    name="service option" value={licenceType}>
                    <option value= "Temporary"> Temporary</option> 
                    <option value= "Permanent">Permanent</option>
                    </select>
                    

                    <Label>Type of Vehicle</Label>
                    <select className="select" name="service option" onChange={handlecarTypeChange}>
                    <option value= "small"> Small Van</option> 
                    <option value= "Medium">Medium Van</option>
                    <option value= "Large">Large Van</option>
                    </select>
                    

                    <Label>Email Address</Label>
                    <Input type="text"
                    name = "name@email.com"
                    value = {email}
                    onChange={handleemailChange}
                    placeholder = "name@email.com"/>
                    
                
                    <Label>Phone Number</Label>
                    <Input 
                    type = "phone number" name = "phone number"
                    value={phone}
                    onChange={handlephoneChange}
                    placeholder = "Enter Phone Number"/>
                
                    <Label>Password</Label>
                    <Input type="password"
                    name = "password"
                    value = {password}
                    onChange={handlepasswordChange}
                    placeholder = "Enter Password"/>
                    
                    
                </form>
                {error && <ErrorText>{error}</ErrorText>}
               
                <Box>
                    <input type="checkbox" id="checkbox"onChange = {handleTandCChange}
                    /> 
                    <span>I have read and agreed with the 
                        <Link className="link" to ="/DriverTerms" >
                        <span className="red"> Terms of Service </span> </Link> and 
                        <br/> our Privacy Policy</span>.
                    
                   
                </Box>

                <Button onClick={handleSubmit}>
                    Continue

                </Button> 

                <p>
                    Already have an account? <Link to={"/DriversSignIn"} style={{ textDecoration: 'none' }}> <span>Sign In</span></Link>
                </p>
            </Signwrapper>
        </Carrier>

    )

}   
export default DriversSignUp

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
        text-align: center;
    }
    span{
        color:  #126A10;
    }
    
    
    .select{
    border-radius: 10px;
    height: 45px;
    width: 90%;
    border: 1px solid #D7C525;
    font-size: 15px;
    margin: 10px 0;
    margin-left: 12px;
    padding: 10px;

}

`

const Signtitle = styled.div`
    
     text-align: center;
     margin-bottom: 17px;
     font-family: Poppins;
     /* line-height: 8px; */

     span:first-child{
        color: black;
     }

     span:last-child{
        color: #126A10;
     }

   
    p{
        text-align: center;
        font-size: 12px;
        font-family: Poppins;
        margin-top: 15px;

       
}


@media (max-width: 400px){
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height: 15px;
            
        }
        @media (max-width: 900px) {
       max-width: 100%;
       align-items: center;
       text-align: center;

        }

    
    
`

const Input = styled.input`
width: 90%;
padding: 10px;
margin: 10px 0;
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


const Box = styled.div`
display: flex;
gap: 4px;
margin-left: 17px;


#checkbox{
    
width: 12px;
height: 12px;
color: white;
background-color: white;
border-radius:4px;
border: 2px solid #126A10;
margin-top: 2px;

}
span{
    margin-top: 2px;
    font-size: 14px;
    text-align: center;
    color: black;

}
.red{
    color: #D91616;
}

.link{
    text-decoration: none;

}

`
const Button = styled.button`
    width: 94%;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid #126A10;
    margin: 10px 0;
    height: 40px;
    background-color: #126A10;
    color: white;
    cursor: pointer;
    margin-left: 11px;



    
`

// const Select = styled.div`
//     border-radius: 10px;
//     height: 40px;
//     width: 300px;
//     border-color: #F8F8F8;
//     background-color: #f3f0f0 ; 
//     border: none;
//     padding-left:15px;

// `
const ErrorText = styled.p`
    color: red;
    font-size: 18px;




`

const SuccessText = styled.p`
    color: green;
    font-size: 20px;
    font-weight: 700px;

`
