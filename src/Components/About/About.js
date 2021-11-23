import React from 'react'
import "./about.css"
import AboutVideo from './AboutVideo/AboutVideo';
const About = () => {
    return (
      <div className="about__wrapper">
        <div>
          <p className="about__about">About us</p>
          <p className="about__title">
            Raeye Children Aid (RCA) is a non-profit organization that was
            established in 2016.
          </p>
          <p className="about__description">
            RCA's mission is to empower children with intellectual and
            developmental disabilities through education. We accomplish this by
            providing access to education, vocational training and therapeutic
            programs for children of all ages. Through our powerful initiatives,
            we provide school supplies for children enrolled in Weyera , Yemane
            Berhan and Tinibete Ermiyas public schools located in Addis Ababa,
            Ethiopia. With the help of RCA, students in these school districts
            receive new school uniforms, breakfast, and much needed school
            supplies. Our goal is to help the children develop the skills needed
            to succeed in school, obtain strong careers, and be active
            participants in their communities.
          </p>
            </div>
            <div>
                <AboutVideo/>
            </div>
      </div>
    );
}

export default About
