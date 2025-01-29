import React, { useState } from "react";

const SPage16 = ({ formData, updateFormData, onNextStep }) => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasAccepted) {
      updateFormData({ isValid: true });
      onNextStep(); // Remove hardcoded step number
    }
  };

  return (
    <div className="space-y-6 pb-20">
      {" "}
      {/* Added bottom padding */}
      <div className="rounded-lg overflow-hidden">
        <img
          src="/api/placeholder/400/300"
          alt="Risk Disclosure"
          className="w-full object-cover"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Risk Disclosure</h3>
        <div className="space-y-3">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-600">
              Please review our risk disclosure document thoroughly before
              proceeding. Investment in securities market are subject to market
              risks. Please read all the related documents carefully before
              investing.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            {" "}
            {/* Changed to items-start */}
            <input
              type="checkbox"
              id="riskAcknowledgment"
              className="w-4 h-4 mt-1" /* Added margin top for alignment */
              checked={hasAccepted}
              onChange={(e) => {
                setHasAccepted(e.target.checked);
                updateFormData({ isValid: e.target.checked });
              }}
            />
            <label
              htmlFor="riskAcknowledgment"
              className="text-sm text-gray-600"
            >
              I have read and understood the risk disclosure document and I
              acknowledge and accept the risks involved in investing in
              securities markets.
            </label>
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!hasAccepted}
        className={`w-full py-3 rounded-lg ${
          hasAccepted
            ? "bg-teal-800 text-white hover:bg-teal-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default SPage16;
