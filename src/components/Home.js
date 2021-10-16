import React from "react";
// Components
import LandingCard from "./LandingCard/index";
import Footer from "./Footer/index";
import Timeline from "./Timeline/index";
import Contact from "./Contact/index";

const Home = ({ darkMode }) => {
  return (
    <>
      <LandingCard darkMode={darkMode} />
      <Timeline darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Home;
