import React from "react";
// Components
import LandingCard from "./LandingCard/index";
import Timeline from "./Timeline/index";
import Contact from "./Contact/index";

const Home = ({ darkMode, scrollPercentage, windowSize }) => {
  return (
    <>
      <LandingCard
        darkMode={darkMode}
        scrollPercentage={scrollPercentage}
        windowSize={windowSize}
      />
      <Timeline darkMode={darkMode} scrollPercentage={scrollPercentage} />
      <Contact darkMode={darkMode} scrollPercentage={scrollPercentage} />
    </>
  );
};

export default Home;
