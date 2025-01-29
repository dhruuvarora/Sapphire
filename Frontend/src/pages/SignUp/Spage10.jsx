import React, {useEffect} from "react";

const SPage10 = ({ formData, updateFormData, onNextStep }) => {
  useEffect(() => {
    console.log("Page 10 formData:", formData);
  }, [formData]);

  const handleIncome = (income) => {
    console.log("Handling income selection:", income);
    const newData = {
      ...formData,
      annualIncome: income,
    };
    const isValid = !!(
      income &&
      formData.tradingExperience &&
      formData.settlementPreference
    );
    console.log("Updated data:", { ...newData, isValid });
    updateFormData({
      ...newData,
      isValid,
    });
  };

  const handleExperience = (experience) => {
    console.log("Handling experience selection:", experience);
    const newData = {
      ...formData,
      tradingExperience: experience,
    };
    const isValid = !!(
      formData.annualIncome &&
      experience &&
      formData.settlementPreference
    );
    console.log("Updated data:", { ...newData, isValid });
    updateFormData({
      ...newData,
      isValid,
    });
  };

  const handleSettlement = (preference) => {
    console.log("Handling settlement selection:", preference);
    const newData = {
      ...formData,
      settlementPreference: preference,
    };
    const isValid = !!(
      formData.annualIncome &&
      formData.tradingExperience &&
      preference
    );
    console.log("Updated data:", { ...newData, isValid });
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
        <h2 className="text-2xl font-bold">Trading account details</h2>
        <p className="text-gray-600">Step 5 of 9</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block font-medium">Annual Income*</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              "< 1 Lakh",
              "1 - 5 Lacs",
              "5 - 10 Lacs",
              "10 - 25 Lacs",
              "25 - 1 Cr",
              "> 1Cr",
            ].map((income) => (
              <button
                key={income}
                type="button"
                onClick={() => handleIncome(income)}
                className={`p-2 border rounded-md text-sm ${
                  formData.annualIncome === income
                    ? "border-teal-800 bg-teal-800 text-white"
                    : "border-gray-300 hover:border-teal-800"
                }`}
              >
                {income}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Trading Experience*</label>
          <div className="grid grid-cols-4 gap-2">
            {["1 year", "1 - 5 years", "5 - 10 years", "10+ years"].map(
              (experience) => (
                <button
                  key={experience}
                  type="button"
                  onClick={() => handleExperience(experience)}
                  className={`p-2 border rounded-md text-sm ${
                    formData.tradingExperience === experience
                      ? "border-teal-800 bg-teal-800 text-white"
                      : "border-gray-300 hover:border-teal-800"
                  }`}
                >
                  {experience}
                </button>
              )
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block font-medium">
            Preference for running account settlement*
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["Quarterly", "Monthly"].map((preference) => (
              <button
                key={preference}
                type="button"
                onClick={() => handleSettlement(preference)}
                className={`p-2 border rounded-md ${
                  formData.settlementPreference === preference
                    ? "border-teal-800 bg-teal-800 text-white"
                    : "border-gray-300 hover:border-teal-800"
                }`}
              >
                {preference}
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

export default SPage10;
