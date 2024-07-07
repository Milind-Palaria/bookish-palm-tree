import React from "react";
import HeroSection from "../components/HeroSection";
import BestSellers from "../components/BestSellers";
import LandingPage from "../components/LandingPage";

const Home2: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-black text-white lobster-regular">
      <LandingPage />
      <HeroSection />
      <BestSellers />
      {/* <CurrentBooks /> */}
    </div>
  );
}

export default Home2;
