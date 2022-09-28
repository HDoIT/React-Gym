import React from 'react'
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';
import img4 from '../../assets/image4.png';
import tick from '../../assets/tick.png';
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';
import adidas from '../../assets/adidas.png';
import './Reasons.css';

const Reasons = () => {
  return (
    <div className="reasons" id='reasons'>
        <div className="left-r">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>
            
            <span><span className='stroke-text'>why </span><span>choose us?</span></span>

            <div>
                <span><img src={tick} alt="" /> over 140+ expert coachs</span>
                <span><img src={tick} alt="" /> train smarter and faster than more</span>
                <span><img src={tick} alt="" /> 1 free program for new member</span>
                <span><img src={tick} alt="" /> reliable partners</span>
            </div>

            <span style={{color:"gray"}}>our partners</span>
            <div>
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons