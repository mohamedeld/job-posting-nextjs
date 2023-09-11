import mongoose from "mongoose";
const connectToDB = () => {
  try {
    mongoose.connect(process.env.DB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongoose connected successfully");
    });
    connection.on("error", (error) => {
      console.log("failed to connect to database");
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
