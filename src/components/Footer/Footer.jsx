import React from 'react';
import git from '../../assets/github.png';
import ins from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <hr />
        <div>
            <div>
                <img src={git} alt="" />
                <img src={ins} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <img src={logo} alt="" />
            <p>Create by LHD</p>
        </div>
    </div>
  )
}

export default Footer