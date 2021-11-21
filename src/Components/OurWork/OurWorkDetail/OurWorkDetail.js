import React from 'react'
import "./ourWorkDetail.css";
const OurWorkDetail = ({ image, title, description }) => {
  return (
    <div className="ourWork__contents">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default OurWorkDetail
