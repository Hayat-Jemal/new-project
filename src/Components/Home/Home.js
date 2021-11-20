import React from "react";
// import { Link } from "react-router-dom";
import "./home.css";
import HomeContent from "./HomeContent/HomeContent";

const Home = () => {
  return (
    <div className="home">
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
          // height: "90%",
          // objectFit: "cover",
          transform: "translate(0%,-30%)",
          // marginBottom:"50px"
          //   opacity: "0.9"
          zIndex:"1",
        }}
      >
        <source
          src="https://videos.ctfassets.net/wvozpes63uc8/3LyhCLp2YLQ02HnzHp5IPw/b98b99451d4472709662737809306735/home-cycle-video.mp4?"
          type="video/mp4"
        ></source>
      </video>
     <HomeContent/>
    </div>
  );
};

export default Home;
