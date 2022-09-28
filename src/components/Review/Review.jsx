import React from 'react'
import './Review.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
const Review = () => {
    const [selected,setSelected] = useState(0)
    const length = testimonialsData.length;
    const handelNextReivew = ()=>{
        selected === length-1 ? setSelected(0) : setSelected((prev=> prev +1))
    }
    const handelPrevReivew = ()=>{
        selected === 0 ? setSelected(length-1) : setSelected((prev=> prev -1))
    }
  return (
    <div className="review" id="reivew">
        <div className="left-rv">
            <span>Reviews</span>
            <span className='stroke-text'>What They</span>
            <span>Say About Us </span>
            <span>{testimonialsData[selected].review}</span>
            <span><span>{testimonialsData[selected].name}</span>- {testimonialsData[selected].status}</span>
        </div>
        <div className="right-rv">
            <div className='arrows'>
                <i class="fa-solid fa-arrow-left" onClick={handelPrevReivew}></i>
                <i class="fa-solid fa-arrow-right" onClick={handelNextReivew}></i>
            </div>
            <img src={testimonialsData[selected].image} alt='' />
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Review