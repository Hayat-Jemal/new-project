import React, { useState, useEffect } from "react";
import "./nav.css";
import logo from "../Images/rcaLogo.jpg"

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__white"}`}>
      <img className="nav__logo" src={logo} alt="RCA Logo" />
      <div className="nav__donate">
      </div>
    </div>
  );
}

export default Nav;
