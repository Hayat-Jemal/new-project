import React from "react";
import "./ourWorkDetail.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const OurWorkDetail = ({ image, image2, image3, title, description }) => {
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

export default OurWorkDetail;
