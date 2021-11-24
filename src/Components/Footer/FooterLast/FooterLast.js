import React from "react";
import "./footerLast.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FavoriteIcon from "@material-ui/icons/Favorite";
const FooterLast = () => {
  return (
    <div>
      <div>
        <div className="footerLast__iconsWrapper">
          <div className="footerLast__icons">
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <LinkedInIcon />
          </div>
          <div>
            privacy policy • made with{" "}
            <FavoriteIcon style={{ fontSize: "15px" }} /> in nyc • get our
            emails
          </div>
        </div>
        {/* <div className="coun">unit</div> */}
      </div>
      <div>textbo</div>
    </div>
  );
};

export default FooterLast;
