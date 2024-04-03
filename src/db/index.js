import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
//   const clientOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };

// const temp = 'mongodb+srv://akashdafane1995:dXpwYbGgXudN2a5D@cluster0.urttdea.mongodb.net/youtube?retryWrites=true&w=majority'
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}?${'retryWrites=true&w=majority'}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
