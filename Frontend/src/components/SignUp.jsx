import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "./../assets/assets";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Import all pages
import SPage1 from "../pages/SignUp/Spage1";
import SPage2 from "../pages/SignUp/Spage2";
import SPage3 from "../pages/SignUp/Spage3";
import SPage4 from "../pages/SignUp/Spage4";
import SPage5 from "../pages/SignUp/Spage5";
import SPage6 from "../pages/SignUp/Spage6";
import SPage7 from "../pages/SignUp/Spage7";
import SPage8 from "../pages/SignUp/Spage8";
import SPage9 from "../pages/SignUp/Spage9";
import SPage10 from "../pages/SignUp/Spage10";
import SPage11 from "../pages/SignUp/Spage11";
import SPage12 from "../pages/SignUp/Spage12";
import SPage13 from "../pages/SignUp/Spage13";
import SPage14 from "../pages/SignUp/Spage14";
import SPage15 from "../pages/SignUp/Spage15";
import SPage16 from "../pages/SignUp/Spage16";
import SPage17 from "../pages/SignUp/Spage17";
import Card from "../pages/SignUp/card";
import Upi from "../pages/SignUp/upi";
import NetBank from "../pages/SignUp/netBank";
import BankLink from "../pages/SignUp/bankLInk";
import UPILink from "./../pages/SignUp/upiLink";

