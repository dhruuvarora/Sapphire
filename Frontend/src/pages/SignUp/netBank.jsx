import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { assets } from "../../assets/assets";

const NetBank = ({ onBack, onComplete }) => {
  const [selectedBank, setSelectedBank] = useState("");
  const [showAllBanks, setShowAllBanks] = useState(false);

  const popularBanks = [
    { id: "axis", name: "Axis Bank", logo: assets.axis },
    { id: "hdfc", name: "HDFC Bank", logo: assets.hdfc },
    { id: "icici", name: "ICICI Bank", logo: assets.icici },
    { id: "sbi", name: "State Bank of India", logo: assets.sbi },
  ];

  const handleBankSelection = (bankId) => {
    setSelectedBank(bankId);
  };

  const handleContinue = () => {
    if (selectedBank) {
      // Simulate bank payment process
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  const BankOption = ({ bank }) => (
    <div
      onClick={() => handleBankSelection(bank.id)}
      className={`flex items-center p-4 border rounded-lg cursor-pointer mb-3 ${
        selectedBank === bank.id
          ? "border-teal-800 bg-teal-50"
          : "hover:border-teal-800"
      }`}
    >
      <div className="w-6 h-6 border-2 border-teal-800 rounded-full flex items-center justify-center mr-4">
        {selectedBank === bank.id && (
          <div className="bg-teal-800 rounded-full h-4 w-4" />
        )}
      </div>
      <img src={bank.logo} alt={bank.name} className="w-8 h-8 mr-3" />
      <span className="text-lg">{bank.name}</span>
    </div>
  );

  return (
    <div className="w-full p-6">
      <button
        onClick={onBack}
        className="flex items-center text-teal-800 mb-6 hover:text-teal-600"
      >
        <ArrowLeft className="mr-2" size={20} />
        Go back
      </button>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pay using Net Banking</h2>
        <p className="text-gray-600">Select your bank to proceed</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">Popular Banks</h3>
        {popularBanks.map((bank) => (
          <BankOption key={bank.id} bank={bank} />
        ))}
      </div>

      <button
        onClick={() => setShowAllBanks(!showAllBanks)}
        className="text-teal-800 font-medium mb-6 hover:text-teal-600"
      >
        {showAllBanks ? "- Show less banks" : "+ View all banks"}
      </button>

      <button
        onClick={handleContinue}
        disabled={!selectedBank}
        className={`w-full py-4 rounded-lg text-white text-lg font-medium transition-colors ${
          selectedBank
            ? "bg-teal-800 hover:bg-teal-700"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default NetBank;
