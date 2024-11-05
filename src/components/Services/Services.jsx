import React from "react";
import { FaReact, FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../../assets/wave .gif";

const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for stronomical observation, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl"></FaReact>,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "300-1500km",
    description:
      ", it's a habitable artifical satelight orbiting Earth and serves as a space enviroment research laboratory",
    icon: <FaShuttleSpace className="text-7xl"></FaShuttleSpace>,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part  of the Global Positioning System (GPS) used for navigation",
    icon: <FaSpaceAwesome className="text-7xl"></FaSpaceAwesome>,
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white relative z-50">
      <div className="container mx-auto">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data, index) => (
              <div className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w[300px] mx-auto">
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
            src={wave}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
