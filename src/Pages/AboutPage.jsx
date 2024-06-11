import React, { useState } from "react";
import PageBanner from "../Components/PageBanner/PageBanner";
import About from "../Components/About/About";
import Title from "../Components/Title/Title";
import Team from "../Components/Team/Team";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import about_banner from "../assets/about-banner.png";

const AboutPage = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <PageBanner title="About Us" banner={about_banner} />
      <div className="container">
        <About setPlayState={setPlayState} />

        <Title subTitle="Our TEAM" title="Business Experts" />
        <Team />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default AboutPage;
