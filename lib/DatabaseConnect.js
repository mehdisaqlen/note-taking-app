import mongoose from "mongoose";

export default async function DatabaseConnect() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ Database Successfully Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
