import React from "react";
import { assets } from "./../assets/assets";

const Product = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <img
            src={assets.p_back}
            alt="Background Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex flex-col">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mt-11 mb-8">
              Revolutionizing the Way You Trade and Invest
            </h1>

            <div className="max-w-3xl mx-auto text-center mt-9 mb-9">
              <p className="text-xl md:text-3xl font-semibold text-gray-700">
                Discover advanced tools, expert-backed insights, and powerful
                platforms for unmatched performance.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button className="bg-white text-black border border-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors flex items-center">
                Start Trading Now
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-auto mb-8 flex justify-center">
            <button
              className="text-blue-600 hover:text-blue-700 flex items-center"
              onClick={() => {
                window.scrollBy({
                  top: window.innerHeight,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              Explore Products
              <svg
                className="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div>
          {/* Terminal */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-4">Terminal</h2>
              <p className="text-gray-600 text-2xl mb-4">
                Trade Seamlessly Across All Devices - A comprehensive trading
                platform at your fingertips— optimized for desktops, laptops,
                and tablets.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Learn more →
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg p-8">
                <img
                  src={assets.p1}
                  alt="Terminal Platform"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* FundStation */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-4">FundStation</h2>
              <p className="text-gray-600  text-2xl mb-4">
                A central station for mutual fund management - Explore, compare,
                and invest in top-performing mutual funds effortlessly with a
                user-friendly interface.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Learn more →
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg p-8">
                <img
                  src={assets.p2}
                  alt="FundStation Platform"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* AdminOps */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-4">AdminOps</h2>
              <p className="text-gray-600 text-2xl mb-4">
                Efficient Operations, Seamless Management - Streamline your
                brokerage processes with AdminOps - an advanced, comprehensive
                solution for managing operations, accounts, and compliance.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Learn more →
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg p-8">
                <img
                  src={assets.p3}
                  alt="AdminOps Platform"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Partner Platform */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-4">Partner Platform</h2>
              <p className="text-gray-600 text-2xl mb-4">
                Grow Together with a Powerful Partner Ecosystem - A dedicated
                platform for partners to expand their network, earn commissions,
                and collaborate seamlessly within the brokerage ecosystem.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Learn more →
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg p-8">
                <img
                  src={assets.p4}
                  alt="Partner Platform"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Partner's Terminal */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-4">Partner's Terminal</h2>
              <p className="text-gray-600 text-2xl mb-4">
                Manage Clients, Monitor Growth - Enhance your partnership with
                real-time insights, seamless client management, and performance
                tracking—all from a powerful, easy-to-use terminal.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Learn more →
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg p-8">
                <img
                  src={assets.p5}
                  alt="Partner's Terminal"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-teal-900 py-16 overflow-hidden">
        {/* Background Pattern Image */}
        <div className="absolute right-0 top-0 w-1/3">
          <img
            src={assets.arrow}
            alt=""
            className="ml-auto w-3/4 h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Ready to unlock new
            </h2>
            <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400  via-yellow-400 to-orange-600">
              revenue opportunities?
            </h2>

            <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Sign up
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
