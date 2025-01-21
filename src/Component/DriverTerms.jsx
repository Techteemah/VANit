import styled from "styled-components"
const DriverTerms = () => {

    return(
  
      <Content id="terms">
               <h2>TERMS OF SERVICE</h2>
              <h5> 1. DEFINITIONS </h5>
<p>For the purposes of these Terms and Conditions, the following definitions apply: <br />

- Service Provider refers to VANit, a logistics company.
- Van Owner refers to the individual or entity owning the van.
- Services refers to the transportation and logistics services provided by the Service Provider.
 </p>

<h5>2. ACCEPTANCE OF TERMS </h5>
<p>By providing Services to the Service Provider, the Van Owner acknowledges that they have read, understood, and agreed to be bound by these Terms of Service. </p>

<h5>3. USE OF VAN </h5>
<p>- The Van Owner agrees to provide a safe, roadworthy, and properly maintained van for the provision of Services.
- The Van Owner shall ensure that the van is properly insured and licensed.
- The Van Owner shall be responsible for all costs associated with the maintenance, repair, and operation of the van.</p>

<h5>4. PROVISION OF SERVICES </h5>
<p>- The Service Provider (VANit) shall provide the Van Owner with access to its logistics platform.
- The Van Owner shall provide transportation services to the Service Provider's clients.
- The Van Owner shall comply with all applicable laws, regulations, and industry standards. </p>

  <h5>  5. PAYMENT TERMS </h5>
<p>- The Service Provider (VANit) shall pay the Van Owner for Services rendered.
- Payment terms shall be as agreed upon between the parties.</p>


<h5> 6. LIABILITY </h5>
<p>- The Van Owner shall be liable for any damage or loss caused to the Service Provider's clients' goods.
- The Van Owner shall be liable for any accidents or incidents caused while providing Services. </p>


<h5> 7.  INDEMNIFICATION </h5>
<p>The Van Owner shall indemnify and hold harmless the Service Provider (VANit) against any claims, damages, or expenses arising from the provision of Services.</p>

<h5>8. TERMINATION </h5>
<p>This Agreement may be terminated by either party under the following conditions:
- Breach of Agreement: VANit reserves the right to terminate this Agreement upon seven (7) days' written notice.
- Voluntary Termination: Either party may terminate this Agreement upon fourteen (14) days' written notice.
- Upon termination, the Van Owner shall return all property belonging to the Service Provider. </p>
<h5> 9. GOVERNING LAW </h5>
<p>- This Agreement shall be governed by and construed in accordance with the laws of [Lagos State/Nigeria law].</p>


<h5>10. 10. ENTIRE AGREEMENT </h5>
<p>- This Agreement constitutes the entire agreement between the parties and supersedes all prior negotiations, understandings, and agreements. </p>


<p>By clicking “agree”, the parties acknowledge that they have read, understood, and agreed to be bound by these Terms of Service. </p>

<button className="btn">Cancel</button>
<button id="btn2">Agree</button>

 </Content>

    )
}

export default DriverTerms


const Content = styled.div`
    
    font-family: "Poppins", sans-serif;
    line-height: 150%;
    padding: 30px;
    text-align: justify;

    h2{
        color: #126A10;
        font-size: 24px;

    }
    p{
        font-size: 13px;

    }
 
  #btn2{
        margin-left: 10px;
        width: 80px;
        height: 40px;
        background-color:#126A10;
        color: white;
        border-radius: 10px;
        border: none;
  }

  .btn{
    width: 80px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #126A10 ;
    color: #126A10 ;
    background-color: transparent;
    margin-left: 1100px;



  }

  @media (max-width: 429px) {
    font-family: "Poppins", sans-serif;
    line-height: 150%;
    padding: 30px;
    text-align: justify;

    h2{
        color: #126A10;
        font-size: 24px;

    }
    p{
        font-size: 13px;

    }
 
  #btn2{
        margin-left: 0px;
        width: 80px;
        height: 40px;
        background-color:#126A10;
        color: white;
        border-radius: 10px;
        border: none;
  }

  .btn{
    width: 80px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #126A10 ;
    color: #126A10 ;
    background-color: transparent;
    margin-left: 0px;



  }

}

@media (max-width: 900px) {

font-family: "Poppins", sans-serif;
  line-height: 150%;
  padding: 30px;
  text-align: justify;

  h2{
      color: #126A10;
      font-size: 24px;

  }
  p{
      font-size: 13px;

  }

#btn2{
      margin-left: 0px;
      width: 80px;
      height: 40px;
      background-color:#126A10;
      color: white;
      border-radius: 10px;
      border: none;
}

.btn{
  width: 80px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #126A10 ;
  color: #126A10 ;
  background-color: transparent;
  margin-left: 0px;



}

}


`

