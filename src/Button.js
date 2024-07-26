import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pic from './images/isro.png'
import { useState } from 'react';
import rocket from './images/section-2.png';
import guju from './images/student-with-graduation-cap.svg';
import muju from './images/graduation.svg';
import nuju from './images/teacher.svg';
import duju from './images/poipoi.jpeg';
import puju from './images/participate-1.png';
import tuju from './images/participate-2.png';
import huju from './images/participate-3.png';
import ruju from './images/participate-4.png';
import ch1 from './images/ps1.png';
import ch2 from './images/ps2.png';
import ch3 from './images/ps3.png';
import ch4 from './images/ps4.png';
import ch5 from './images/IMG_7065.jpeg';
import ch6 from './images/ps7.png';
import ch7 from './images/ps8.png';
import ch8 from './images/ps9.jpg';
import ch9 from './images/ps8.png';
import ch10 from './images/Lander.png';
import ch11 from './images/satellite.png';
import ch12 from './images/Muncipal GIS.png';
import ch13 from './images/rocket.jpeg';
import ch14 from './images/mentorship.png';
import ch15 from './images/recognition.png';
import { Button, Card } from 'react-bootstrap';
import Carouselpage from './Carousel';
import StaticExample from './Modal';
import { Questionss } from './Questions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';

