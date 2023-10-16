import React from "react";
import Navbar from "../../components/Navbar";
import LandingPage from "./components/LandingPage";
import JoinUs from "./components/JoinUs";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <JoinUs/>
      <Footer/>
    </div>
  );
};

export default Home;
