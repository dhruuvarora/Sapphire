import React from "react";

const SPage8 = ({ formData, updateFormData, onNextStep }) => {
  const handleSegmentSelect = (segment) => {
    const updatedSegments = formData.selectedSegments?.includes(segment)
      ? formData.selectedSegments.filter((s) => s !== segment)
      : [...(formData.selectedSegments || []), segment];

    updateFormData({
      selectedSegments: updatedSegments,
      isValid: updatedSegments.length > 0,
    });
  };

  const handleNext = () => {
    if (formData.isValid) {
      onNextStep();
    }
  };

  return (
    <div className="space-y-6 w-full">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          Choose your investment segment
        </h2>
        <p className="text-sm text-gray-500">Step 4 of 9</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          "Cash/Mutual Funds",
          "F&O",
          "Debt",
          "Currency",
          "Commodity Derivatives",
        ].map((segment) => (
          <button
            key={segment}
            onClick={() => handleSegmentSelect(segment)}
            type="button"
            className={`border p-4 rounded text-left transition-colors ${
              formData.selectedSegments?.includes(segment)
                ? "border-teal-800 bg-teal-800 text-white"
                : "hover:border-teal-800"
            }`}
          >
            {segment}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        type="button"
        disabled={!formData.isValid}
        className={`w-full py-3 rounded transition-colors ${
          formData.isValid
            ? "bg-teal-800 text-white hover:bg-teal-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default SPage8;
