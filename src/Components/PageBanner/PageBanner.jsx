import React from "react";
import "./PageBanner.css";

const PageBanner = ({ title, banner }) => {
  return (
    <div className="page-banner">
      <img className="shopcategory-banner page-banner-img" src={banner} alt="" />
      <div className="page-banner-text">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default PageBanner;
