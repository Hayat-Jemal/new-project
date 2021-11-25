import React from "react";
import "./footerLast.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
const FooterLast = () => {
  return (
    <div className="FooterLast">
      <div className="FooterLast__first">
        <div className="footerLast__iconsWrapper">
          <div className="footerLast__icons">
            <TwitterIcon className="icons" />
            <FacebookIcon className="icons" />
            <InstagramIcon className="icons" />
            <YouTubeIcon className="icons" />
           <LinkedInIcon className="icons"/>
        
         {/* <a target="blank" href="https://www.linkedin.com"><LinkedInIcon/></a>  */}
   
         </div>
          <div style={{ color: "#71716c" }}>
            privacy policy   •   made with{" "}
            <FavoriteIcon style={{ fontSize: "15px" }} /> in nyc   •    get our
            emails
          </div>
        </div>
        <div className="footerLast__priceType">
        <select name="type" id="type">
          {/* <option value="" selected>
            Choose Type
          </option> */}
           
          <option value="movie"> United States dollar </option>
          <option value="series">   Pound sterling</option>
         
        </select></div>
      </div>
      <div className="footerLast__text">
        © 2021 | 40 Worth St. NY, NY 10013 | 1 Devonshire St, London W1W 5DR |
        Charity Global, Inc., a US 501 (c)(3) public charity, EIN 22-3936753 and
        an ANBI in the Netherlands, RSIN 826151656 . Charity Global UK Limited
        is a dual-qualified charity registered in England and Wales, charity
        number 1169228. Charity Global UK Limited is wholly owned by Charity
        Global, Inc.
      </div>
    </div>
  );
};

export default FooterLast;
