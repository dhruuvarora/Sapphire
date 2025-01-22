import React from "react";
import { assets } from "./../../assets/assets";

const SPage12 = ({ formData, updateFormData, onSelectMethod }) => {
  const handleMethodSelect = (method) => {
    updateFormData({
      ...formData,
      linkingMethod: method,
      isValid: true,
    });
  };

  const handleContinue = () => {
    if (formData.linkingMethod) {
      onSelectMethod(formData.linkingMethod); // This will trigger the navigation
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Link bank account</h2>
        <p className="text-gray-600">Step 6 of 9</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => handleMethodSelect("upi")}
          className={`p-6 border rounded-lg flex flex-col items-center justify-center space-y-4 ${
            formData.linkingMethod === "upi"
              ? "border-teal-800"
              : "border-gray-300 hover:border-teal-800"
          }`}
        >
          <img src={assets.UPIBlack} alt="UPI" />
          <div className="text-2xl font-bold">Link with UPI</div>
          <div className="text-sm font-bold text-gray-500">(Recommended)</div>
        </button>

        <button
          type="button"
          onClick={() => handleMethodSelect("bank")}
          className={`p-6 border rounded-lg flex flex-col items-center justify-center space-y-4 ${
            formData.linkingMethod === "bank"
              ? "border-teal-800"
              : "border-gray-300 hover:border-teal-800"
          }`}
        >
          <img src={assets.blackbank} alt="Bank" />
          <div className="text-sm text-black font-bold">
            Enter bank details manually
          </div>
        </button>
      </div>

      <button
        onClick={handleContinue}
        disabled={!formData.isValid}
        className={`w-full py-3 rounded ${
          formData.isValid
            ? "bg-teal-800 text-white hover:bg-teal-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default SPage12;
