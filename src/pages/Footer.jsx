import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container>
        <div className='footer-text'>
            <div>
                <img src="/smallCar.png" alt="" />
                <h2>VANit</h2>
                <p>We are here to support you every <br /> step of the way</p>
            </div>
            <div>
                <h4>Support</h4>
                <p>Getting Started</p>
                <p>FAQs</p>
                <p>Help Articles</p>
            </div>
            <div>
                <h4>Legal</h4>
               <Link to="/Terms" style={{ textDecoration: 'none' }}> <p className='terms'>Terms and Conditions </p> </Link>
            </div>
            <div>
                <h4>Services</h4>
                <p>Shipment Tracking</p>
                <p>Route Optimization</p>
                <p>Inventory Management</p>
                <p>Freight Management</p>
                <p>Real-Time Analytics</p>
            </div>
        </div>
        <hr />
        <div className='footer-socials'>
            <div>
                <span><img src="/facebook.png" alt="" />
                <img className='youtube' src="/youtube.png" alt="" /></span>
            </div>
            <div><p>INFINITY DEVS 2024 @ All RIghts Reserved</p></div>
        </div>

    </Container>
  )
}

export default Footer

const Container = styled.div`
background-color: black;
color: white;


p{
    font-size: 15px;
    margin:10px 0px 10px 0px;
    text-decoration: none;
    color: white;
}
.terms{
text-decoration:none;
outline:none;
color:white;
}


.footer-text{
    display: flex;
    justify-content: space-evenly;
    gap: 0px;
    padding: 60px 30px 0px 30px;
    margin-bottom: 30px;
    flex-wrap: wrap;
     
}
hr{
        width:80%px;
        margin:auto;
    }

.footer-socials{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-top: 10px;
    width:80%;
    margin: auto;
    p{
        font-size: 13px;
    }

    .youtube{
        width: 40px;
    }
}
@media (max-width: 420px) {
    .footer-text{
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 40px;
        font-size: 30px;
    }
    .footer-socials{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-top: 10px;
    width:90%;
    margin: auto;
    font-size: 12px;
    
    img{
        width: 20px;
    }
    .youtube{
        width: 20px;
    }
}

}
    
`