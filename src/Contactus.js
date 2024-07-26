import { faMailBulk, faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import last from './images/isro.png';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import hslogo from './images/hs logo.png'

function BlockExample() {
  return (
    <>
    <div className="oneline">
       <NavLink> <Button variant="primary" size="lg" className='button1'><FontAwesomeIcon icon={faMailBulk}/> isrohack@hack2skill.com
      </Button></NavLink>
      <Button variant="primary" size="lg" className='button2'>
        <FontAwesomeIcon icon={faPhone}/>
          +91-88700XXXXX
      </Button>
    </div>

    <div className='seperatepart'>
    <div className='isrolast'>
   <img src={last} width={100} height={100} />
   <h6 >Address: </h6>
   <h6>ISRO Headquarters, Antariksh Bhavan, New BEL Road Bengaluru-560 094</h6>
   <div className='twiit'>
   <span className='sh5'><FontAwesomeIcon icon={faFacebook}/><h6>Facebook</h6></span>
   <span className='sh6'><FontAwesomeIcon icon={faTwitter}/><h6>Twitter</h6></span>
   <span className='sh7'><FontAwesomeIcon icon={faWhatsapp}/><h6>Whatsapp</h6></span>
   </div>
    </div>

    <div className='secondpart'>
     <h6>Innovation Partner</h6>
     <img src={hslogo} width={130} height={50} />
    
     <h6> <br></br>Address:
   <br></br>A-14, 4th floor Eco Tower, Sector 125, Noida, Uttar Pradesh 201303</h6>
<div className='logos'>
  <span className='sh1'> <FontAwesomeIcon icon={faFacebook}/><h6> Facebook</h6></span>
  <span className='sh2'> <FontAwesomeIcon icon={faLinkedin}/><h6> Linkdln</h6></span>
  <span className='sh3'> <FontAwesomeIcon icon={faTwitter}/><h6> Twitter</h6></span>
  <span className='sh4'> <FontAwesomeIcon icon={faWhatsapp}/><h6> Facebook</h6></span>
</div>
    </div>
    </div>
    </>
  );
}

export default BlockExample;