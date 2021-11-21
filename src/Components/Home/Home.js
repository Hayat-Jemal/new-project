import React from "react";
import About from "../About/About";
import OurWork from "../OurWork/OurWork";
import DonateForm from "./DonateForm/DonateForm";
// import { Link } from "react-router-dom";
import "./home.css";
import HomeContent from "./HomeContent/HomeContent";
import image1 from "../Images/CP1.jpg"
import image2 from "../Images/CP2.jpg";
import image3 from "../Images/CP3.jpg"; 
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
          // transform: "translate(0%,-30%)",
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
      <div className="" ></div>
      <OurWork
        image={image1}
        title="School Breakfast"
        description="Each school day, the School Breakfast Program provides a nutritious morning meal for 31 students."
      />
      <OurWork
        image={image2}
        title="RCA Technology Camp"
        description="Raeye Children Aid (RCA) Technology Training teaches computer programming skills through fun and exciting ways. RCA Tech training is perfect for kids to expand their creativity and build confidence as they learn to problem-solve through coding."
      />
      <OurWork
        image={image3}
        title="RESPOND TO COVID-19"
        description="We are responding to COVID-19 by feeding people in need. You can help.Donate"
      />
    </div>
  );
};

export default Home;
