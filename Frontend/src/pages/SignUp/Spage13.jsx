import React from "react";

const SPage13 = ({ formData, onNextStep, onPrevStep, onEditBank }) => {
  const displayDetails = formData?.bankDetails || {
    ifscCode: "SBIN622BBB",
    micrCode: "HYE7883",
    accountNumber: "836878374894849",
    linkingMethod: "upi",
  };

  const isManualEntry = displayDetails.linkingMethod === "manual";

  const handleEditClick = () => {
    onEditBank && onEditBank("bank");
  };

  const handleContinue = () => {
    console.log("Attempting to navigate to next page");
    onNextStep(); // Make sure this is being called
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Link bank account</h1>
      <p className="text-gray-600 mb-8">Step 6 of 9</p>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">IFSC Code</span>
            <div className="flex items-center">
              <span className="mr-2">{displayDetails.ifscCode}</span>
              {isManualEntry && (
                <button
                  onClick={handleEditClick}
                  className="text-blue-600 hover:text-blue-700"
                >
                  edit
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">MICR Code</span>
            <span>{displayDetails.micrCode}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">A/c Number</span>
            <span>{displayDetails.accountNumber}</span>
          </div>

          {!isManualEntry && (
            <div className="mt-4 bg-gray-100 p-4 rounded">
              <p className="text-sm text-gray-600">
                Bank details verified via UPI
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleContinue}
            className="bg-teal-800 w-full text-white px-6 py-2 rounded hover:bg-teal-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SPage13;
