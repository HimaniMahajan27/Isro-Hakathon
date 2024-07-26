import logo from './logo.svg';
import './App.css';
import NavScrollExample from './Button';
import cover from './images/cover-logo.png';
import earth from './images/earth.png';
import BlockExample from './Contactus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import BasicExamples from './form';


 
function App() {
  let [registering,setregistering]=useState(false);
  return (
    <>
    <div className="app">
    <div className={`modeloverlay ${ registering? 'active':''}`}>
      <div className={`enquirepage ${ registering?'page':''}`}> <BasicExamples Registering={registering} Setregistering={setregistering}/> </div>
    </div>
      <NavScrollExample/>

      <div className='coverup'>
   <div><img src={cover} width={500}height={300} className='coverisro' />
    <p className='participate'>for participating in hackathon:</p>
  <button className='register' onClick={()=>setregistering(!registering)}>Register Now</button></div> 
  <img src={earth} width={921}height={600}/>
  </div>
   <a href='#'className='shifting'> for more information go to navbar <FontAwesomeIcon icon={faUpDown}/></a>
    </div>
    <div className='blanck'></div>

  <div className='contract'> 
    <h2 className='contacting'>Contact Us</h2>
    <BlockExample/>
  </div>
   
    </>
  );
}

export default App;
