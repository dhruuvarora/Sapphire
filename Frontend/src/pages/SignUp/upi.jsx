import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { assets } from "../../assets/assets";

const Upi = ({ onBack, onComplete }) => {
  const [upiId, setUpiId] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleUpiChange = (e) => {
    setUpiId(e.target.value);
    setVerificationStatus("");
  };

  const handleVerifyAndPay = (e) => {
    e.preventDefault();
    if (!isValidUpiId()) {
      setVerificationStatus("Invalid UPI ID format");
      return;
    }

    setIsVerifying(true);
    setVerificationStatus("Verifying...");

    setTimeout(() => {
      setIsVerifying(false);
      setVerificationStatus("Verified");
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 1500);
  };

  const isValidUpiId = () => {
    const upiRegex = /^[\w.-]+@[\w.-]+$/;
    return upiRegex.test(upiId);
  };

  return (
    <div className="w-full p-6">
      <button
        onClick={onBack}
        className="flex items-center text-teal-800 mb-6 hover:text-teal-600"
      >
        <ArrowLeft className="mr-2" size={20} />
        Go back
      </button>

      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Pay using UPI</h2>
        <p className="text-gray-600 text-xl">
          Scan QR code or enter your UPI ID
        </p>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="text-center">
          <div className="p-4 rounded-lg mb-4">
            <img src={assets.qr1} alt="QR Code" className="mb-2 px-7" />
            <p className="font-bold text-black">Valid till: 04:46 minutes</p>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <img src={assets.UPIS} alt="upi's" />
          </div>
        </div>

        <hr className="w-full my-4 border-t-2 border-gray-300" />

        <div className="w-full max-w-sm mt-2">
          <form onSubmit={handleVerifyAndPay}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Enter UPI ID
              </label>
              <input
                type="text"
                value={upiId}
                onChange={handleUpiChange}
                placeholder="example@upi"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {verificationStatus && (
                <p
                  className={`text-sm mt-1 ${
                    verificationStatus === "Verified"
                      ? "text-green-600"
                      : verificationStatus === "Verifying..."
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {verificationStatus}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!upiId || isVerifying}
              className={`w-full py-4 rounded-lg text-white text-lg font-medium transition-colors ${
                upiId && !isVerifying
                  ? "bg-teal-800 hover:bg-teal-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {isVerifying ? "Verifying..." : "Verify and Pay ₹99"}
            </button>
            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">Enter your registered VPA</p>
              <p className="text-gray-500 text-sm">
                Receive payment request on bank app
              </p>
              <p className="text-gray-500 text-sm">Authorize payment request</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upi;
