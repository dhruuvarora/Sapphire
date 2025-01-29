import React, { useState } from "react";
import { assets } from "../../assets/assets";

const PricingCard = ({ type, price, subtitle, description, hoverContent, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white p-6 border border-black rounded-3xl shadow-lg transition-all duration-300 relative h-[400px]" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Content */}
      <div className={`h-full transition-opacity duration-300 ease-in-out ${
        isHovered ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="flex justify-between items-start">
          <div>
            <span className="px-6 py-2 rounded-full border-2 border-black text-teal-600 text-sm">
              {type}
            </span>
            <div className="mt-8 flex items-baseline">
              <span className="text-7xl font-bold text-gray-800">₹{price}</span>
              {price !== "0" && <span className="text-4xl text-gray-800">*</span>}
            </div>
            <p className="text-2xl text-gray-600 mt-2">{subtitle}</p>
            {description && (
              <p className="text-sm text-gray-500 mt-4">{description}</p>
            )}
          </div>
          <img src={icon} alt={`${type} icon`} className="" />
        </div>
        <div className="mt-24">
          <div className="text-blue-500 flex items-center">
            {type === "Opening" ? "Get Started" : 
             type === "Brokerage" ? "View Brokerage Plans" :
             type === "Security" ? "Learn About Our Policies" : "Learn More"}
            <span className="ml-2">→</span>
          </div>
        </div>
      </div>

      {/* Hover Content */}
      <div className={`absolute inset-0 bg-gradient-to-b from-[#0EAEB7] to-[#064D51] text-white p-8 rounded-3xl transition-all duration-300 ease-in-out ${
        isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div>
          <div className="flex items-baseline mb-2">
            <span className="text-5xl font-bold">₹{price}</span>
            <span className="text-2xl ml-2">{subtitle}</span>
          </div>
          <p className="text-base mb-2 leading-relaxed">{hoverContent.description}</p>
          <ul className="space-y-3">
            {hoverContent.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Page2 = () => {
  const cardData = [
    {
      type: "Opening",
      price: "99",
      subtitle: "Account Opening",
      description:"Open an account in just a few clicks! and Immerse yourself in real-time trading",
      icon: assets.bank,
      hoverContent: {
        description: "Enjoy a fast, hassle-free signup process and unlock access to a world of investment opportunities without any upfront cost.",
        features: [
          "No paperwork required – 100% online process",
          "Instant KYC verification",
          "Start trading in just a few minutes"
        ]
      }
    },
    {
      type: "Maintenance",
      price: "0",
      subtitle: "Maintenance",
      description: "Say goodbye to annual/monthly fees and maintenance charges",
      icon: assets.maintenance,
      hoverContent: {
        description: "Enjoy a completely maintenance-free account for first 3 months. Later on ₹25 + GST will be charged as AMC. Unlike traditional brokers that charge yearly account maintenance fees, we let you trade and decide first.",
        features: [
          "Zero AMC for first Three months",
          "No hidden renewal fees – Complete transparency"
        ]
      }
    },
    {
      type: "Brokerage",
      price: "20",
      subtitle: "for all trades",
      description: "Enjoy flat brokerage on every order and trade with no hidden costs.",
      icon: assets.broker,
      hoverContent: {
        description: "Experience a simple and transparent pricing structure. Pay a flat ₹20 or 0.1% of order value per order (whichever is lower) capped minimum to ₹2.5 for all your trades.",
        features: [
          "Flat fee per executed order",
          "No hidden charges, ever",
          "Works for intraday, delivery, F&O, and commodities"
        ]
      }
    },
    {
      type: "Security",
      price: "0",
      subtitle: "Hidden Charges",
      description: "Trade with confidence knowing there are no extra fees or hidden charges.",
      icon: assets.fund,
      hoverContent: {
        description: "Your security is our top priority. We ensure that your personal data and funds are fully protected with industry-leading encryption and multi-layer security protocols.",
        features: [
          "Bank-grade encryption to protect your personal information",
          "Two-factor authentication (2FA) for added account security",
          "SEBI-registered broker with strict compliance standards"
        ]
      }
    }
  ];

  return (
    <div className="container mx-auto px-14 py-5">
      <div className="flex justify-between items-start gap-16">
        <div>
          <img src={assets.coin} alt="Rupee coins" className="w-2/3 h-full" />
          <h1 className="text-4xl font-bold leading-tight mb-2">
            Transparent Pricing
          </h1>
          <h1 className="text-4xl font-bold leading-tight mb-2">
            With <span className="text-teal-600">No Hidden Charges</span>
          </h1>
          <p className="text-2xl text-gray-700 mb-6">
            Place trades at just ₹20 per order
          </p>
          <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-full text-lg hover:bg-teal-900 hover:text-white transition-colors">
            View Pricing
          </button>
        </div>

        <div className="w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardData.map((card, index) => (
              <PricingCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;