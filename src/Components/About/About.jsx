import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT NJM Pipeline Analytics Ltd</h3>
        <h2>NJM Heat Treatment and NDE Services Solution</h2>
        <p>
          Originally founded in South Africa and also duly incorporated in
          Nigeria under the Companies and Allied Matters Act as an indigenous
          company - NJM Pipeline Analytics Ltd.
        </p>
        <p>
          <strong>Heat Treatment Solutions:</strong> NJM perform a vast range of
          heat treatment services which include Post Weld Heat Treatment (PWHT),
          pre-heat, annealing, tempering, stress relieving, dry outs, furnace
          work and other heat treatment techniques needed in the engineering
          sphere, both electrical resistance and gas fired methods are employed
          to specific client requirements; our service includes written
          procedures and protocols needed in this critical phase of engineering
          manufacture and maintenance.
        </p>
        <p>
          <strong>Non-Destructive Testing:</strong> NJM perform a vast array of
          NDT services and specialize in several “high tech” disciplines that
          include, Phased Array Ultrasonic Testing (PAUT), Digital Radiography
          (DRT)(CRT), 3D scanning, Tank Floor Testing (TFT) and C Scan
          Ultrasonic mapping; in addition, we perform standard Ultrasonic
          Testing (UT), Radiographic testing (RT), Magnetic Particle testing
          (MT), Penetrant testing (PT), Positive Material Inspection (PMI) and
          Hardnes Testing (HT). NJM have no less than three certified Level III
          professionals.
        </p>

        {/* <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button> */}
      </div>
    </div>
  );
};
export default About;
