import React, { useState } from "react";

const BankLink = ({ onBack, onComplete }) => {
  const [formData, setFormData] = useState({
    ifscCode: "",
    micrCode: "",
    accountNumber: "",
    reAccountNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.ifscCode) newErrors.ifscCode = "IFSC Code is required";
    if (!formData.micrCode) newErrors.micrCode = "MICR Code is required";
    if (!formData.accountNumber)
      newErrors.accountNumber = "Account Number is required";
    if (formData.accountNumber !== formData.reAccountNumber) {
      newErrors.reAccountNumber = "Account numbers do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const bankDetails = {
        ifscCode: formData.ifscCode,
        micrCode: formData.micrCode,
        accountNumber: formData.accountNumber,
        linkingMethod: "manual",
      };
      onComplete(bankDetails);
    }
  };

  const micrCodes = [
    { value: "", label: "Select" },
    { value: "HYE7883", label: "HYE7883" },
    { value: "MUM7884", label: "MUM7884" },
    { value: "DEL7885", label: "DEL7885" },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Link bank account</h1>
      <p className="text-gray-600 mb-8">Step 6 of 9</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">IFSC Code*</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500"
            placeholder="Enter IFSC Code"
          />
          {errors.ifscCode && (
            <p className="text-red-500 text-sm mt-1">{errors.ifscCode}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">MICR Code*</label>
          <select
            name="micrCode"
            value={formData.micrCode}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500"
          >
            {micrCodes.map((code) => (
              <option key={code.value} value={code.value}>
                {code.label}
              </option>
            ))}
          </select>
          {errors.micrCode && (
            <p className="text-red-500 text-sm mt-1">{errors.micrCode}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">A/c Number*</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500"
            placeholder="Enter Account Number"
          />
          {errors.accountNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Re-enter A/c Number*
          </label>
          <input
            type="text"
            name="reAccountNumber"
            value={formData.reAccountNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500"
            placeholder="Re-enter Account Number"
          />
          {errors.reAccountNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.reAccountNumber}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={onBack}
            className="text-teal-600 hover:text-teal-700"
          >
            GO Back →
          </button>
          <button
            type="submit"
            className="bg-teal-800 text-white px-6 py-2 rounded hover:bg-teal-700"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BankLink;
