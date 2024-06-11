import React from "react";
import Title from "../Components/Title/Title";
import Testimonials from "../Components/Testimonials/Testimonials";
import PageBanner from "../Components/PageBanner/PageBanner";
import training_banner from "../assets/training-banner.png";

const Training = () => {
  return (
    <div>
      <PageBanner title="Our Trainings" banner={training_banner} />
      <div className="container">
        <Title subTitle="Our TRAININGS" title="Expert-Led Growth" />
        <Testimonials />
      </div>
    </div>
  );
};

export default Training;
