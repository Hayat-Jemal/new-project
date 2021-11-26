import React, {useState} from "react";
import "./footer.css";
import FooterLast from "./FooterLast/FooterLast";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
const Footer = () => {
   const [names, setNames] = useState([]);
  const [singleName, setSingleName] = useState("");
  
   const handleClick = (e) => {
    e.preventDefault();
    setNames([...names, singleName]);
     setSingleName("")
  };
  
  return (
    <div className="footer__container">
      <div className="footer__formWrapper">
        <div className="footer__text">
          <b>Add Impact To Your Inbox</b>
          <br />
          Get our emails to stay in the know.
        </div>
        <div className="footer__form">
          <form onSubmit={handleClick}>
            <input type="text"  value={singleName} placeholder="First name"  onChange={(e) => {
            setSingleName(e.target.value);
          }}/>
            <input type="text"  value={singleName} placeholder="Last name"  onChange={(e) => {
            setSingleName(e.target.value);
          }}/>
            <input type="email" placeholder="Email"  onChange={(e) => {
            setSingleName(e.target.value);
          }}/>

            <button type="submit"  onClick={handleClick}>SUBSCRIBE</button>
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
