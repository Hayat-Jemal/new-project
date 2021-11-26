import React from 'react'
import "./campainVideo.css";
const CampainVideo = () => {
    return (
      <div className="campainVideo">
        <video
          autoPlay
          loop
          muted
          style={{
            // position: "absolute",
            width: "100%",
            // left: "50%",
            // top:"50%",
            // bottom: "50%",
            height: "650px",
            // objectFit: "cover",
            // transform: "translate(0%,-30%)",
            // marginBottom:"50px"
            //   opacity: "0.9"
            zIndex: "1",
          }}
        >
          <source
            src="https://videos.ctfassets.net/wvozpes63uc8/7hKKBduCh4qXUtVSdJ2GaN/2f338ecc5773d5bb891c1f07e5ab71d4/get_involved_compressed.mp4?"
            type="video/mp4"
          ></source>
        </video>
          <button>GET INVOLVED</button>
      </div>
    );
}

export default CampainVideo
