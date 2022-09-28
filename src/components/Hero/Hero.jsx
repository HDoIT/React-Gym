import React, { useEffect } from 'react'
import './Hero.css';
import Header from '../Header/Header';
import Heart from '../../assets/heart.png';
import hero from '../../assets/hero_image.png';
import heroback from '../../assets/hero_image_back.png';
import chart from '../../assets/calories.png';
import { useState } from 'react';
import Countup from 'react-countup';
const Hero = () => {

  // const [number,setNumber] = useState(0);

  // const countNumber = (min,max)=>{
  //   for(let count = min;count<=max;count++){
  //     setTimeout(()=>{
  //       setNumber(count);
  //     },1000)
  //   }
  // }

  // useEffect(()=>{
  //   countNumber(1,50);
  // },[])

  return (
    <div className="hero" id='home'>
        <div className="left-h">

          <Header />

          <div className="the-best-ad" >
            <div></div>
            <span>the best fitness club in the town</span>
          </div>

          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape</span>
              <span> Your</span>
            </div>
            <div>
              <span>Ideal</span>
              <span> Body</span>
            </div>
            <p>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
          </div>

          <div className="hero-features">
            <div>
              <span><Countup start={100} end={141}  duration={1} prefix="+"/></span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span><Countup start={50} end={100}  duration={1} prefix="+"/></span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span><Countup start={150} end={200}  duration={1} prefix="+"/></span>
              <span>EXPERT COACHES</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className='btn1'>Get started</button>
            <button className='btn2'>Learn more</button>
          </div>

        </div>
        <div className="right-h">
          <button className='btn3'>Join now</button>
          <div className="hero-heart">
            <img src={Heart} alt=""/>
            <span>Heart rate</span>
            <span>115 bpm</span>
          </div>
          <img src={hero} alt=""/>
          <img src={heroback} alt=""/>
          <div className='hero-calories' >
            <img src={chart} alt="" />
            <div className="calories-text">
              <span>Calories <br /> burned</span>
              <span>220 <br/>kcal</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
