import React, { useEffect } from "react";

const SPage11 = ({ formData, updateFormData, onNextStep }) => {
  // Add debugging
  useEffect(() => {
    console.log("Page 11 formData:", formData);
  }, [formData]);

  const occupations = [
    ["Professional", "Housewife", "Student"],
    ["Government Service", "Private Sector", "Retired"],
    ["Public Sector", "Business", "Others"],
  ];

  const handleOccupation = (occupation) => {
    console.log("Handling occupation selection:", occupation);
    const newData = {
      ...formData,
      occupation,
    };
    const isValid = !!(
      occupation && typeof formData.isPoliticallyExposed === "boolean"
    );
    console.log("Updating form data:", { ...newData, isValid });
    updateFormData({
      ...newData,
      isValid,
    });
  };

  const handlePoliticallyExposed = (value) => {
    console.log("Handling politically exposed selection:", value);
    const newData = {
      ...formData,
      isPoliticallyExposed: value,
    };
    const isValid = !!(formData.occupation && typeof value === "boolean");
    console.log("Updating form data:", { ...newData, isValid });
    updateFormData({
      ...newData,
      isValid,
    });
  };

  const handleContinue = () => {
    console.log("Continue clicked. Form data:", formData);
    if (formData.isValid) {
      console.log("Form is valid, calling onNextStep");
      onNextStep();
    } else {
      console.log("Form is not valid");
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Occupation Details</h2>
        <p className="text-gray-600">Step 5 of 9</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block font-medium">Occupation*</label>
          <div className="space-y-2">
            {occupations.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-3 gap-2">
                {row.map((occupation) => (
                  <button
                    key={occupation}
                    type="button"
                    onClick={() => handleOccupation(occupation)}
                    className={`p-2 border rounded-md ${
                      formData.occupation === occupation
                        ? "border-teal-800 bg-teal-800 text-white"
                        : "border-gray-300 hover:border-teal-800"
                    }`}
                  >
                    {occupation}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block font-medium">
            Are you a politically exposed person?*
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Yes", value: true },
              { label: "No", value: false },
            ].map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => handlePoliticallyExposed(option.value)}
                className={`p-2 border rounded-md ${
                  formData.isPoliticallyExposed === option.value
                    ? "border-teal-800 bg-teal-800 text-white"
                    : "border-gray-300 hover:border-teal-800"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
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

export default SPage11;
