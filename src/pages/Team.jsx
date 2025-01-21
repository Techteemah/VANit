import React from 'react'
import TeamCard from '../Component/TeamCard.jsx'
import styled from 'styled-components'
// import Becca from "../assets/Becca.jpeg"



const Team = () => {
  return (
    <Container>

        <div className="text">
            <h2>Our <span>Team</span></h2>
            <p>
                Meet the fantastic team behind the app, starting from the scratch to bring this real-life solution to us.
                <br />Every seconds spent was to make sure you got every satisafction, and we have all brought our A game to make this brand <br/>
                a very user-friendly one for all.
            </p>
        </div>


        <div className='cardFlex'>
        <TeamCard image='/headshotAvatar.jpeg' 
        name='Samuel Okolie' 
        jobDescription='FullStack Developer'
         about1='An objective driven passionate developer ' 
         about2='with proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://google.com'
         x='https://google.com'
         www='https://google.com'
         git= 'https://google.com'/>



<TeamCard image='/Becca.jpeg' 
         name='Olufunmi Oyewole' 
         jobDescription='FullStack Developer'
         about1='An objective driven passionate developer ' 
         about2='with proficiency in the MERN stack' 
         about3='Excellent team player with a commitment' 
         about4='to continuous learning and personal growth.'
         insta= 'https://www.instagram.com/becca_dah_diva/profilecard/?igsh=bmhhZHprN3Jsd242 target= "_blank"'
         x='https://google.com'
         www='https://www.linkedin.com/in/oyewole-olufunmi' 
         git='https://github.com/Becca-Hamzy/Becca-Hamzy' />



<TeamCard image='/FatimahB.png' 
        name='Fatimah Adeniyi' 
        jobDescription='FullStack Developer'
         about1='A developer proficient in the MERN stack' 
         about2='Dedicated to building web solutions. Passionate' 
         about3=" about leveraging technology to optimize ," 
         about4=" processes deliver impactful business results."
         insta='https://www.instagram.com/techsupportwithteemah/profilecard/?igsh=MWd6Znhtam00bnc1Zg=='
         x='https://x.com/techteemah?s=21&t=SPbPMgEPNU1NC-8P9LusQg'
         www='www.linkedin.com/in/fatimahadeniyi'
         git='https://github.com/Techteemah'/>
        



        <TeamCard image='/Christian.jpg' 
        name='Christian Daniels' 
        jobDescription='FullStack Developer'

        //  about1='An objective driven passionate developer with' 
        //  about2='proficiency in the MERN stack and UI/UX' 

         about1='An objective driven passionate developer ' 
         about2='with proficiency in the MERN stack and UI/UX' 
         about3='Always eager to embrace new challenges' 
         about4='and expand his skill set'
         insta='https://www.instagram.com/kris10dani/profilecard/?igsh=eTA4Y3hkcnBmbzA1'
         x='https://x.com/kris10dani?s=11&t=SPbPMgEPNU1NC-8P9LusQg'
         www='https://my-portfolio-gold-eight-38.vercel.app/'
         git='https://github.com/kingkrisman'/>




<TeamCard image='/Zinnybliss.jpeg' 
        name='Ezinne Chiwueze' 
        jobDescription='Full-stack Developer'
         about1='An enthusiastic and passion-driven developer ' 
         about2=' with proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://www.instagram.com/zinnybliss/?hl=en'
         x='https://x.com/Misszinnybliss'
         www='https://google.com'
         git='https://github.com/Zinnybliss'/>




<TeamCard image='/Ezytech.jpeg' 
        name='Ahmed Adebayo' 
        jobDescription='FullStack Developer'
         about1='An objective driven passionate developer ' 
         about2='with proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://google.com'
         x='https://google.com'
         www='https://google.com'
         git='https://google.com'/>





<TeamCard image='/Aminah.jpg' 
        name='Ameenah' 
        jobDescription='FullStack Developer'
         about1='An objective driven passionate developer ' 
         about2='with proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://google.com'
         x='https://google.com'
         www='https://google.com'
         git='https://google.com'/>
        </div>
    </Container>
  )
}

export default Team
const Container = styled.div`
background-color: #fafafa;
    
    .text{
    text-align: center;
   padding-top: 80px;

   p{
    font-size: 19px;
    padding: 0px 5px;
    
   }

    h2{
        font-size: 35px;
        margin-bottom: 30px;

        span{
            color: #126A10;
            font-weight: bold;
        }
    }
}

.cardFlex{
    padding: 40px 0px 40px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap;

}
`
