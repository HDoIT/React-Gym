import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth <= 769 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)

  const handelClickOpen = ()=>{
    setMenuOpened(!menuOpened);
  }
  const handelClickClose = ()=>{
    setMenuOpened(false)
  }
  return (
    <div className="header">

        <img src={logo} alt="" />
        {menuOpened === false && mobile === true?(
          <div>
            <i class="fas fa-bars" onClick={handelClickOpen}></i>
          </div>
        ):(  
        <div>
          <i class="fas fa-bars" onClick={handelClickOpen}></i>      
          <ul className="header-menu">
            <li>
              <Link onClick={handelClickClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li onClick={handelClickClose}>
              <Link onClick={handelClickClose} activeClass="active" to="programs" spy={true} offset={-90} smooth={true} duration={500}>
                Programs
              </Link>
            </li>
            <li onClick={handelClickClose}>
            <Link onClick={handelClickClose} activeClass="active" to="reasons" spy={true} smooth={true} duration={500}>
                Why us
              </Link>
            </li>
            <li onClick={handelClickClose}>
              <Link onClick={handelClickClose} activeClass="active" to="plans" spy={true} smooth={true} duration={500}>
                Programs
              </Link>
            </li>
          </ul>
        </div>)
        }


    </div>
  )
}

export default Header