import React from 'react'
import { Link } from 'react-router-dom';
// import logo from "../Images/rcaLogo.jpg";
import "./header.css"
const Header = () => {
    return (
      <div className="header">
        <div className="header__fadeTop">
        <div className="header__options">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>

            <li>Mission</li>
            <li>Our work</li>
            <li>Donate</li>
          </ul>
          <div className="header__buttons">
          <button className="header__button">Donate</button>
          <button className="header__button">Sign In</button>
          </div>
        </div>
        </div>
        
      </div>
    );
}

export default Header
