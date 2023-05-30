import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "SPO",
    })
    .then(() => {
      console.log("Connected to the Database");
    })
    .catch((error) => {
      console.log("Error while Connecting to the Database",error);
    });
};

export default connectDB;
