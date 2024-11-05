import React from "react";
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <div className="h-[700px] relative">
        <video autoPlay loop muted
        className="fixed right-0 top-0 h-[700px] w-full object-cover"
        src={bgVideo}></video>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>

      {/* services Card Section */}
      <Services></Services>
    </div>
  );
};

export default App;
