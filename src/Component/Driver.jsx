import map from "../../public/mapimg.jpg"
import styled from "styled-components"
import car from "../../public/whitevan.png"
// import driver from "../../public/man.png"
import ebuka from "../assets/svg/ebukacr.jpg"
import kris from "../assets/svg/kriscr.jpg"
import garba from "../assets/svg/garbacr.jpg"
import hamed from "../assets/svg/Hamedcr.jpg"
import CardOne from "./Card"
import bg from "../assets/bg.jpg"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"



const Driver = () => {

    useEffect( ()=>{
        const  response = fetch("https://vanish-backend.onrender.com/api/v1/users/get-all-drivers")
        .then(data => data.json())
        .then(data => console.log(data)
        )
        

    },[])
   
    


return(
    <Background>
        <img src="" alt="" />
    <Order>
    <Map>
   <img src= {map} alt="" />
   </Map>
   <h4>Drivers Found</h4>
   <p>Waiting for driver to comfirm the order</p>
   <Row>
   {/* <Link to="/OrderAssessment" style={{ textDecoration: 'none' }}><CardOne className = "card1" img ={kris} alt ="" text = "Kris Daniel" p="100Metres (10mins away)" review= "Toyota Hiace (Large Van)" motor = {car} /> </Link>
   <Link to="/OrderAssessment" style={{ textDecoration: 'none' }}> <CardOne className = "card1" img ={hamed} alt ="" text = "Hamed Adebayo" p="20Metres (2mins away)" review= "Toyota Hiace (Small Van)" motor = {car} /> </Link>
   </Row>
   <Row>
   <Link to="/OrderAssessment" style={{ textDecoration: 'none' }}><CardOne className = "card1" img ={garba} alt ="" text = "Ahmad Garba" p="50Metres (5mins away)" review= "Hyundai HD 36L(Medium)" motor = {car} /> </Link>
   <Link to="/OrderAssessment" style={{ textDecoration: 'none' }}> <CardOne className = "card1" 
   img ={ebuka} alt ="" text = "Ebuke Chinedu" p="150Metres (15mins away)" review= "Ford Econoline Cargo Van(Large)" motor = {car} /> </Link> */}
   </Row>
   <Link to="/OrderAssessment">
            <button>Submit</button> </Link>
   
   

   </Order>


   </Background>

)

}



export default Driver

const Background = styled.div`
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-image:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${bg});
`

const Order = styled.div`
    background-color: white;
/* border: 1px solid; */
width: 640px;
height: 700px;
margin: auto;
padding-left: 20px;
/* text-decoration: none */

p{
    font-size: 12px;
    color: black;
    /* text-decoration: none */
}

h4{
    color: black;
        /* text-decoration: none */


}
button{
      background-color: #126A10;
      width:200px;
      height:40px;
      border-radius: 15px;
      color: white;
      border:none;
      margin-left: 180px;
      margin-top: 20px;
    
      
   }
`
const Map = styled.div`
        padding-top: 10px;
    img{
        width: 600px;
        height: 300px;
    }

   
`
const Row = styled.div`
    
    display: flex;
    flex-direction : row;
    margin-top: 10px;
    margin-left: 5px;    
    

    button{
      background-color: #126A10;
      width:200px;
      height:40px;
      border-radius: 15px;
      color: white;
      border:none;
      margin-left: 90px;
      margin-top: 20px;
    
      
   }

   
`






