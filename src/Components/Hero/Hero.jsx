import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world!</h1>
        <p>
          Master the JavaScript with 30 real world project with source code and
          detailed notes of JavaScript course. Master the JavaScript with 30
          real world project with source code and detailed notes of JavaScript
          course.
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};
export default Hero;
