import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NomineeForm = ({ onSubmit }) => {
  const [nomineeData, setNomineeData] = useState({
    name: "",
    relationship: "",
    dob: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nomineeData);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="mt-6 p-4 border rounded-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nominee Name
          </label>
          <input
            type="text"
            value={nomineeData.name}
            onChange={(e) =>
              setNomineeData({ ...nomineeData, name: e.target.value })
            }
            className="mt-1 w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Relationship with Nominee
          </label>
          <input
            type="text"
            value={nomineeData.relationship}
            onChange={(e) =>
              setNomineeData({ ...nomineeData, relationship: e.target.value })
            }
            className="mt-1 w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            value={nomineeData.dob}
            onChange={(e) =>
              setNomineeData({ ...nomineeData, dob: e.target.value })
            }
            className="mt-1 w-full border rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-teal-800 text-white rounded hover:bg-teal-700"
        >
          Add Nominee
        </button>
      </form>
    </motion.div>
  );
};

const SPage15 = ({ formData, updateFormData, onNextStep }) => {
  const [selectedOption, setSelectedOption] = useState(
    formData.nomineeOption || ""
  );
  const [showNomineeForm, setShowNomineeForm] = useState(
    formData.nomineeOption === "add"
  );

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowNomineeForm(option === "add");
    updateFormData({
      nomineeOption: option,
      nomineeData: null,
      isValid: option === "skip", // Set isValid to true immediately for skip option
    });
  };

  const handleNomineeSubmit = (nomineeData) => {
    updateFormData({
      nomineeOption: "add",
      nomineeData,
      isValid: true,
    });
    onNextStep(); // Remove the hard-coded step number
  };

  const handleContinue = () => {
    if (selectedOption === "skip") {
      onNextStep(); // Remove the hard-coded step number
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Nominees</h2>
      <p className="text-gray-600 mb-4">Step 8 of 9</p>

      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          You can add up to 5 nominee(s) to your account. Adding nominees makes
          the claim process simple in case of unforeseen events.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            value="add"
            checked={selectedOption === "add"}
            onChange={() => handleOptionSelect("add")}
            className="form-radio text-teal-800"
          />
          <span>Add Nominee Now (recommended)</span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="radio"
            value="skip"
            checked={selectedOption === "skip"}
            onChange={() => handleOptionSelect("skip")}
            className="form-radio text-teal-800"
          />
          <span>Skip for Now</span>
        </label>
      </div>

      <AnimatePresence mode="wait">
        {showNomineeForm ? (
          <NomineeForm onSubmit={handleNomineeSubmit} />
        ) : (
          <button
            onClick={handleContinue}
            disabled={!selectedOption || selectedOption === "add"}
            className={`w-full py-2 px-4 rounded ${
              selectedOption === "skip"
                ? "bg-teal-800 text-white hover:bg-teal-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SPage15;
