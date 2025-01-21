import mongoose from 'mongoose';

// Nominee schema (embedded document in user schema)
const nomineeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pan: { type: String, required: true },
  aadhar: { type: String, required: true },
  relationship: { type: String, required: true },
  sharePercentage: { type: Number, required: true }
});

// Account details schema (embedded document)
const accountDetailsSchema = new mongoose.Schema({
  primaryBankAccount: {
    accountNumber: { type: String, required: true },
    ifscCode: { type: String, required: true },
    bankName: { type: String, required: true }
  },
  secondaryBankAccount: {
    accountNumber: { type: String },
    ifscCode: { type: String },
    bankName: { type: String }
  },
  bankStatement: { type: String, required: true }, // Cloud URL to bank statement
  photo: { type: String, required: true } // Cloud URL to the user's photo
});

// Main User schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  panNumber: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  aadharNumber: { type: String, required: true, unique: true },
  aadharDetails: {
    frontImage: { type: String, required: true }, // Cloud URL to Aadhar front image
    backImage: { type: String, required: true }   // Cloud URL to Aadhar back image
  },
  investmentSegments: [
    {
      type: String,  // e.g., 'Equity', 'F&O', etc.
      description: String
    }
  ],
  isFO: { type: Boolean, default: false },  // Indicates if the user has opted for F&O
  maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Widowed'], required: true },
  occupation: { type: String, required: true },
  politicalExposedPerson: { type: Boolean, required: true },
  accountDetails: accountDetailsSchema,  // Embedded account details
  nominees: [nomineeSchema],  // Array of nominee details
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
