import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-router-dom";

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
        <Link to="services" smooth={true} offset={-260} duration={500}>
          <button className="btn">
            Explore more <img src={dark_arrow} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
