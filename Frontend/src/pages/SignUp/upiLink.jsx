import React from "react";
import { assets } from "./../../assets/assets";

const UPILink = ({ onBack, onComplete }) => {
  const handleComplete = () => {
    const upiDetails = {
      ifscCode: "SBIN622BBB",
      micrCode: "HYE7883",
      accountNumber: "836878374894849",
      linkingMethod: "upi",
    };
    onComplete(upiDetails);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Link bank account</h1>
      <p className="text-gray-600 mb-8">Step 6 of 9</p>

      <div className="grid grid-cols-2 gap-1">
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Scan QR Code</h2>
          <div className="w-full text-start">
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>
                ₹1 will be debited from your account and refunded within 24
                hours
              </li>
              <li>Please wait 24h to complete bank verification</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-48 h-48">
            <img
              src={assets.qr2}
              alt="QR Code"
              className="w-full h-full ml-5 object-contain"
            />
            <p className="text-sm text-gray-600 ml-11">
              Valid till: 04:46 minutes
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-14">
        <button onClick={onBack} className="text-teal-600 hover:text-teal-700">
          GO back →
        </button>
        <button
          onClick={handleComplete}
          className="bg-teal-800 text-white px-6 py-2 rounded hover:bg-teal-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default UPILink;
