import React from "react";
import { assets } from "../../assets/assets";

const Page1 = () => {
  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-16">
      <div className="flex-1 max-w-xl">
        <h1 className="text-5xl font-bold mb-4">
          Redefining How You <span className="text-blue-900">Invest</span>
        </h1>
        <p className="text-black text-xl mb-8">
          Real-time trading, insightful analytics, and unmatched support—your
          portfolio deserves it.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 flex items-center max-w-md rounded-lg border border-gray-300 overflow-hidden">
              <div className="flex items-center px-3 bg-white border-r border-gray-300">
                <img
                  src={assets.INDIA}
                  alt="India flag"
                  className="mr-2 w-6 h-4"
                />
                <span className="text-sm">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="flex-1 px-4 py-3 outline-none"
                pattern="[0-9]{10}"
                maxLength={10}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </div>

            <button className="bg-[#152F46] text-white px-6 py-3 rounded-full hover:bg-[#1A3B59] transition-colors duration-200 font-medium">
              SIGNUP NOW
            </button>
          </div>

          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Login Here
            </a>
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img
          src={assets.hero}
          alt="Investment illustration"
          className="w-full max-w-lg"
        />
      </div>
    </div>
  );
};

export default Page1;
