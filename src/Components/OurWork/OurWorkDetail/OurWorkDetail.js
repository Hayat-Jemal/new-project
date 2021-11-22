import React from 'react'
import "./ourWorkDetail.css";
const OurWorkDetail = ({ image, title, description }) => {
  return (
    <div className="ourWorkDetail__container">
      <img src={image} alt={title} />
      <div className="ourWorkDetail__content">
        <h3 className="ourWorkDetail__title">{title}</h3>
        <p className="ourWorkDetail__description">{description}</p>
      </div>
    </div>
  );
};

export default OurWorkDetail
