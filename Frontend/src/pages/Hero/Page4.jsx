import React from "react";
import { assets } from "../../assets/assets";

const Page4 = () => {
  const assetsList = {
    stock: assets.stock,
    mf: assets.mf,
    fo: assets.fo,
    commo: assets.commo,
    iop: assets.iop,
    USA: assets.USA,
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4">
          Your Gateway to Smart Investing
        </h1>
        <p className="text-black font-semibold text-xl">
          Highlighted features that simplify and enhance the investing
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Stocks", image: assetsList.stock },
          { title: "Mutual Fund", image: assetsList.mf },
          { title: "F&O", image: assetsList.fo },
          { title: "Commodities", image: assetsList.commo },
          { title: "IPO", image: assetsList.iop },
          { title: "US Stocks", image: assetsList.USA },
        ].map((item, index) => (
          <div key={index} className="p-4">
            {/* Wrap both cards in a group container */}
            <div className="relative w-64 h-50 group">
              {/* Yellow background with hover effect controlled by group */}
              <div className="absolute bottom-0 w-full h-28 bg-yellow-400 rounded-lg transform-gpu transition-transform duration-500 ease-in-out origin-top group-hover:-rotate-12" />

              {/* Main card that moves up on group hover */}
              <div className="relative -top-2">
                {/* Main card content */}
                <div className="bg-gray-100 rounded-lg p-6 shadow-md h-full flex flex-col justify-between transform-gpu transition-all duration-500 ease-in-out group-hover:-translate-y-4">
                  <div className="flex flex-col items-start space-y-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="transition-all duration-300"
                    />
                    <h3 className="text-3xl font-serif transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-200">
                      Trade seamlessly and build your portfolio with confidence.
                    </p>
                  </div>
                </div>

                {/* Overlay that appears on group hover */}
                <div className="absolute inset-0 bg-teal-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-start p-6 space-y-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="text-white"
                  />
                  <h3 className="text-3xl font-serif text-white">
                    {item.title}
                  </h3>
                  <button className="px-5 py-2 border border-gray-900 rounded-full bg-white text-gray-900 text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
