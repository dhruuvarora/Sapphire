import React, { useEffect } from "react";

const SPage7 = ({ formData, updateFormData, onNextStep }) => {
  // Dummy data to simulate API response
  const dummyKycData = {
    username: "John Doe",
    fathersName: "Michael Doe",
    dob: "1990-05-15",
    gender: "Male",
    email: "john.doe@example.com",
    address: "123 Main Street, Apartment 4B, New York, NY 10001",
  };

  // Initialize form with dummy data only if data doesn't exist
  useEffect(() => {
    if (!formData.username) {
      // Check if data is not already present
      updateFormData({
        ...formData,
        ...dummyKycData,
        isValid: formData.selectedAddress ? true : false, // Maintain validity based on address selection
      });
    }
  }, []);

  const handleAddressSelect = (type) => {
    const newData = {
      ...formData,
      selectedAddress: type,
      isValid: true,
    };
    updateFormData(newData);
  };

  // Use actual form data instead of dummy data for display
  const displayData = {
    username: formData.username || dummyKycData.username,
    fathersName: formData.fathersName || dummyKycData.fathersName,
    dob: formData.dob || dummyKycData.dob,
    gender: formData.gender || dummyKycData.gender,
    email: formData.email || dummyKycData.email,
    address: formData.address || dummyKycData.address,
  };

  return (
    <div className="space-y-6 w-full">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          Your details as fetched from the registered KYC:
        </h2>
        <p className="text-sm text-gray-500">Step 3 of 9</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border p-3 rounded">
          <p className="text-sm text-gray-500">Username</p>
          <p className="font-medium">{displayData.username}</p>
        </div>
        <div className="border p-3 rounded">
          <p className="text-sm text-gray-500">Father's Name</p>
          <p className="font-medium">{displayData.fathersName}</p>
        </div>
        <div className="border p-3 rounded">
          <p className="text-sm text-gray-500">Date of Birth</p>
          <p className="font-medium">{displayData.dob}</p>
        </div>
        <div className="border p-3 rounded">
          <p className="text-sm text-gray-500">Gender</p>
          <p className="font-medium">{displayData.gender}</p>
        </div>
        <div className="border p-3 rounded">
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{displayData.email}</p>
        </div>
        <div className="border p-3 rounded">
          <p className="text-sm text-gray-500">Address</p>
          <p className="font-medium">{displayData.address}</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium">Choose your address:</p>
        <div className="space-y-2">
          <button
            type="button"
            className={`w-full border py-2 rounded ${
              formData.selectedAddress === "kyc"
                ? "border-teal-800 bg-teal-800 text-white"
                : "border-teal-800 text-teal-800"
            }`}
            onClick={() => handleAddressSelect("kyc")}
          >
            As per KYC registered records
          </button>
          <button
            type="button"
            className={`w-full border py-2 rounded ${
              formData.selectedAddress === "aadhar"
                ? "border-teal-800 bg-teal-800 text-white"
                : "border-teal-800 text-teal-800"
            }`}
            onClick={() => handleAddressSelect("aadhar")}
          >
            As per my Aadhaar
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          if (formData.isValid) {
            onNextStep();
          }
        }}
        disabled={!formData.isValid}
        className={`w-full py-3 rounded transition-colors ${
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

export default SPage7;
