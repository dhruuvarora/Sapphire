import React from "react";
import { assets } from "../../assets/assets";

const FinancialGuides = () => {
  const guides = [
    {
      title: "Create a Budget & Reports",
      level: "Beginner",
    },
    {
      title: "Understand Credit Scores",
      level: "Beginner",
    },
    {
      title: "Start Investing in Stocks",
      level: "Beginner",
    },
  ];

  return (
    <div className="bg-[#E6F5F8] p-8">
      <div className="max-w-6xl  mx-auto">
        {/* Header Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-[#E6F5F8]">Financial </h1>
          </div>
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold mb-2">
              How-to Guides for{" "}
              <span className="text-teal-600">Financial Success</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn at your own pace with beginner to expert resources.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0">
            <img src={assets.phone} alt="Illustration" className="w-32" />
          </div>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-teal-900 via-teal-600 to-teal-400 text-white p-6 rounded-xl relative overflow-hidden shadow-lg min-h-[200px] flex flex-col"
            >
              {/* Content container */}
              <div className="relative z-10 flex-1">
                {/* Header section with icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <span className="text-lg">How to</span>
                    <span className="text-xl ml-2">→</span>
                  </div>
                </div>

                {/* Title section */}
                <div className="max-w-[60%]">
                  <h3 className="text-xl font-semibold w-1/2 ">
                    {guide.title}
                  </h3>
                </div>
              </div>

              {/* Level indicator - fixed at bottom */}
              <div className="relative z-10 mt-5">
                <div className="inline-block bg-[#152F46] px-4 py-1 rounded-full">
                  {guide.level}
                </div>
              </div>

              {/* Side image positioned on the right */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-20 h-20">
                <img
                  src={assets.yellow}
                  alt={guide.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Centered play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={assets.play} alt="Play icon" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div>
          <p className="mb-2 text-black">Want to explore more insights?</p>
          <p className="text-sm mb-4 text-gray-500">
            Watch our complete video library for market trends, financial tips,
            and product tutorials.
          </p>
          <button className="text-blue-500 flex items-center gap-2 hover:text-blue-600 transition-colors">
            Explore More Videos
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialGuides;
