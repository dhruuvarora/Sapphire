import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Page7 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I open a trading and Demat account with your firm?",
      answer:
        "To open a trading and Demat account, visit our website or branch, fill out the application form, and submit KYC documents (Identity, Address, and Income Proof).",
    },
    {
      question: "What services do you offer?",
      answer:
        "We provide stock broking, mutual fund distribution, portfolio management, insurance solutions, and expert financial advisory.",
    },
    {
      question: "Are my investments safe with your firm?",
      answer:
        "Yes, your investments are safe with our firm, as we adhere to strict regulatory standards and employ robust security measures to protect your assets.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-teal-800 text-4xl font-bold text-center mb-4">
        Frequently Asked Questions (FAQs)
      </h1>
      <p className="text-gray-500 text-center mb-8 text-lg">
        Your Guide to Understanding Our Stock Brokerage Services
      </p>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-black py-6 flex justify-between items-start"
        >
          <div className="flex-1">
            <h2
              className="text-xl font-semibold cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </h2>
            {activeIndex === index && faq.answer && (
              <p className="text-gray-600 mt-3 text-lg">{faq.answer}</p>
            )}
          </div>
          <button
            onClick={() => toggleFAQ(index)}
            className="text-3xl font-bold text-gray-600"
          >
            <img
              src={activeIndex === index ? assets.cross : assets.plus}
              alt={activeIndex === index ? "Close FAQ" : "Open FAQ"}
              className="h-8 w-8"
            />
          </button>
        </div>
      ))}
      <div className="text-center mt-8">
        <button className="px-8 py-3 border border-black rounded-full text-gray-600 font-bold hover:bg-[#152F46] hover:text-white transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default Page7;
