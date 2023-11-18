import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    return Promise.resolve();
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected To Database");

    isConnected = Boolean(db.connections[0].readyState);
  } catch (error) {
    console.log(error);
  }
};
