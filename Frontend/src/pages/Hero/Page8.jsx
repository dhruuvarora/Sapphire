import React from "react";
import { assets } from "../../assets/assets";

const Page8 = () => {
  return (
    <div className="bg-gradient-to-b from-white to-teal-600/70 p-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16">
            <img
              src={assets.service}
              alt="Support icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-2 px-5">
            <h2 className="text-3xl font-semibold">
              Get Support Anytime, Anywhere
            </h2>
            <p className="text-gray-600">
              We're just a call, email, or message away to help you with your
              trading journey.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-black font-semibold">Have any queries?</p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 flex items-center gap-1"
              >
                Contact Support
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12h6M15 9l3 3-3 3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button className="bg-[#152F46] text-white px-6 py-2 rounded-full hover:bg-[#1A3B59] transition-colors duration-200">
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default Page8;
