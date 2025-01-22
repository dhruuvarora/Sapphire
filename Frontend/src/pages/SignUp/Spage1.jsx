import React from "react";

const SPage1 = ({ formData, updateFormData, onNextStep }) => {
  const handleOtpChange = (index, value) => {
    if (/^[0-9]{0,1}$/.test(value)) {
      const newOtp = [...formData.otp];
      newOtp[index] = value;

      updateFormData({
        otp: newOtp,
        isValid:
          formData.mobileNumber.length === 10 &&
          newOtp.every((digit) => digit !== ""),
      });

      if (value && index < formData.otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace") {
      const newOtp = [...formData.otp];

      if (newOtp[index] !== "") {
        newOtp[index] = "";
        updateFormData({
          otp: newOtp,
          isValid:
            formData.mobileNumber.length === 10 &&
            newOtp.every((digit) => digit !== ""),
        });
      } else if (index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    updateFormData({
      mobileNumber: value,
      mobileError: false,
      isValid:
        value.length === 10 && formData.otp.every((digit) => digit !== ""),
    });
  };

  const handleGetOtp = () => {
    if (formData.mobileNumber.length === 10) {
      updateFormData({
        otpVisible: true,
        otpSent: true,
        mobileError: false,
      });
    } else {
      updateFormData({
        mobileError: true,
      });
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-4">Hi, Welcome to Sapphire!</h1>
      <p className="text-gray-600 mb-8">
        Get started in just a few easy steps!
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formData.isValid) onNextStep();
        }}
      >
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Mobile Number</label>
          <div className="flex w-full">
            <div className="border rounded-s-md px-3 py-2">+91</div>
            <input
              type="tel"
              className="flex-1 border rounded-e-md px-4 py-2"
              placeholder="Your 10 digit mobile number"
              value={formData.mobileNumber}
              onChange={handleMobileNumberChange}
              maxLength="10"
              pattern="[0-9]{10}"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
          </div>
          {formData.mobileError && (
            <p className="text-red-500 mt-2">
              Please enter a valid 10-digit mobile number.
            </p>
          )}
          <div className="flex justify-end space-x-4 mt-2">
            <button
              type="button"
              className="text-blue-500 hover:text-blue-600"
              onClick={handleGetOtp}
            >
              Get OTP →
            </button>
            {formData.otpSent && (
              <button
                type="button"
                className="text-blue-500 hover:text-blue-600"
              >
                Resend
              </button>
            )}
          </div>
        </div>

        {formData.otpVisible && (
          <div className="mb-8 transition-opacity duration-500 ease-in-out">
            <label className="block text-gray-700 mb-2">OTP</label>
            <div className="flex gap-4 justify-between w-full max-w-md">
              {formData.otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="tel"
                  name={`otp-${index}`}
                  className="w-14 h-14 border rounded-md text-center text-lg"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleBackspace(index, e)}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className={`w-full bg-teal-800 text-white py-3 rounded-md hover:bg-teal-700 mb-8 ${
            formData.isValid ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!formData.isValid}
        >
          Continue
        </button>

        <div className="space-y-4 text-sm text-gray-600">
          <p className="leading-relaxed">
            I authorise Sapphire to contact me even if my number is registered
            on DND. I authorise Sapphire to fetch my KYC information from the
            C-KYC registry with my PAN.
          </p>
          <p>
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to{" "}
            <button type="button" className="text-blue-500 hover:text-blue-600">
              click here
            </button>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SPage1;
