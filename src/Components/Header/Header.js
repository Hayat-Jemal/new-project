import React from 'react'
import { Link } from 'react-router-dom';
// import logo from "../Images/rcaLogo.jpg";
import "./header.css"
const Header = () => {
    return (
        <div className="home__options">
            {/* <img src={logo} alt="" /> */}
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
        <div className="header__option">
          <span
            className="header__optionLineone">Donate</span>
          <span className="header__optionLineTwo">
            Sign In
          </span>
        </div>
      </div>
    );
}

export default Header
