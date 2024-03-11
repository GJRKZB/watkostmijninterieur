import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoUri: string = process.env.MONGO_URI_DEV!;

  if (!mongoUri) {
    throw new Error("Mongo URI is not defined");
  }

  try {
    await mongoose.connect(mongoUri, {});

    console.log("Connected to database. Coming from db.ts");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error connecting to database: ", error.message);
    } else {
      console.error("Unknown error occurred while connecting to the database");
    }
  }
};

export default connectDB;
