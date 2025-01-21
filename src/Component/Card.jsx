import styled from "styled-components"

const Card= ({img, text, p, review, motor}) =>{
return(
    
    <Container>
        <img src= {img} alt="" />

        <FirstContainer>
        
        <h4>{text}</h4>


            <p>{p}</p>
            <p>{review}</p>

        </FirstContainer>
    

    <img src= {motor}alt="" />

    
    </Container>
)

}

export default Card

const Container = styled.div`
display: flex;
flex-wrap : wrap;
gap: 20px;
/* border: 1px solid; */



img{

    width: 50px;
    height: 70px;
}

`


const FirstContainer = styled.div`

display: flex;
flex-direction: column;
`
const SecondContainer = styled.div`

display: flex;
flex-direction: column;
`

