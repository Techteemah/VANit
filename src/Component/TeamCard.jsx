import React from 'react'
import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
const TeamCard = (props) => {
  return (
    <Container>
       
       <div className='cardFlex'>
        <div className='card'>
               <div className='pictureFrame'>
                    <img src={props.image} alt="" />
               </div>

                <h2>{props.name}</h2>
                <h4>{props.jobDescription}</h4>
                <p>{props.about1}</p>
                <p>{props.about2}</p>
                <p>{props.about3}</p>
                <p>{props.about4}</p>
                <div>
                    <a href={props.insta}><FaInstagram /></a>
                    <a href={props.x}><FaXTwitter /></a>
                    <a href={props.www}><TbWorldWww /></a>
                    <a href={props.git}><IoLogoGithub /></a>
                </div>
        </div>
       </div>
    </Container>
  )
}

export default TeamCard
const Container = styled.div`
background-color: #fafafa;
p{
    line-height: 0;
    
}
a{
    margin-right: 5px;
    color: black;
}


.card{
    width: 260px;
    height: 450px;
    margin: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;



    h2{
            font-size: 17px;
            color: #126A10;
            margin-bottom: 5px;
            margin-top:5px;
        }
        
    h4{
            font-size: 12px;
            margin-bottom: 5px;
        }
        p{
            font-size: 11px;
        }


    .pictureFrame{
        width: 100%;
        height: 230px;
        /* overflow: hidden; */
        background-color: grey;
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        
    }
}

`