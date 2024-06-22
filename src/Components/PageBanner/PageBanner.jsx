import React from "react";
import "./PageBanner.css";

const PageBanner = ({ title, banner }) => {
  return (
    <div className="page-banner">
      <div className="overlay">
        <h2 className="page-banner-text">{title}</h2>
      </div>
      <img className="page-banner-img" src={banner} alt="" />
      {/* <div className="page-banner-text">
        <h2>{title}</h2>
      </div> */}
    </div>
  );
};

export default PageBanner;