function NavScrollExample() {
  let [about,setabout]=useState(false);
  let [participate,setparticipate]=useState(false);
  let [Challenge,setchallenge]=useState(false);
  let [shedule,setschedule]=useState(false);
  let [Rewards,setrewards]=useState(false);
  let [signin,setsignin]=useState(false);
  let [faq,setsfaq]=useState(Questionss[0].id);
  let [faqs,setfaqs]=useState(false);
  return (
    <Navbar expand="lg" className='nav'>
      <Container fluid>
        <img src={pic} width={50}/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1"className='Home' onClick={()=>setabout(!about)}><p className='home'>About</p></Nav.Link>
      
              <div className={`h1 ${about?'h2':'' }`}> 
              <span className='me'  onClick={()=>setabout(!about)}> &times; </span>
             <div className='bout'>   <img src={rocket} width={500} className='rocket'/>
                <h2 className='t1'>Bharatiya Antariksh Hackathon 2024: 
            <span className='t2'> <br></br> Welcome to the Bharatiya Antariksh Hackathon 2024 , an exhilarating platform designed to foster innovation and creativity in the domain of Space Technology. Organized by the Indian Space Research Organisation (ISRO) & Innovation Partner Hack2skill, this hackathon invites undergraduate students, graduate/ postgraduate students, PhD Students/ Research Scholars to come together and address some of the most pressing challenges in space exploration and technology.
            </span>
            </h2>
            </div>
               <div className='t3'> who can participate?
              <div className='t7'>
                 <div className='t4'><img src={guju} width={100} height={40} className='t11'/> <h5 className='t8'><br></br>Undergraduate Students</h5></div>
               <div className='t5'><img src={muju} width={100}height={40} className='t12'/> <h5 className='t9'><br></br>Graduate/ Postgraduate Students</h5> </div>
               <div className='t6'><img src={nuju} width={100}height={40} className='t13'/> <h5 className='t10'><br></br>PhD Students/ Research Scholars</h5></div>
               </div>
               <h6 className='t14'> Note: Working Professionals are not eligible to participate in hackathon</h6>
               </div>
               <div className='t16'> <img src={duju}width={400} height={200} className='t15'/> <h3 className='t18'>What is the Bharatiya Antariksh Hackathon?
                <span className='t17'><br></br> The Bharatiya Antariksh Hackathon 2024 is a premier event aimed at unearthing groundbreaking ideas and solutions in Space Tech.
As India continues to make significant strides in space research and exploration, this hackathon serves as a catalyst for the next generation of innovators to contribute to the nation's space missions. Participants will have the opportunity to work on real-world problems provided by ISRO, leveraging their knowledge and skills to devise innovative solutions.</span></h3> </div>
                
                 <div>
                  <h4  className='t19'>Why Participate?</h4>  </div>
                 <div className='t20'>
                  <div className='t21'><img src={puju} width={70} height={50}/><h3><br></br>Mentorship from ISRO Experts</h3> <h6>Gain invaluable insights and guidance from leading scientists and engineers.</h6></div>
                  <div className='t22'><img src={tuju} width={70} height={50}/> <h3><br></br>Internship Opportunities</h3><h6>Win a chance to grab an internship at ISRO.</h6></div>
                  <div className='t23'><img src={huju} width={70} height={50}/> <h3><br></br>Networking</h3> <h6> Connect with peers, professionals, and potential employers in the space sector.</h6></div>
                  <div className='t24'><img src={ruju}  width={70} height={50} /> <h3><br></br>Real-World Impact</h3> <h6>Contribute to the advancement of India's space missions and technology.</h6></div>
                 </div>
                 </div>
          
            

            <Nav.Link href="#action2"> <p className='home1' onClick={()=>setparticipate(!participate)}>how to participate?</p></Nav.Link>
             <div className={`j1 ${ participate? 'j10':''}`}> 
             <span className='j11' onClick={()=> setparticipate(!participate)}>&times;</span>
               <h2 className='j2'>How To Participate?</h2>
      
               <div className='j3'> 
                <div className='j4'> <h1> 1</h1> <p>Register for Hackathon</p><h6><br></br> Sign up now to participate in the hackathon.</h6></div>
                <div className='j5'><h1> 2</h1><p>Form Teams</p><h6><br></br>Collaborate with like-minded individuals to form teams.</h6></div>
                <div className='j6'><h1> 3</h1> <p>Choose a Challenge</p><h6><br></br>Select from the list of challenges provided.</h6></div>
                </div>
                <div className='j9'>
                <div className='j7'><h1> 4</h1><p>Innovate and Develop</p><h6><br></br>Innovate and Develop</h6></div>
                <div className='j8'><h1> 5</h1><p>Submit Your Solution</p> <h6><br></br>Present your innovative innovative ideas for evaluation.</h6></div>
                </div>
             </div>

            <Nav.Link href="#action3"> <p className='home2' onClick={()=>setchallenge(!Challenge)}> Challenges </p></Nav.Link>
              
              <div className={`f1 ${ Challenge? 'f100':''}`}> 
               <div className='cut'> <span className='f30' onClick={()=>setchallenge(!Challenge)} > &times; </span></div>
            <h2 className='f2'> Challenges</h2>
            <div className='f3'>
            <div>
              <Card style={{ width: '20rem', height: '385px'}}>
    <img src={ch1} width={318} height={200} className='f4'/>
      <Card.Body>
       
        <Card.Text className='f5'>
        Optimizing Urban Futures: Leveraging Digital Twins for Comprehensive Infrastructure Management.
        </Card.Text>
        <Button variant="primary">click here</Button>
      </Card.Body>
    </Card> 
    </div>
    <div>
    <Card style={{ width: '20rem',height: '385px' }}>
      <img src={ch2} width={318} height={200} className='f6'/>
      <Card.Body>
        <Card.Text className='f7'>
        Generation of Rooftop Solar Energy Potential Map Using Machine Learning/Deep Learning Based Building Footprint Ext.
        </Card.Text>
        <Button variant="primary">click here</Button>
      </Card.Body>
    </Card> 
    </div>
    <div>        
      <Card style={{ width: '20rem', height: '385px' }}>
<img src={ch3} width={318} height={200} className='f8'/>
      <Card.Body>
        <Card.Text className='f9'>
        Automatic detection of craters & boulders from Orbiter High Resolution Camera(OHRC) images using AI/ML techniques
        </Card.Text>
        <Button variant="primary">click me</Button>
      </Card.Body>
    </Card> 
    </div>
    <div>
    <Card style={{ width: '20rem',height: '385px'  }}>
    <img src={ch4} width={318} height={200} className='f10'/>
      <Card.Body>
        <Card.Text className='f11'>
        Voice enabled user interface for geospatial map based
        </Card.Text>
        <Button variant="primary" >click me</Button>
      </Card.Body>
    </Card> 
    </div>
    </div>

       <div className='f12'> 
        <div>  <Card style={{ width: '20rem',height: '385px' }}>
        <img src={ch5} width={318} height={200} className='f13'/>
      <Card.Body>
        <Card.Text className='f14'>
        Nowcasting of Precipitation Systems using C-Band Doppler Radar Observations
        </Card.Text>   
        <Button variant="primary">click me</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '20rem',height: '385px' }}>
    <img src={ch6} width={318} height={200} className='f15'/>
      <Card.Body>
        
        <Card.Text className='f16'>
        How much the Crab pulsar has slowed down since launch of AstroSat?
        </Card.Text>
        <Button variant="primary">click here</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '20rem',height: '385px' }}>
    <img src={ch7} width={318} height={200} className='f17'/>
      <Card.Body>
        
        <Card.Text className='f18'>
        Spectral classification of Chandrayaan-2 IIRS using AI/ML for understanding geological diversity of the Moon.
        </Card.Text>
        <Button variant="primary">click me</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '20rem',height: '385px' }}>
    <img src={ch8} width={318} height={200} className='f19'/>
      <Card.Body>
       
        <Card.Text className='f20'>
        Identification of safe navigation routes on the Moon using Chandrayaan Images
        </Card.Text>
        <Button variant="primary">click me</Button>
      </Card.Body>
    </Card>
    </div>
       </div>
       <div className='lasttopic'>
        <div> 
        <Card style={{ width: '20rem',height: '385px' }}>
    <img src={ch9} width={318} height={200} className='f21'/>
      <Card.Body>
       
        <Card.Text className='f22'>
        Image based Search of Lunar craters from global mosaic.
        </Card.Text>
        <Button variant="primary">click me</Button>
      </Card.Body>
    </Card>
        </div>
        
        <div> 
        <Card style={{ width: '20rem',height: '385px' }}>
    <img src={ch10} width={318} height={200} className='f23'/>
      <Card.Body>
       
        <Card.Text className='f24'>
        Lunar surface image simulation and Visualization
        </Card.Text>
        <Button variant="primary">click me</Button>
      </Card.Body>
    </Card>
        </div>
        <div> 
        <Card style={{ width: '20rem',height: '385px' }}>
    <img src={ch11} width={318} height={200} className='f25'/>
      <Card.Body>
       
        <Card.Text className='f26'>
        Context-Aware Geospatial Data Retrieval using LLM/NLP
        </Card.Text>
        <Button variant="primary">click me</Button>
      </Card.Body>
    </Card>
        </div>
        <div> 
        <Card style={{ width: '20rem',height: '385px' }}>
    <img src={ch12} width={318} height={200} className='f27'/>
      <Card.Body>
       
        <Card.Text className='f28'>
        Feature Extraction from Remote Sensing High Resolution Data using AI/ML
        </Card.Text>
        <Button variant="primary">click me</Button>
      </Card.Body>
    </Card>
        </div>
       </div>
       </div>


            <Nav.Link href="#action3"> <p className='home3' onClick={()=>setschedule(!shedule)}>schedule </p></Nav.Link>
              <div className={`f40 ${ shedule?'o4':''}`}>
                  <div>
                    <img src={ch13} width={457} height={525} className='o1'/>
                  </div>
                  <div>
                    <div className='o2'>
                    <span className='o5' onClick={()=>setschedule(!shedule)}> &times; </span>
                    <h3 className='o3'>Hackathon schedule</h3>
        
                 <Carouselpage/>
                    </div>
                  </div>
              </div>


            <Nav.Link href="#action3" onClick={()=>setrewards(!Rewards)}> <p className='home4'>Rewards</p></Nav.Link>
            <div className={`w1 ${Rewards?'active1':''}`}> 
            <div className='down'>
            <span className='delete' onClick={()=>setrewards(!Rewards)} >&times;</span>
            </div>
             <h1 className='w2'> Rewards and Benefits</h1>
             <div className='w3'>
                 <div className='w4'> 
                 <img src={ch14} width={85} height={70}/>
                 <h2>Mentorship from ISRO Experts</h2>
                 <p>Gain invaluable insights and guidance from leading scientists and engineers.</p>
                  </div>
                 <div className='w5'>
                 <img src={ch15} width={85} height={70}/>
                 <h2>Recognition and Internship Opportunities</h2>
                 <p>Recognition by ISRO and the chance to grab an internship at ISRO.</p>
                 </div>
             </div>
            </div>

            <Nav.Link href="#action3"> <p className='home5' onClick={()=>setfaqs(!faqs)}>FAQs</p></Nav.Link>
            <div className={`faqs ${faqs?'faqshow':''}`}>
              <h1>Frequently Asked Questions <span className='faqcross'  onClick={()=>setfaqs(!faqs)}> &times;</span></h1>
            <div className='ques1'>
              {Questionss.map((ques2,i)=>{
                return(
                  <div className='ques2'>
              <h5 onClick={()=>setsfaq(ques2.id)}> {ques2.Questions} </h5>
              <p className={faq===ques2.id?'quesAns':''}>{ques2.Answer}</p>
              </div>
                )
              }
            )}
            </div>
            </div>
         
          
          <Nav.Link href="#action3">
          <button className='signin' onClick={()=>setsignin(!signin)}>Sign in</button></Nav.Link>
          <div>
         <StaticExample signin={signin} setsignin={setsignin}/>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;