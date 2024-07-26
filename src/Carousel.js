import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import swap1 from './images/sc1-removebg-preview.png';
import swap2 from './images/sc3-removebg-preview.png';
import swap3 from './images/sc4-removebg-preview.png';

export default function Carouselpage() {
  return (
    <div className='swapping'>
       <Carousel className='s1'>
      <Carousel.Item>
      <img src={swap1} width={900} height={400} className='s2'/>
       
      </Carousel.Item>

      <Carousel.Item>
      <img src={swap2} width={900} height={400} className='s3'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={swap2} width={900} height={400} className='s4'/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
