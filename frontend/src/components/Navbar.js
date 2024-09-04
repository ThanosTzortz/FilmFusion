import React from "react";
import logo2 from "../assets/logo2.png";
// import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* <Link to="/" className="navbar-logo"> */}
        <img src={logo2} alt="Film Fusion Logo" />
      {/* </Link> */}
      <h1>Film Fusion</h1>
      {/* <div className="navbar-links">
        <Link to="/">Home</Link>/
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div> */}
      
    </nav>
  );
}

export default Navbar;
