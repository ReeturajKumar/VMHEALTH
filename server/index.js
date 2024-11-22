import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoute from "./Route/authRoute.js";
import userRoute from './Route/userRoute.js';
import doctorRoute from './Route/doctorRoute.js';
import reviewRoute from './Route/reviewRoute.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;


const corsOptions = {
  origin: true
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//mongodb connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

//middelwares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// api routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/doctor", doctorRoute);
app.use("/api/v1/review", reviewRoute);




app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});