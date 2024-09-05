import React from "react";
import logo3 from "../assets/logo3.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="navbar-logo" src={logo3} alt="Film Fusion Logo" />
      </div>
      <div className="text-container">
        <Link to="/">Film Fusion</Link>
      </div>
      <div className="nav-links">
        <ul className="nav-list">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
