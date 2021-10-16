import React from "react";
// Import components
import LandingCard from "./LandingCard/index";
import Footer from "./Footer/index";
import Timeline from "./Timeline/index";
import Contact from "./Contact/index";

const Home = () => {
  return (
    <>
      <LandingCard />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
