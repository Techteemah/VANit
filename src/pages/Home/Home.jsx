import { useState } from 'react'; 
import styled from 'styled-components';
// import Button from '../Component/Button.jsx'
import ServiceCard from '../../Component/ServicesCard.jsx'
import { IoTimeSharp } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { PiFolderOpen } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import Button from '../../Component/Button.jsx';
// import Driver from '../../Component/Driver.jsx';
import {Link} from "react-router-dom"
import smile from '../../assets/Quote.png'
import { Autocomplete } from '@react-google-maps/api'
import emailjs from 'emailjs-com';
import axios from 'axios'
import Driver from '../../Component/Driver.jsx';



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);







const Home = ()=>{




  const heroRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const fleetRef = useRef(null);
  const ratingsRef = useRef(null);
  const revolutionizeRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  
    // Services Cards Animation
    serviceCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "elastic.out(1, 0.75)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "restart none none none",
          },
        }
      );
    });
  
    // Fleet Safety Section Animation
    gsap.fromTo(
      fleetRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: fleetRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  
    // Ratings Section Animation
    gsap.fromTo(
      ratingsRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ratingsRef.current,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      }
    );
  
    // Revolutionize Section Animation
    gsap.fromTo(
      revolutionizeRef.current.querySelector(".text"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: revolutionizeRef.current,
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      revolutionizeRef.current.querySelector(".image"),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: revolutionizeRef.current,
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);




  const locations = [

    { id: 1, name: "Ajeromi-Ifelodun",r_dist:100 },
    { id: 2, name: "Alimosho",r_dist:80 },
    { id: 3, name: "Amuwo-Odofin" ,r_dist:50},
    { id: 4, name: "Apapa",r_dist:70 },
    { id: 5, name: "Badagry" ,r_dist:77},
    { id: 6, name: "Agege" ,r_dist:44},
    { id: 7, name: "Epe" ,r_dist:42},
    { id: 8, name: "Eti-Osa",r_dist:78 },
    { id: 9, name: "Ibeju-Lekki" ,r_dist:82},
    { id: 10, name: "Ifako-Ijaiye" ,r_dist:12},
    { id: 11, name: "Ikeja" ,r_dist:23},
    { id: 12, name: "Ikorodu" ,r_dist:45},
    { id: 13, name: "Kosofe",r_dist:56 },
    { id: 14, name: "Lagos Island",r_dist:21 },
    { id: 15, name: "Lagos Mainland" ,r_dist:22},
    { id: 16, name: "Mushin" ,r_dist:57},
    { id: 17, name: "Ojo" ,r_dist:10},
    { id: 18, name: "Oshodi-Isolo" ,r_dist:34},
    { id: 19, name: "Shomolu" ,r_dist:68},
    { id: 20, name: "Surulere" ,r_dist:69},
    { id: 21, name: "Agbado/Oke-Odo" ,r_dist:16},
    { id: 22, name: "Agboyi-Ketu",r_dist:19 },
    { id: 23, name: "Ayobo-Ipaja",r_dist:80 },
    { id: 24, name: "Bariga",r_dist:92 },
    { id: 25, name: "Eredo",r_dist:34 },
    { id: 26, name: "Egbe-Idimu",r_dist:45 },
    { id: 27, name: "Ejigbo" ,r_dist:40},
    { id: 28, name: "Igando-Ikotun" ,r_dist:27},
    { id: 29, name: "Ikosi-Isheri",r_dist:81 },
    { id: 30, name: "Isolo" ,r_dist:84},
    { id: 31, name: "Mosan-Okunola",r_dist:69 },
    { id: 32, name: "Odi Olowo-Ojuwoye",r_dist:25 },
    { id: 33, name: "Ojodu",r_dist:67 },
    { id: 34, name: "Ojokoro",r_dist:78 },
    { id: 35, name: "Onigbongbo",r_dist:34 },
    { id: 36, name: "Orile Agege",r_dist:89 },
    { id: 37, name: "Ikorodu North" ,r_dist:44},
    { id: 38, name: "Ikorodu West" ,r_dist:55},
    { id: 39, name: "Igbogbo-Baiyeku",r_dist:66 },
    { id: 40, name: "Ijede" ,r_dist:77},
    { id: 41, name: "Imota",r_dist:88 },
    { id: 42, name: "Agbowa-Ikosi" ,r_dist:33},
    { id: 43, name: "Ikosi-Ejinrin",r_dist:51 },
    { id: 44, name: "Badagry West",r_dist:71 },
    { id: 45, name: "Olorunda" ,r_dist:81},
    { id: 46, name: "Apapa-Iganmu",r_dist:91 },
    { id: 47, name: "Itire-Ikate",r_dist:65 },
    { id: 48, name: "Coker-Aguda",r_dist:78 },
    { id: 49, name: "Igando-Ikotun",r_dist:73 },
    { id: 50, name: "Ejigbo",r_dist:84 },
    { id: 51, name: "Isolo",r_dist:86 },
    { id: 52, name: "Ikosi-Isheri",r_dist:49 },
    { id: 53, name: "Agboyi-Ketu",r_dist:59 },
    { id: 54, name: "Yaba" ,r_dist:69},
  
  ];

  const ratePerKm = 2.5; // Fixed rate per kilometer

  // States
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [quote, setQuote] = useState(null);
  const [isQuoteVisible, setQuoteVisible] = useState(false);
  const [selectedOption, setSelectedOption] =useState(1)



    // Prevent the default form submission behavior
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
  };

  // Handlers
  const handleStartChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setStartLocation(value);
    setFilteredLocations(
      locations.filter((location) =>
        location.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleEndChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEndLocation(value);
    setFilteredLocations(
      locations.filter((location) =>
        location.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  const selectChange = (e)=>{
    e.preventDefault();
    setSelectedOption(e.target.value);
    console.log(setSelectedOption(e.target.value))
  }

  const calculateQuote = () => {
    
    if (!startLocation || !endLocation) {
      alert("Please select both locations.");
      return;
    }

    const distance = Math.abs(
      locations.find((loc) => loc.name === startLocation).r_dist - locations.find((loc) => loc.name === endLocation).r_dist
    );
    // console.log('dist:',distance);
    
    const cost = distance * ratePerKm * 1000;
    setQuote(`The estimated cost is 
     ₦${cost.toFixed(2)}`);
    setQuoteVisible(true);
  };



//*******************************************




//autocomplete logic




const [origin, setOrigin] = useState('');
const [destination, setDestination] = useState('');
const [originAutocomplete, setOriginAutocomplete] = useState(null);
const [destinationAutocomplete, setDestinationAutocomplete] = useState(null);
const [distance, setDistance] = useState('');
const [cost, setCost] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

const API_KEY ='AIzaSyBBhijfr7zpw3AG27yONYmX8t5P2VlNUNo' ;
const MULTIPLIER = 1213;

const onPlaceChanged = (type) => {
  const place = type === 'origin' ? originAutocomplete.getPlace() : destinationAutocomplete.getPlace();
  if (place && place.formatted_address) {
    type === 'origin' ? setOrigin(place.formatted_address) : setDestination(place.formatted_address);
  }
};
const calculateDistance = async () => {
      if (!origin || !destination) {
        setError('Please enter both origin and destination addresses.');
        return;
      }
  
      setLoading(true);
      setError('');
      setDistance('');
      setCost('');
  
      try {
        const response = await axios.get(`https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/distancematrix/json`, {
          params: {
            origins: origin,
            destinations: destination,
            key:API_KEY,
            units: 'metric',
            
          },
        });
      
  
        const result = response.data;
  
        if (result.rows[0].elements[0].status === 'OK') {
          const distanceInKm = result.rows[0].elements[0].distance.value / 1000;
          const calculatedCost = distanceInKm * MULTIPLIER;
  
          setDistance(`${distanceInKm.toFixed(2)} km`);
          setCost(`₦${calculatedCost.toFixed(2)}`);
        } else {
          setError('Could not find a route between the provided addresses.');
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching distance data.');
      } finally {
        setLoading(false);
      } 
    };







//************************************* */




  return(
   <>
    <Container>
    <div className="hero" ref={heroRef}>
             <div className='hero-text'>
                 <h1 className='bigcap'>
                     Effortless <br/>Logistic, Every<br/> Step of the Way
                 </h1>
                 <p>
                     Manage your shipments, track in real time, and <br />
                     get the best rates-all from one platform.
                 </p>
             </div>
             <div className = 'hero-form1'>
                 <h2>Move from A to Z</h2>
                 <p>Track your van every step of the way</p>
                 <hr/>

                 <form className='hq' onSubmit={handleSubmit}style={{position:"relative"}} >
                         <label className='off'>Pick Up Location</label> <br/>
                         <div className='input1 dropdown-container'>
                           <div>
                           <FaLocationDot size={25} /> 
                           </div>
                           

                           <Autocomplete onLoad={setOriginAutocomplete} onPlaceChanged={() => onPlaceChanged('origin')}>
                           <input    id='input1'className='input' type='text' value={origin} list='locations' onChange={(e) => setOrigin(e.target.value)} placeholder='pick up location'/>
                           </Autocomplete>

                           {/* <datalist  id="locations">
                              {filteredLocations.map((location) => (
                                <option key={location.id} value={location.name} />
                              ))}
                            </datalist> */}

                           
                          </div>
                         


                         <label className='off'>Drop Off Location</label> <br/>
                         <div className='input1 input2'>
                           <div>
                           <FaLocationDot size={25} /> 
                           </div>


                           <Autocomplete onLoad={setDestinationAutocomplete} onPlaceChanged={() => onPlaceChanged('destination')}>
                           <input id='input2' className='in' type='text' value={destination} onChange={(e) => setDestination(e.target.value)} list="locations" placeholder='drop off location'/>
                           </Autocomplete>
                          

                           {/* <datalist id="locations">
                              {filteredLocations.map((location) => (
                                <option key={location.id} value={location.name} />
                              ))}
                            </datalist> */}
                                
                         </div>

                       <div className='form-cards'>
                             <div>
                             <IoIosSpeedometer size={25} color='#126A10 '/>
                                 <p color='black'>Schedule</p>
                             </div>
                             <div>
                             <FaShippingFast size={25} color='#126A10 '/>
                                 <p>Instant</p>
                             </div>
                            
                         </div>


                         <label for='services'>Services</label> <br/>
                         <div className='input1'>
                         <select name="services" id="services" value={selectedOption} onChange={selectChange}>
                             <option value='10' >HOME</option>
                             <option value="option2">OFFICE</option>
                             <option value="option3">WAREHOUSE</option>
                         </select>
                         </div>
                        <div id='output'></div>



                        <button
                              onClick={calculateDistance}
                              style={{
                                width: "160",
                                height: "48",
                                borderRadius: '15px',
                                backgroundColor: '#126a10',
                                color: 'white',
                                border: '2px solid #126A10',
                                cursor: 'pointer',
                                marginRight: '20px',
                                marginTop:"20px",
                                padding:"10px 25px",
                                boxShadow:'1px 1px 12px lightgrey ',
                                position:"relative",
                                left:"50px"
                              }}
                              disabled={loading}
                            >
                              {loading ? 'Calculating...' : 'Get a Quote'}
                            </button>


                            {distance &&                
<div style={{      marginTop: "20px",
                                                margin:"auto",
                                                alignContent:"center",
                                                padding: "10px",
                                                border: "1px solid #ccc",
                                                borderRadius: "24px",
                                                backgroundColor: "#f9f9f9",
                                                position: "absolute",
                                                top: "60%",
                                                left: "30%",
                                                boxShadow:" rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                                                transform: "translate(-30%, -30%)",
                                                width: "400px",
                                                height:"250px",
                                                textAlign: "center",
                                                color:"black",}}>


<button style={{background:"transparent", color:"gray", position:"relative", right:"170px", top:"-10px"}} onClick={() => setDistance(false)} >X</button>
                                              <h3 style={{fontSize:"20px", fontFamily:"poppins", color:"#126a10", marginTop:"-40px"}}  >Your VANit Estimate!</h3>
                                              <img src={smile} className="emoji" />

                            {error && <p style={{ color: 'red' }}>{error}</p>} 
                            {distance && <p>Distance: {distance}</p>}
                            {cost && <p>Estimated Cost: {cost}</p>} 
                            <Link to ="/signup"><button style={{height:"40px", borderRadius:"10px"}}>Continue</button></Link> 

                            </div>

}
                   
      
                        

                         <div className='form-button'>
                         
                          
                          </div>
                 </form>

                 <img className='heroImage' src="/hero-image.png" alt="" />
         
             </div>

             
     </div>

     <section id='services'>

             <div className='text-div'>
         <h1>
                 Three main <span>services</span>
             </h1>
             <p>
                 Our app gives you unparralled visibiility into your entire logistic network. Whether you're <br />managing a single delivery or overseeing thousands, you can track the exact location of every <br /> shipment in real time.
             </p>
         </div>
             <div className='serviceCards'>
                 <ServiceCard img ={<IoTimeSharp  size={30}/>} title='Track Every Van In Real Time' text1='Stay updated on your van exact' text2='location with instant tracking' text3='notification'/>
                 <ServiceCard img ={<GiPadlock   size={30}/>} title='Items Security' text1='item security is our top priority' text2='' text3=''/>
                 <ServiceCard img ={<PiFolderOpen  size={30}/>} title='Clear & No Hidden Fees' text1='Pay exactly what is stated' text2='without unexpected or additional' text3='charges.'/>
             </div>

           
      <div className="fleet-safety-outer-box" ref={fleetRef}>
             <div className='fleet-safety-text-box fleet-safety-inner-box'>
                 <img className='fleetCar fleetCarMobile ' src="/fleet-car.png" alt="" />
                 <h3>Your Fleet's Safety, Our Top Priority</h3>
                 <p>Regular safety checks and maintenance are <br />part of our commitment to keeping your fleet <br /> in top condition. Our app schedule and <br />track inspections, ensuring that every <br /> vehicle meets stringent safety standards</p>

                 
                 <img className='doubleQuote' src="/double-quote.png" alt="" />
             
                 
                 <div className='service-button'>
                <a href="./Blog"> <Button className='sbutton'name='Learn More' bgcolor='rgb(18, 106, 16)' color='white' width= {160} height={48}/></a>
                 </div>
             </div>
             
             </div>

             <div className="ratings" ref={ratingsRef}>
             <div><h1>10,000+</h1><p>Deliveries Managed</p></div>
             <div><h1>2,500+</h1><p>Active Clients</p></div>
             <div><h1>98%</h1><p>On-time Delivery Rate</p></div>
             <div><h1>200+</h1><p>Industry Awards</p></div>
             </div>

             <div className="revolutionise" ref={revolutionizeRef}>
             <div className='text'>
                 <h2>Ready to Revolutionize Your <br /> Logistic Operations ?</h2>
                 <p>Join other countless other businesses that have streamlined their <br /> logistics with our cutting-edge solutions</p>
                 <div className='revolutionise-button'>
                    <Link to ="/SignUp"> <Button name='Sign Up' bgcolor='rgb(18, 106, 16)' color='white' width= {160} height={48}/></Link>
                 </div>
             </div>
             <div className='image'>
                 <img src="/vanAndBoxes.png" alt="" />
             
             </div>

             </div>
     </section>
        
       
         
    

    </Container>
      {/* <Location/>  */}
    {/* <Movement/>  */}

    </>
 )
}

   


export default Home
const Container = styled.div`

.hero{
display: flex;
justify-content: space-around;
align-items:center;
height:100vh;
color:green;
background:linear-gradient(to left,rgba(255,255,255,0)0%,rgba(255,255,255,50)100%),
            url('/hero-image.png') center/cover no-repeat;
}

.emoji{
width:81px;
}

.off{
position:relative;
top:30px;
}

.hq{
margin-top:-10px;

}




.bigcap{
font-size:70px;
        margin-bottom:20px;
       color:#126A10;
       font-weight:600;
       
}


.hero-text{
    h1{
        font-size:70px;
        margin-bottom:20px;
    }
    p{
        font-size:24px;
        color:black;
        margin-bottom:20px;
          font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
    }
}
    .heroFormInput{
       display: flex;
       align-items:center;
       background-color: yellow;
       input{
        width:100%;
        padding:5px;
        /* z-index: 2; */
        
       }
       img{
        width:20px;
        /* height:30px; */
        margin-left:10px;
       }
    }
.hero-form1{
    border:solid 1px black;
    background-color:white;
    background-image:url('/Vector.png');
    background-repeat:  repeat;
    background-size: 30px 30px;
    max-width:550px;
    height:100vh;
    padding:15px 75px;
    border-bottom-right-radius:30px;
    border-top-right-radius:30px;
    
    h2{
      font-size: 20px;
    }
    p{
      font-size: 13px;
    }
    label{
      color: black;
     position:relative;
     top:30px;
    }

    h2,p,hr,label{
        margin-bottom:10px;
    }
    select{
        width:100%;
        margin-bottom: 10px;
    }
   
    .input1{
    display: flex;
    border: #126A10 1px solid;
    border-radius:5px;
    padding: 3px;
  margin-top: 5px;
    margin-bottom: 10px;
    background-color: white;
    width: 100%;



    input{
       
      height: 31px;
      outline: none;
      border: none;
      padding-left: 10px;
      
    }
   
    }
    .form-input{
        /* border:1px solid black; */
        /* height:30px; */
        background-color:white;
        align-content:center;
        
    }
    label{
        margin-bottom:10px;
    }
    form{
        position: relative;
       
    }
    .img1,.img2{
        position: absolute;
        left: 10px;

    }
    select{
      width: 100%;
      height: 20px;
      outline: none;
      border: none;
      /* padding-left: 10px; */
    }
   

    .form-cards{
        display:flex;
        justify-content:space-between;
        align-items:center;
        p{
          color: black;
        }
        
        div{
            background-color: #e7f0e7;
            text-align:center;
            width:70px;
            margin-bottom:-15px;
            padding:10px 0px 10px 0px;
            border-radius:10px;
        }
    }
    .form-button{
        /* margin-top:20px; */
        text-align:center;
    }
    .heroImage{
      display: none;
      
    }
}
section{
    background-image:url('/Vector.png');
    background-repeat:  repeat;
    background-size: 510px 510px;
    z-index:-1;
    padding-bottom:100px;
    

  .text-div{
    padding-top: 70px;
    text-align: center;
    h1{
      font-size: 40px;
      color: black;
      margin-bottom: 30px;
       font-family: "Poppins", serif;
    }
    span{
      color: #126A10;
      font-weight: bold;
    }
    p{
      font-size: 16px;
       font-family: "Poppins", serif;
    }
  }
  .serviceCards{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 200px;
    gap: 30px;

  }
  .fleet-safety-outer-box{
    width: 90%;
    margin-bottom: 150px;
    margin:auto;
    border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    padding: 100px 200px 100px 100px;
    position: relative;
    background-color: transparent;
  }

  .fleet-safety-text-box{
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    padding-left: 40px;
    border: none;
    background-color: #fff;

    .fleetCar{
      position: absolute;
      top: -50px;
      right: -56px;
      width: 65%;
    
    }

    h3{
      padding-top: 155px;
      margin-bottom: 10px;
    }
    h1{
      display: inline;
      font-size: 80px;
    }
  }
  .service-button{
    display: inline-block;
    position: absolute;
    bottom: 130px;
    right: 230px;
  }
  .ratings{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 150px;
    margin-bottom: 150px;
    gap: 90px;

    h1{
      font-size: 40px;
      background-image: linear-gradient(90deg, #126A10,#a3a516);
      -webkit-background-clip: text;
      color: transparent;
    }
    p{
      font-size: 10px;
    }
  }
  .revolutionise{
    display: flex;
    justify-content: center;
    gap: 60px;
    z-index:3;
    border-radius:10px;
    background-color: #fbf9e9;
    padding: 20px;
    width: 100%;
    margin: auto;

   
    .text{
      align-content: center;
      

      h2{
        font-size: 35px;
        color: #126A10;
        margin-bottom: 40px;
      }
      p{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
        line-height: 1.5;
      }
    }
  }
}


 /* Media query for max-width: 900px */
 @media (max-width: 900px) {
    .hero {
      flex-direction: column;
      text-align: center;
      height: auto;
      padding: 20px;
    }

    .hero-text h1 {
      font-size: 50px;
    }

    .hero-form {
      max-width: 400px;
      height: auto;
      padding: 30px;
    }

    section .fleet-safety-outer-box {
      width: 90%;
      height: auto;
      padding: 50px 20px;
    }

    .revolutionise {
      flex-direction: column;
      text-align: center;
      width: 90%;
    }
  }


  /* Media query for max-width: 320px */
  @media (max-width: 429px) {
    .hero{
      background:linear-gradient(rgba(0,0,0,0)0%,rgba(255,255,255,0)),
      url('') center/cover no-repeat;
    }

    .hero-text h1 {
      font-size: 30px;
    }

    .hero-text p {
      font-size: 16px;
    }

    .hero-form {
      padding: 20px;
      max-width: 300px;
      p{
        font-size: 16px;
      }
    }
    .heroImage{
      display:inline-block ;
      width:290px;
    }

    section .text-div h1 {
      font-size: 2em;
    }
    .serviceCards{
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: space-evenly;
    margin-left: 19px;
    margin-top: 50px;
    margin-bottom: 200px;
    gap: 30px;
  }
  .fleet-safety-outer-box{
    margin-bottom: 150px;
    margin:auto;
    border-radius: 20px;
    box-shadow:1px 1px 10px ;
    padding: 100px 200px 100px 100px;
    position: relative;
    background-color: #80808014;
  }
  .fleet-safety-text-box{
    border-radius: 20px;
    box-shadow:1px 1px 2px ;
    padding-left: 40px;
    border: none;
    background-color: #fff;
  }
  .fleetCarMobile{
      position: absolute;
      top: 300px;
      right: 110px;
      width: 50px;
    }
    .fleet-safety-inner-box h3{
      padding-top: 100px;
      margin-bottom: 10px;
      font-size: 16px;
    }

    .fleet-safety-inner-box p{
      font-size: 13px;
      padding-bottom: 30px;
      /* position: relative; */
    }
    .doubleQuote{
      width: 30px;
    }

    .sbutton{
      display: inline-block;
      position: absolute; 
      bottom: 130px;
      right: 10px;
      }
  

    .ratings{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 150px;
    margin-bottom: 150px;
    gap: 90px;

    h1{
      font-size: 20px;
      background-image: linear-gradient(90deg, #126A10,#a3a516);
      /* -webkit-background-clip: text; */
      -webkit-text-fill-color: transparent;
    }
    p{
      font-size: 10px;
    }
  }

  .revolutionise{
    display: flex;
    flex-direction: column;
    gap: 60px;
    z-index:3;
    border-radius:10px;
    background-color: #ffc0cb8f;
    padding: 20px;
    margin: auto;

    .image img{
      width: 100%;
    }
  

    .text{
      align-content: center;
      

      h2{
        font-size: 35px;
        color: #126A10;
        margin-bottom: 40px;
      }
      p{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
        line-height: 1.5;
      }
    }
  }
}

`