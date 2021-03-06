import React from "react";
import About from "../About/About";
import CampainVideo from "../CampainVideo/CampainVideo";
import Member from "../Member/Member";
import OurWork from "../OurWork/OurWork";
import DonateForm from "./DonateForm/DonateForm";
// import { Link } from "react-router-dom";
import "./home.css";
import HomeContent from "./HomeContent/HomeContent";
import Footer from "../Footer/Footer"

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
          height: "90%",
          // objectFit: "cover",
          transform: "translate(0%,-30%)",
          // marginBottom:"50px"
          //   opacity: "0.9"
          zIndex: "1",
        }}
      >
        <source
          src="https://videos.ctfassets.net/wvozpes63uc8/3LyhCLp2YLQ02HnzHp5IPw/b98b99451d4472709662737809306735/home-cycle-video.mp4?"
          type="video/mp4"
        ></source>
      </video>
      <div className="home__towComponents">
        <HomeContent />
        <DonateForm />
      </div>
      <OurWork />
      <CampainVideo />
      <About />
      {/* <Member/> */}
      <Footer />
    </div>
  );
};

export default Home;
