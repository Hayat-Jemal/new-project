import React from 'react'
import "./ourWork.css";
const OurWork = ({ image, title, description }) => {
  return (
    <div>
      <div className="ourWork">
        <p className="title">Our Work</p>
        <p className="ourWork__goal">
          Our goal is to help the children develop the skills needed to succeed
          in school, obtain strong careers, and be active participants in their
          communities.
        </p>
      </div>
      <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OurWork;