const PageNavigation = ({
  currentStep,
  canMoveNext,
  canMovePrev,
  onNavigate,
}) => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end space-y-2">
      <div className="flex flex-row">
        <button
          onClick={() => onNavigate(-1)}
          disabled={!canMovePrev}
          className={`w-10 h-10 flex items-center justify-center border border-white rounded-s-md ${
            canMovePrev
              ? "bg-teal-800 text-white hover:bg-teal-700"
              : "bg-teal-800 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ChevronUp size={24} />
        </button>
        <button
          onClick={() => onNavigate(1)}
          disabled={!canMoveNext}
          className={`w-10 h-10 flex items-center justify-center border border-white rounded-e-md ${
            canMoveNext
              ? "bg-teal-800 text-white hover:bg-teal-700"
              : "bg-teal-800 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};

const SignUp = () => {
  const nav = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [bankLinkMethod, setBankLinkMethod] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [formData, setFormData] = useState({
    page1: {
      mobileNumber: "",
      otp: ["", "", "", "", "", ""],
      otpVisible: false,
      otpSent: false,
      mobileError: false,
      isValid: false,
    },
    page2: {
      email: "",
      otp: ["", "", "", "", "", ""],
      otpVisible: false,
      otpSent: false,
      emailError: "",
      isValid: false,
    },
    page3: {
      selectedPayment: "",
      isValid: false,
    },
    page4: {
      isValid: true,
    },
    page5: {
      pan: "",
      dob: "",
      isValid: false,
    },
    page6: {
      isValid: true,
    },
    page7: {
      username: "",
      fathersName: "",
      dob: "",
      gender: "",
      email: "",
      address: "",
      selectedAddress: "",
      isValid: false,
    },
    page8: {
      selectedSegments: [],
      isValid: false,
    },
    page9: {
      maritalStatus: "",
      fathersName: "",
      mothersName: "",
      isValid: false,
    },
    page10: {
      annualIncome: "",
      tradingExperience: "",
      settlementPreference: "",
      isValid: false,
    },
    page11: {
      occupation: "",
      isPoliticallyExposed: null,
      isValid: false,
    },
    page12: {
      linkingMethod: "",
      isValid: false,
    },
    page13: {
      bankDetails: null,
      isValid: false,
    },
    page14: {
      photoTaken: false,
      photoURL: null,
      isValid: false,
    },
    page15: {
      nomineeOption: "",
      nomineeData: null,
      isValid: false,
    },
    page16: {
      isValid: false,
    },
    page17: {
      isValid: false,
    },
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [currentStep]);

  const handleNextStep = (method) => {
    setDirection(1);
    if (method) {
      if (currentStep === 12) {
        setBankLinkMethod(method);
      } else {
        setPaymentMethod(method);
      }
    } else {
      if (currentStep < 17) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBankMethodSelect = (method) => {
    setBankLinkMethod(method);
  };

  const handleBankLinkComplete = (details) => {
    updateFormData(13, {
      bankDetails: details,
      isValid: true,
    });
    setBankLinkMethod(null);
    setCurrentStep(13);
  };

  const handlePaymentComplete = () => {
    setPaymentCompleted(true);
    setCurrentStep(4);
    setPaymentMethod(null);
  };

  const updateFormData = (pageNumber, newData) => {
    setFormData((prev) => ({
      ...prev,
      [`page${pageNumber}`]: {
        ...prev[`page${pageNumber}`],
        ...newData,
      },
    }));
  };

  const handleNavigation = (direction) => {
    const nextStep = currentStep + direction;
    if (nextStep >= 1 && nextStep <= 17) {
      setDirection(direction);
      setCurrentStep(nextStep);
    }
  };

  const handleGoBack = () => {
    setPaymentMethod(null);
  };

  const canNavigateNext = () => {
    const pageData = formData[`page${currentStep}`];
    return pageData?.isValid && currentStep < 17;
  };

  const canNavigatePrev = () => {
    return currentStep > 1;
  };

  const handlePage13Navigation = (direction) => {
    if (direction === -1) {
      setCurrentStep(12);
      updateFormData(13, { bankDetails: null, isValid: false });
    } else {
      setCurrentStep(14);
    }
  };

  const pageVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const pageTransition = {
    type: "tween",
    duration: 0.3,
    ease: "easeInOut",
  };

  const handleEditBank = (method) => {
    setBankLinkMethod(method);
    setCurrentStep(12);
  };

  const getStepContent = () => {
    const stepContents = {
      1: "Verify Your Mobile Number",
      2: "Verify Your Email",
      3: "Choose Payment Method",
      4: "Registration Complete",
      5: "Enter your Permanent Account Number",
      6: "Verify Your Aadhar",
      7: "Confirm Your KYC Details",
      8: "Choose Investment Segments",
      9: "Complete Trading Account Details",
      10: "Trading Account Details",
      11: "Occupation Details",
      12: "Link Bank Account",
      13: "Confirm Bank Details",
      14: "In-Person Verification (IPV)",
      15: "Nominees",
      16: "Risk Disclosure",
      17: "Setup Complete",
    };

    const stepDescriptions = {
      1: "Let's start by verifying your mobile number for secure access.",
      2: "Please verify your email to continue with the registration.",
      3: "Select your preferred payment method to proceed.",
      4: "Thank you for completing your registration!",
      5: "Provide your Permanent Account Number and Date of birth",
      6: "Connect your DigiLocker account to verify Aadhar",
      7: "Review and confirm your KYC details",
      8: "Select the investment segments you're interested in",
      9: "Provide additional details for your trading account",
      10: "Please provide your income and trading experience details",
      11: "Tell us about your occupation",
      12: "Link your bank account to complete the setup",
      13: "Review and confirm your bank account details",
      14: "Complete your in-person verification by taking a photo",
      15: "Add nominees to your trading account",
      16: "Understand the risks involved in investing",
      17: "Your account setup is complete",
    };

    return {
      title: paymentMethod
        ? `Complete ${paymentMethod} Payment`
        : stepContents[currentStep],
      description: paymentMethod
        ? `Please complete your payment using ${paymentMethod}`
        : stepDescriptions[currentStep],
    };
  };

  const renderContent = () => {
    if (bankLinkMethod === "upi") {
      return (
        <UPILink
          onBack={() => setBankLinkMethod(null)}
          onComplete={handleBankLinkComplete}
        />
      );
    }
    if (bankLinkMethod === "bank") {
      return (
        <BankLink
          onBack={() => setBankLinkMethod(null)}
          onComplete={handleBankLinkComplete}
        />
      );
    }

    if (paymentMethod === "card") {
      return <Card onBack={handleGoBack} onComplete={handlePaymentComplete} />;
    }
    if (paymentMethod === "upi") {
      return <Upi onBack={handleGoBack} onComplete={handlePaymentComplete} />;
    }
    if (paymentMethod === "netbanking") {
      return (
        <NetBank onBack={handleGoBack} onComplete={handlePaymentComplete} />
      );
    }

    const pages = {
      1: (
        <SPage1
          formData={formData.page1}
          updateFormData={(data) => updateFormData(1, data)}
          onNextStep={handleNextStep}
        />
      ),
      2: (
        <SPage2
          formData={formData.page2}
          updateFormData={(data) => updateFormData(2, data)}
          onNextStep={handleNextStep}
        />
      ),
      3: (
        <SPage3
          formData={formData.page3}
          updateFormData={(data) => updateFormData(3, data)}
          onNextStep={handleNextStep}
        />
      ),
      4: <SPage4 onNextStep={handleNextStep} />,
      5: (
        <SPage5
          formData={formData.page5}
          updateFormData={(data) => updateFormData(5, data)}
          onNextStep={handleNextStep}
        />
      ),
      6: (
        <SPage6
          formData={formData.page6}
          updateFormData={(data) => updateFormData(6, data)}
          onNextStep={handleNextStep}
        />
      ),
      7: (
        <SPage7
          formData={formData.page7}
          updateFormData={(data) => updateFormData(7, data)}
          onNextStep={handleNextStep}
        />
      ),
      8: (
        <SPage8
          formData={formData.page8}
          updateFormData={(data) => updateFormData(8, data)}
          onNextStep={handleNextStep}
        />
      ),
      9: (
        <SPage9
          formData={formData.page9}
          updateFormData={(data) => updateFormData(9, data)}
          onNextStep={handleNextStep}
        />
      ),
      10: (
        <SPage10
          formData={formData.page10}
          updateFormData={(data) => updateFormData(10, data)}
          onNextStep={handleNextStep}
        />
      ),
      11: (
        <SPage11
          formData={formData.page11}
          updateFormData={(data) => updateFormData(11, data)}
          onNextStep={handleNextStep}
        />
      ),
      12: (
        <SPage12
          formData={formData.page12}
          updateFormData={(data) => updateFormData(12, data)}
          onNextStep={handleNextStep}
          onSelectMethod={handleBankMethodSelect}
        />
      ),
      13: (
        <SPage13
          formData={formData.page13}
          onNextStep={() => setCurrentStep(14)}
          onPrevStep={() => handlePage13Navigation(-1)}
          onEditBank={handleEditBank}
        />
      ),
      14: (
        <SPage14
          formData={formData.page14}
          updateFormData={(data) => updateFormData(14, data)}
          onNextStep={handleNextStep}
        />
      ),
      15: (
        <SPage15
          formData={formData.page15}
          updateFormData={(data) => updateFormData(15, data)}
          onNextStep={handleNextStep}
        />
      ),
      16: (
        <SPage16
          formData={formData.page16}
          updateFormData={(data) => updateFormData(16, data)}
          onNextStep={handleNextStep}
        />
      ),
      17: (
        <SPage17
          formData={formData.page17}
          updateFormData={(data) => updateFormData(17, data)}
        />
      ),
    };

    return (
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentStep}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pageTransition}
          className="w-full"
        >
          {pages[currentStep]}
        </motion.div>
      </AnimatePresence>
    );
  };

  const { title, description } = getStepContent();
  return (
    <div className="flex w-full min-h-screen relative">
      <div className="w-1/3 bg-teal-800 p-16 text-white relative">
        <div className="absolute top-8 left-8">
          <button
            onClick={() => nav("/")}
            className="w-full h-full rounded flex items-center justify-center"
          >
            <img src={assets.WhiteLogo} alt="Logo" />
          </button>
        </div>

        <div className="max-w-xl mt-40">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-200 mb-12">{description}</p>

          <div className="relative">
            <div className="w-full h-full rounded-lg flex items-center justify-center">
              <img src={assets.signup} alt="Signup illustration" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-md relative" style={{ marginLeft: "37%" }}>
          {renderContent()}
        </div>
      </div>

      {!paymentMethod && !bankLinkMethod && currentStep <= 17 && (
        <PageNavigation
          currentStep={currentStep}
          totalSteps={17}
          canMoveNext={canNavigateNext()}
          canMovePrev={canNavigatePrev()}
          onNavigate={handleNavigation}
        />
      )}
    </div>
  );
};

export default SignUp;
