import React from "react";
import "./Services.css";
import service_1 from "../../assets/service-1.png";
import service_2 from "../../assets/service-2.png";
import service_3 from "../../assets/service-3.png";
import service_icon_1 from "../../assets/service-icon-1.png";
import service_icon_2 from "../../assets/service-icon-2.png";
import service_icon_3 from "../../assets/service-icon-3.png";

const Services = () => {
  return (
    <div className="services">
      <div className="services">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>Heat Treatment Solutions</p>
        </div>
      </div>
      <div className="services">
        <img src={service_2} alt="" />
        <div className="caption">
          <img src={service_icon_2} alt="" />
          <p>Non-Destructive Examination(NDE)</p>
        </div>
      </div>
      <div className="services">
        <img src={service_3} alt="" />
        <div className="caption">
          <img src={service_icon_3} alt="" />
          <p>Complimentary Services</p>
        </div>
      </div>
    </div>
  );
};
export default Services;
