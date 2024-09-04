import React from "react";
import logo3 from "../assets/logo3.png";
// import {Link} from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="navbar-logo" src={logo3} alt="Film Fusion Logo" />
      </div>
      <div className="text-container">
        <a href="/" className="site-name">Film Fusion</a>
      </div>
      <div className='nav-links'>
      <ul className='nav-list'>  
        <li><a href='/signup'>Sign Up</a></li>
        <li><a href='/login'>Login</a></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
