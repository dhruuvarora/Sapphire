import React from "react";

const SPage9 = ({ formData, updateFormData, onNextStep }) => {
  const validateForm = (newData) => {
    const isValid =
      newData.maritalStatus &&
      newData.fathersName?.trim() &&
      newData.mothersName?.trim();

    updateFormData({
      ...newData,
      isValid,
    });
  };

  const handleMaritalStatus = (status) => {
    const newData = {
      ...formData,
      maritalStatus: status,
    };
    validateForm(newData);
  };

  const handleInputChange = (field, value) => {
    const newData = {
      ...formData,
      [field]: value,
    };
    validateForm(newData);
  };

  const handleSubmit = () => {
    if (formData.isValid) {
      onNextStep();
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
          <label className="block font-medium">Marital Status</label>
          <div className="flex space-x-3">
            {["Single", "Married", "Divorced"].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => handleMaritalStatus(status)}
                className={`px-6 py-2 border rounded transition-colors ${
                  formData.maritalStatus === status
                    ? "border-teal-800 bg-teal-800 text-white"
                    : "hover:border-teal-800"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Father's Name</label>
          <input
            type="text"
            value={formData.fathersName || ""}
            onChange={(e) => handleInputChange("fathersName", e.target.value)}
            className="w-full p-2 border rounded focus:border-teal-800 focus:ring-1 focus:ring-teal-800"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Mother's Name</label>
          <input
            type="text"
            value={formData.mothersName || ""}
            onChange={(e) => handleInputChange("mothersName", e.target.value)}
            className="w-full p-2 border rounded focus:border-teal-800 focus:ring-1 focus:ring-teal-800"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        type="button"
        disabled={!formData.isValid}
        className={`w-full py-3 rounded transition-colors ${
          formData.isValid
            ? "bg-teal-800 text-white hover:bg-teal-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Confirm
      </button>
    </div>
  );
};

export default SPage9;
