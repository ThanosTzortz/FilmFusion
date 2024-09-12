import React from "react";
import { Link } from "react-router-dom";
import logo3 from "../assets/logo3.png";
import "../styles/Navbar.css";

function Navbar({ isLoggedIn, username, onLogout }) {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="navbar-logo" src={logo3} alt="Film Fusion Logo" />
      </div>
      <div className="text-container">
        <Link className='site-name' to="/">Film Fusion</Link>
      </div>
      {isLoggedIn && (
        <div className="welcome-container">
          <span className="welcome-message">Welcome, {username}</span>
        </div>
      )}
      <div className="nav-links">
        <ul className="nav-list">
          {isLoggedIn ? (
            <li>
              <button onClick={onLogout} className="logout-button">Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
