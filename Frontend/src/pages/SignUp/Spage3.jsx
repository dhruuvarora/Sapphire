import React, { useState } from "react";
import { assets } from "../../assets/assets";

const PaymentOption = ({ label, icon, isSelected, onClick, cardLogos }) => (
  <div
    onClick={onClick}
    className={`flex items-center p-4 mb-4 border rounded-lg cursor-pointer transition-colors ${
      isSelected ? "border-teal-800 bg-teal-50" : "hover:border-teal-800"
    }`}
  >
    <div className="w-6 h-6 border-2 border-teal-800 rounded-full flex items-center justify-center mr-4">
      {isSelected && <div className="bg-teal-800 rounded-full h-4 w-4" />}
    </div>
    <span className="text-xl flex-grow">{label}</span>
    <div className="flex items-center gap-2">
      {cardLogos &&
        cardLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`${label} logo`}
            className="h-6 object-contain"
          />
        ))}
      {icon && (
        <img
          src={icon}
          alt={`${label} icon`}
          className="h-6 w-6 object-contain"
        />
      )}
    </div>
  </div>
);

const SPage3 = ({ formData, updateFormData, onNextStep }) => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
    updateFormData({ selectedPayment: method, isValid: true });
  };

  const handleProceedToPay = () => {
    if (selectedPayment) {
      onNextStep(selectedPayment);
    }
  };

  return (
    <div className="w-full py-12">
      <h1 className="text-4xl font-bold mb-2">
        Unlock Your Trading Potential - Get Started for
      </h1>
      <h2 className="text-4xl font-bold text-yellow-500 mb-12">
        Just ₹99/- only
      </h2>

      <div className="mb-8">
        <h3 className="text-2xl font-medium mb-6">
          Choose your payment option
        </h3>

        <PaymentOption
          label="Debit/Credit Card"
          isSelected={selectedPayment === "card"}
          onClick={() => handlePaymentSelection("card")}
          cardLogos={[assets.visa]}
        />

        <PaymentOption
          label="UPI"
          icon={assets.upi}
          isSelected={selectedPayment === "upi"}
          onClick={() => handlePaymentSelection("upi")}
        />

        <PaymentOption
          label="Net Banking"
          icon={assets.nbank}
          isSelected={selectedPayment === "netbanking"}
          onClick={() => handlePaymentSelection("netbanking")}
        />
      </div>

      <button
        onClick={handleProceedToPay}
        className={`w-full py-4 rounded-lg text-white text-lg font-medium transition-colors ${
          selectedPayment
            ? "bg-teal-800 hover:bg-teal-700"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!selectedPayment}
      >
        Proceed to pay
      </button>
    </div>
  );
};

export default SPage3;
