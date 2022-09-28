import React from 'react';
import './Plans.css';
import tick from '../../assets/whiteTick.png';
const Plans = () => {
  return (
    <div className="plans" id='plans'>
        <div className="plans-title">
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now withus</span>
        </div>
        <div className="plans-card">
            <div>
                <i class="fa-solid fa-heart-circle-plus"></i>
                <span>BASIC PLAN</span>
                <span className='price'>$ 25</span>

                <span><img src={tick} alt="" />2 hours of excercises</span>

                <span><img src={tick} alt="" />Free consultaion to coaches</span>

                <span><img src={tick} alt="" />Access to The Community</span>
                <span>See more benefits <i class="fa-solid fa-arrow-right"></i></span>
                <button className='btn3'>Join Now</button>
            </div>
            <div>
                <i class="fa-solid fa-crown"></i>
                <span>PREMIUM PLAN</span>
                <span className='price'>$ 30</span>

                <span><img src={tick} alt="" /> 2 hours of excercises</span>

                <span><img src={tick} alt="" /> Free consultaion to coaches</span>

                <span><img src={tick} alt="" /> Access to The Community</span>
                <span>See more benefits <i class="fa-solid fa-arrow-right"></i></span>
                <button className='btn3'>Join Now</button>
            </div>
            <div>
                <i class="fa-solid fa-dumbbell"></i>
                <span>PRO PLAN</span>
                <span className='price'>$ 45</span>

                <span><img src={tick} alt="" />2 hours of excercises</span>

                <span><img src={tick} alt="" />Free consultaion to coaches</span>

                <span><img src={tick} alt="" />Access to The Community</span>
                <span>See more benefits <i class="fa-solid fa-arrow-right"></i></span>
                <button className='btn3'>Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default Plans