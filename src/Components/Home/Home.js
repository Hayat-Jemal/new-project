import React from "react";
// import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <video
        autoPlay
        loop
        muted
        style={{
          // position: "absolute",
          // width: "100%",
          // left: "50%",
          // top:"50%",
          // bottom: "50%",
          height: "90%",
          objectFit: "cover",
          transform: "translate(0%,-30%)",
            zIndex: "-1",
        //   opacity: "0.9"
        }}
      >
        <source
          src="https://videos.ctfassets.net/wvozpes63uc8/3LyhCLp2YLQ02HnzHp5IPw/b98b99451d4472709662737809306735/home-cycle-video.mp4?"
          type="video/mp4"
        ></source>
      </video>
      <div className="home__contents">
        <h1 className="home__title">Let's Shine their Ability</h1>
      </div>
    </div>
  );
};

export default Home;
