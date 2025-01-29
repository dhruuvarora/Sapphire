import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { assets } from "../assets/assets";

const SearchResult = ({ icon, name, symbol, type, isLast }) => (
  <div>
    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer">
      <div className="w-6 h-6">
        {icon === "up" ? (
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-green-500" />
          </div>
        ) : icon === "down" ? (
          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-red-500" />
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-gray-500" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium">{name}</h4>
        <p className="text-xs text-gray-500">{symbol}</p>
      </div>
      <span className="text-sm text-gray-500">{type}</span>
    </div>
    {!isLast && (
      <div className="mx-8">
        <div className="h-px bg-gray-200" />
      </div>
    )}
  </div>
);

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchResults = [
    {
      name: "Tata Motors Ltd.",
      symbol: "TATAMOTORS",
      type: "Stock",
      icon: "up",
    },
    { name: "ITI Ltd.", symbol: "ITI", type: "Stock", icon: "neutral" },
    {
      name: "Avenue Supermart Ltd",
      symbol: "DMART",
      type: "Stock",
      icon: "down",
    },
    { name: "Zomato Ltd.", symbol: "ZOMATO", type: "Stock", icon: "neutral" },
  ];

  return (
    <div className="flex items-center justify-between px-12 py-3 font-medium relative">
      {/* Logo Section */}
      <div className="flex-shrink-0 w-48">
        <Link to="/">
          <img src={assets.logo} className="w-28" alt="Shop Logo" />
        </Link>
      </div>

      {/* Navigation Links - Centered */}
      <div className="flex-1 flex justify-center">
        <div className="flex flex-row items-center gap-16">
          <Link to="/about" className="text-black">
            ABOUT
          </Link>
          <Link to="/product" className="text-black">
            PRODUCT
          </Link>
          <Link to="/pricing" className="text-black">
            PRICING
          </Link>
          <Link to="/support" className="text-black">
            SUPPORT
          </Link>
        </div>
      </div>

      {/* Search and Auth Section */}
      <div className="flex-shrink-0 flex items-center gap-6">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search Stock,Mf..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-gray-300 bg-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 hover:border-gray-400"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={(e) => {
              setTimeout(() => setIsSearchFocused(false), 200);
            }}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />

          {/* Search Dropdown - Now with fixed width */}
          {isSearchFocused && (
            <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
              {/* Filter Buttons */}
              <div className="flex gap-2 p-3 border-b border-gray-200">
                <button className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-medium transition-colors hover:bg-blue-200">
                  All
                </button>
                <button className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium transition-colors hover:bg-gray-50">
                  Stocks
                </button>
                <button className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium transition-colors hover:bg-gray-50">
                  MF
                </button>
                <button className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium transition-colors hover:bg-gray-50">
                  F & O
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-64 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <SearchResult 
                    key={index} 
                    {...result} 
                    isLast={index === searchResults.length - 1}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <Link
          to="/signup"
          className="bg-[#152F46] text-white px-6 py-2 rounded-full hover:bg-[#1A3B59] transition-colors duration-200"
        >
          LOGIN/SIGNUP
        </Link>
      </div>
    </div>
  );
};

export default Navbar;