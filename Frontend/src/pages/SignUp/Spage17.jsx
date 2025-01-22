import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SPage17 = ({ formData, updateFormData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set isValid to true when component mounts
    updateFormData({ isValid: true });
  }, [updateFormData]);

  const handleDashboardNavigation = () => {
    // Force a full page refresh to ensure clean state
    window.location.href = "/";
    // Alternative approach if you want to use React Router navigation:
    // navigate('/', { replace: true });
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="rounded-lg overflow-hidden">
        <img
          src="/api/placeholder/400/300"
          alt="Setup Complete"
          className="w-full object-cover"
        />
      </div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-semibold">Congratulations!</h3>
        <p className="text-gray-600">
          Your account setup is complete. You're now ready to start your
          investment journey with us. Our team is here to support you every step
          of the way.
        </p>
      </div>
      <div className="space-y-3">
        <button
          onClick={handleDashboardNavigation}
          className="w-full py-3 rounded-lg bg-teal-800 text-white hover:bg-teal-700"
        >
          Go to Dashboard
        </button>
        <p className="text-sm text-gray-500 text-center">
          You will receive a confirmation email with your account details
          shortly.
        </p>
      </div>
    </div>
  );
};

export default SPage17;
