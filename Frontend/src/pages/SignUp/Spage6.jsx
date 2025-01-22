import React from "react";

const SPage6 = ({ formData, updateFormData, onNextStep }) => {
  React.useEffect(() => {
    // Auto-validate since this is just a button page
    updateFormData({ isValid: true });
  }, []);

  const handleProceed = () => {
    onNextStep();
  };

  return (
    <div className="space-y-6 w-full">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          Aadhar Verification (DigiLocker)
        </h2>
        <p className="text-sm text-gray-500">Step 2 of 9</p>
      </div>

      <button
        onClick={handleProceed}
        className="w-full bg-teal-800 text-white py-3 rounded hover:bg-teal-700 transition-colors"
      >
        Proceed to DigiLocker
      </button>
    </div>
  );
};

export default SPage6;
