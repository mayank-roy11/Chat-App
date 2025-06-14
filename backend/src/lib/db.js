import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config(); 

console.log("🧪 Checking env path:", process.cwd());
console.log("✅ Loaded MONGO_URI:", process.env.MONGO_URI);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
