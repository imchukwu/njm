import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Heat Treatment & NDT Services</h1>
        <p>
          From precision heat treating to reliable NDT inspections, we offer a
          one-stop shop for all your metal treatment needs. Our services include
          hardening, tempering, annealing, and various NDT methods. Let us
          strengthen your project!
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Hero;
