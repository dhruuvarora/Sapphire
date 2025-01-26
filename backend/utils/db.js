// utils/db.js

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});
const { MONGO_URI } = process.env;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI,{
      useNewUrlParser:true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection success");
  } catch (error) {
    console.error("MongoDB connection failed");
    process.exit(1);
  }
};
export default connectDB;