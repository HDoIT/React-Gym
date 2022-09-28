import React from 'react';
import './Programs.css';
const Programs = () => {
  return (
    <div className="programs" id='programs'>
        <div className="programs-title">
            <span className='stroke-text'>explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="programs-card">
            <div className="card">
                <span><i class="fa-solid fa-dumbbell" style={{transform:"rotate(-45deg)"}}></i></span>
                <span>Strength Training</span>
                <span>In this program, you are trained to improve your strength through many exercises.</span>
                <span>Join Now <i class="fa-solid fa-arrow-right"></i></span>
            </div>
            <div className="card">
                <span><i class="fa-solid fa-person-running"></i></span>
                <span>Cardio Training</span>
                <span>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</span>
                <span>Join Now <i class="fa-solid fa-arrow-right"></i></span>
            </div>
            <div className="card">
                <span><i class="fa-solid fa-fire"></i></span>
                <span>Fat Burning</span>
                <span>This program is suitable for you who wants to get rid of your fat and lose their weight.</span>
                <span>Join Now <i class="fa-solid fa-arrow-right"></i></span>
            </div>
            <div className="card">
                <span><i class="fa-solid fa-heart-pulse"></i></span>
                <span>Health Fitness</span>
                <span>This programs is designed for those who exercises only for their body fitness not body building.</span>
                <span>Join Now <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>

    </div>
  )
}

export default Programs