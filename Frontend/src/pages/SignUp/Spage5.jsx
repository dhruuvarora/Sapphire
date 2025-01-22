import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const SPage5 = ({ formData, updateFormData, onNextStep }) => {
  const [errors, setErrors] = useState({
    pan: "",
    dob: "",
  });

  const validatePAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan) && pan.length === 10; // Validate length of PAN too
  };

  const validateDOB = (dob) => {
    const dobDate = new Date(dob);
    const today = new Date();
    return dobDate && dobDate < today && dobDate.getFullYear() > 1900;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      pan: !validatePAN(formData.pan) ? "Please enter a valid PAN" : "",
      dob: !validateDOB(formData.dob)
        ? "Please enter a valid date of birth"
        : "",
    };

    setErrors(newErrors);

    if (!newErrors.pan && !newErrors.dob) {
      updateFormData({ isValid: true });
      onNextStep();
    }
  };

  const handleChange = (field, value) => {
    updateFormData({
      ...formData,
      [field]: value,
      isValid: false,
    });
    setErrors({ ...errors, [field]: "" });
  };

  const isFormValid = validatePAN(formData.pan) && validateDOB(formData.dob);

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl  font-bold">Enter your PAN to Continue</h1>
      <p className="text-gray-400 mb-5">step 1 of 9</p>
      <div>
        <label htmlFor="pan">PAN Number</label>
        <input
          id="pan"
          type="text"
          value={formData.pan || ""}
          onChange={(e) => handleChange("pan", e.target.value.toUpperCase())}
          className={`w-full mt-2 p-3 border ${
            errors.pan ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
          placeholder="Enter PAN"
          maxLength={10}
        />
        {errors.pan && <p className="text-red-500 text-sm">{errors.pan}</p>}
      </div>
      <div className="mb-7"></div>

      <div>
        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          value={formData.dob || ""}
          onChange={(e) => handleChange("dob", e.target.value)}
          className={`w-full mt-2 p-3 border ${
            errors.dob ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
          placeholder="DD/MM/YYYY"
        />
        {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
      </div>

      <motion.button
        type="submit"
        className={`w-full p-3 mt-10 ${
          isFormValid ? "bg-teal-500" : "bg-gray-400"
        } text-white font-semibold rounded-lg focus:outline-none`}
        disabled={!isFormValid} // Disable button if form is not valid
      >
        Continue
      </motion.button>
    </form>
  );
};

export default SPage5;
