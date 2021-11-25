import React from "react";
import "./footer.css";
import FooterLast from "./FooterLast/FooterLast";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__formWrapper">
        <div className="footer__text">
          <b>Add Impact To Your Inbox</b>
          <br />
          Get our emails to stay in the know.
        </div>
        <div className="footer__form">
          <form>
            <input type="text" placeholder="First name" />
            <input type="password" placeholder="Last name" />
            <input type="password" placeholder="Email" />

            <button type="submit">SUBSCRIBE</button>
          </form>
          <p className="footer__bottomText">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
      <FooterMiddle />
      <FooterLast/>
    </div>
  );
};

export default Footer;
