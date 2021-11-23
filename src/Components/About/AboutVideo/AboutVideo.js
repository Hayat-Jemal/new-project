import React from 'react'
import "./aboutVideo.css"
const AboutVideo = () => {
    return (
      <div className="video__wrapper">
        <iframe
          src="https://www.youtube.com/embed/zeMr55Mxffc?autoplay=0&mute=0&color=red&controls=1&loop=0&rel=0&start=0&cc_load_policy=0&iv_load_policy=3"
          width="550"
          height="100%"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    );
}

export default AboutVideo
