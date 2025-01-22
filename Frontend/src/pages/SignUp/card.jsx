import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const Card = ({ onBack, onComplete }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    setTimeout(() => {
      onComplete();
    }, 1500);
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

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Enter Card Details</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">CVV</label>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              maxLength="3"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Name on Card</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-teal-800 hover:bg-teal-700 text-white rounded-lg text-lg font-medium transition-colors"
        >
          Pay ₹99
        </button>
      </form>
    </div>
  );
};

export default Card;
