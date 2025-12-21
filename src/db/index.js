import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";


export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`);
    
  } catch (error) {
    console.log("Database Connection Failed: ", error);
  }
};
