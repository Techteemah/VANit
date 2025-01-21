import smiley from "../assets/Quote.png"
import styled from "styled-components"
import bg from "../assets/bg.jpg"
import { Link } from "react-router-dom"



const Congratulatons = () =>{
  return(
    <Background>
        <img src="" alt="" />
    <Contain>
      <Child>
         <h3>
            Congratulations!!!
         </h3>
         <img src={smiley} alt="" />
         <p>Your payment Is Successful</p>
         <p>Thank You</p>
         <Link to="/" style={{textDecoration: 'none'}}><h5>Go Back Home</h5> </Link>
    
         </Child>
    </Contain>
    </Background>

  )

}

export default Congratulatons



const Background = styled.div`
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-image:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${bg});

`
const Contain = styled.div`
background-color: white;
width: 600px;
height: 400px;
margin: auto;
margin-top: 200px;
border-radius: 20px;

h3{
  color: #126A10;
  text-align:center;
  padding: 30px;
}

p{
  color: black;
  text-align: center;


}
.price{
  font-size:30px;
  font-weight: 900;
  text-align: center;
  color: #126A10;

}

h5{
      color: #126A10;
      margin-top: 20px;
      text-align:center;
      font-weight:600;
    
      
   }
   img{
    margin-left: 235px;
   }
`

const Child = styled.div`


`