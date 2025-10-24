import mongoose from "mongoose";

const connectDB:()=>Promise<void> = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("✅ Connected to the database successfully");
    } catch (error: any) {
        console.log("Error connecting to the database:", error.message);
    }
}
export default connectDB;