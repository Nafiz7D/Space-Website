import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold uppercase">Orbite The Earth</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ea
              dolorem eius accusamus beatae.Nulla quis beatae quo, possimus
              tempora similique dignissimos repellat aperiam venial culpa
              consequatur repudiandae asperiores saepe
            </p>
            <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200">
              Learn More
            </button>
          </div>
          <div></div>
        </div>
      </div>
      {/* surgace section */}
      <img
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
        src={MountainPng}
        alt=""
      />
      {/* bottom gradient section */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
