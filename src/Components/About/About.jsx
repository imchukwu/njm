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
        <h3>ABOUT NJM</h3>
        <h2>Heat Treatment & NDT Services</h2>
        <p>
          At NJM, we are dedicated to providing comprehensive solutions for
          optimizing the performance and longevity of your metal components. Our
          expertise lies in two critical areas: Heat Treatment and
          Non-Destructive Testing (NDT).
        </p>
        <p>
          <strong>Heat Treatment Solutions:</strong> We offer a range of heat
          treatment processes designed to alter the microstructure of metals,
          enhancing their properties for specific applications. This can include
          hardening for increased strength, tempering for improved toughness, or
          annealing for better machinability.
        </p>
        <p>
          <strong>Non-Destructive Examination (NDE):</strong> Our NDT services
          ensure the integrity and quality of your metal components without
          causing any damage. We utilize advanced techniques like ultrasonic
          testing, radiographic testing, and magnetic particle testing to detect
          internal flaws or defects that could compromise performance or safety.
        </p>
        <p>
          <strong>Our commitment to quality is unwavering.</strong> We utilize state-of-the-art
          equipment and employ highly skilled technicians certified in the
          latest heat treatment and NDT methods. This ensures consistent,
          reliable results for your critical projects.
        </p>
      </div>
    </div>
  );
};
export default About;
