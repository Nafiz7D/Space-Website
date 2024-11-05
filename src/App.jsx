import React from "react";
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <div className="h-[700px] relative">
        <video autoPlay loop muted
        className="fixed right-0 top-0 h-[700[px] w-full object-cover z-[-1]"
        src={bgVideo}></video>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default App;
