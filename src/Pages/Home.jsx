import React, { useState } from "react";
import Hero from "./../Components/Hero/Hero";
import Title from "./../Components/Title/Title";
import Services from "./../Components/Services/Services";
import About from "./../Components/About/About";
import Contact from "./../Components/Contact/Contact";
import VideoPlayer from "./../Components/VideoPlayer/VideoPlayer";
import Team from "./../Components/Team/Team";
import Training from "../Components/Training/Training";

const Home = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Hero />
      <div className="container">
        <Title subTitle="Our SERVICES" title="What We Offer" />
        <Services />
        <About setPlayState={setPlayState} />
        <Title subTitle="Our TEAM" title="Management Team" />
        <Team />
        <Title subTitle="Our TRAININGS" title="Expert-Led Growth" />
        <Training />
        <Title subTitle="CONTACT US" title="Get in Touch" />
        <Contact />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default Home;
