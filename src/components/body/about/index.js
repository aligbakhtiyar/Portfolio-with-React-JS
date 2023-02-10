import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there: I am <br />
          <span className="info-name">Ahmad BAKHTIYAR,</span>
          <br />
          working as Frontend Developer
        </div>
        <div className="about-photo">
          <img className="picture" src="./assets/coding2.png" alt="" />
        </div>
      </div>

      <SocialContact />
    </div>
  );
}

export default About;
