import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact" id="contact">
        <div className='left-c'>
            <div></div>
            <div>
                <span className='stroke-text'>Ready to </span>
                <span>Level up </span>
            </div>
            <div>
                <span>your body </span>
                <span className='stroke-text'>with us</span>
            </div>
        </div>
        <div className='right-c'>
            <input type="text" name="" id="" placeholder='Enter your email here'/>
            <button className='btn1'>Send</button>
        </div>
    </div>
  )
}

export default Contact