import React from "react";
import "./ourWork.css";
import OurWorkDetail from "./OurWorkDetail/OurWorkDetail";
import image1 from "../Images/CP1.jpg";
import image2 from "../Images/CP2.jpg";
import image3 from "../Images/CP3.jpg";
import image4 from "../Images/CP4.jpg";


const OurWork = () => {
  return (
    <div className="ourWork__wrapper">
      <div className="ourWork">
        <p className="ourWork__ourWork">Our Work</p>
        <p className="ourWork__title">
          Our goal is to help the children develop the skills needed to succeed
          in school, obtain strong careers, and be active participants in their
          communities.
        </p>
      </div>
      <div className="ourWork__row">
        <OurWorkDetail
          image={image1}
          title="School Breakfast"
          description="Each school day, the School Breakfast Program provides a nutritious morning meal for 31 students."
        />

        <OurWorkDetail
          image={image2}
          title="RCA Technology Camp"
          description="Raeye Children Aid (RCA) Technology Training teaches computer programming skills through fun and exciting ways. RCA Tech training is perfect for kids to expand their creativity and build confidence as they learn to problem-solve through coding."
        />
        <OurWorkDetail
          image={image3}
          title="RESPOND TO COVID-19"
          description="We are responding to COVID-19 by feeding people in need. You can help.Donate"
        />
      </div>
    </div>
  );
};

export default OurWork;
