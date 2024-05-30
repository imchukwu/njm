import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>NJM Heat Treatment and NDE Services Solution</h1>
        <p>
          NJM Heat Treatment & NDE Services (Pty) Ltd is a specialized company
          engaged in, among other things, Heat Treatment and NDE services. The
          company is a premium provider of cutting-edge heat treatment services
          and non-destructive examination solutions.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Hero;
