import React from "react";
import Navbar from "../../components/Navbar";
import LandingPage from "./components/LandingPage";
import JoinUs from "./components/JoinUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <JoinUs/>
    </div>
  );
};

export default Home;
