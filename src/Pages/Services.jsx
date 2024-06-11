import React from "react";
import Title from "../Components/Title/Title";
import PageBanner from "../Components/PageBanner/PageBanner";
import Programs from "../Components/Programs/Programs";
import services_banner from "../assets/services-banner.png";

const Services = () => {
  return (
    <div>
      <PageBanner title="Our Services" banner={services_banner} />
      <div className="container" style={{ marginTop: "3rem" }}>
        <Title subTitle="Our SERVICES" title="What We Offer" />
        <Programs />
      </div>
    </div>
  );
};

export default Services;
