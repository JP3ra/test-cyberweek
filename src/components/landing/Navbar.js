// 

import React, { useState } from "react";
import "./Navbar.css";
import compsoc from './compsoc.png';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const handleMobileMenu = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          <img src={compsoc} alt='logo' />
        </div>
        <button className='mobile-menu-icon' onClick={handleMobileMenu}>
          {mobile ? <ImCross /> : <FaBars />}
        </button>
        <ul className={mobile ? "nav-links-mobile" : "nav-links"}>
          <li style={{color:'white'}} onClick={handleMobileMenu} >
            <Link to='/' className='home'>
              Home
            </Link>
          </li>
          <li onClick={handleMobileMenu}>
            <Link to='/events' className='events'>
              Events
            </Link>
          </li>
          <li onClick={handleMobileMenu}>
            <Link to='/sponsors' className='sponsors'>
              Collaborators and Sponsors
            </Link>
          </li>
          <li onClick={handleMobileMenu}>
            <Link to='/committee' className='committee'>
              Organising Committee
            </Link>
          </li>
          <li onClick={handleMobileMenu}>
            <Link to='/contact' className='contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;