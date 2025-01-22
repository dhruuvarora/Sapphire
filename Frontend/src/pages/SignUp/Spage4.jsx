import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const SPage4 = ({ onNextStep }) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Check className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Registration Successful!
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Thank you for completing your registration. Your account has been
          successfully created.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-50 rounded-lg p-6 mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">Transaction ID</span>
          <span className="font-medium">TXN123456789</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">Amount Paid</span>
          <span className="font-medium">₹99.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Payment Status</span>
          <span className="text-green-600 font-medium">Successful</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-4"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNextStep()}
          className="w-full py-4 bg-teal-800 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
        >
          Continue
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Download Receipt
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SPage4;
