import React from "react";
import Banner from "./components/Banner";
import Info from "./components/Info";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Reserve from "./components/Reserve";

const Home = () => {
  return (
    <>
      <Banner />
      <Info />
      <Services />
      <Reserve />
      <Doctors />
    </>
  );
};

export default Home;
