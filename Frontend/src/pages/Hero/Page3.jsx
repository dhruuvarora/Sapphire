import React from "react";
import { assets } from "../../assets/assets";

const Page3 = () => {
  return (
    <div className="bg-[#E6F5F8] p-5 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <h1 className="text-black text-3xl  px-11 mb-5 font-bold text-left">
          Simplify your investments with our smart calculators!
        </h1>
        <div className="flex flex-wrap gap-11 px-10 mb-5">
          <button className="px-5 py-2 bg-white border-2 border-black rounded-full text-base cursor-pointer hover:bg-[#152F46] hover:text-white transition">
            SIP Calculator &gt;
          </button>
          <button className="px-5 py-2 bg-white border-2 border-black rounded-full text-base  cursor-pointer  hover:bg-[#152F46] hover:text-white transition">
            Margin Calculator &gt;
          </button>
          <button className="px-5 py-2 bg-white border-2 border-black rounded-full text-base  cursor-pointer  hover:bg-[#152F46] hover:text-white transition">
            Brokerage Calculator &gt;
          </button>
        </div>
        <p
          className="text-blue-500  px-11  hover:text-blue-700"
        >
          EXPLORE CALCULATORS &gt;
        </p>
      </div>
      <div>
        <img
          src={assets.calculator}
          alt="calculator"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Page3;
