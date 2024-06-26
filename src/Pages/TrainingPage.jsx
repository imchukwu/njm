import React from "react";
import Title from "../Components/Title/Title";
import TrainingCards from "../Components/TrainingCards/TrainingCards";
import PageBanner from "../Components/PageBanner/PageBanner";
import training_banner from "../assets/training-banner.webp";

const TrainingPage = () => {
  return (
    <div>
      <PageBanner title="Our Trainings" banner={training_banner} />
      <div className="container">
        <Title subTitle="Our TRAININGS" title="Expert-Led Growth" />
        <TrainingCards />
      </div>
    </div>
  );
};

export default TrainingPage;
