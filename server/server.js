import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
// const authRoutes = require("./routes/authRoutes");

import morgan from "morgan";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRoutes from "./routes/userRoutes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import cloudinary from "cloudinary";
import messageRoutes from "./routes/messageRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import chatbotRoutes from "./routes/chatbotRoutes.js";
import nodemailer from "nodemailer";

import Booking from './model/bookingModel.js';

// import medicalStoreRoutes from './routes/storeRoutes.js' 
// import transporter from "./utils/emailTransporter.js";  

const app = express();

// cloudinary setup
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// all port from dotenv
const port = process.env.PORT;
const url = process.env.MONGO_URL;


// // // utils/emailTransporter.js
// const nodemailer = require("nodemailer");
// require("dotenv").config(); // Load environment variables from .env

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// module.exports = transporter;




// all middleware is here
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
//     methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
//     credentials: true,
//   })
// );
// app.options("*", cors({
//   origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
//   credentials: true,
// }));
// console.log("Allowed Origins:", process.env.FRONTEND_URL, process.env.DASHBOARD_URL);
app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "https://medialert-ai-frontend.onrender.com",
      "https://medialert-dashboard.onrender.com"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

// Allow preflight (OPTIONS) requests
app.options("*", cors({
  origin: [
    "http://localhost:5173", 
    "https://medialert-ai-frontend.onrender.com",
    "https://medialert-dashboard.onrender.com"
  ],
  credentials: true,
}));


app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    tempFileDir: "/tmp/",
    useTempFiles: true,
  })
);
// app.use("/api/auth", authRoutes);
// database connection here
mongoose
  .connect(url)
  .then(() => {
    console.log("Database Connection Successfully");
  })
  .catch((error) => console.log("Database Error is ", error));

// all routes here
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/appointments", appointmentRoutes);
app.use("/api/v1/chatbot", chatbotRoutes);


app.post('/api/v1/book-ambulance', async (req, res) => {
  try {
    const { address, phone, user } = req.body;

    if (!address || !phone || !user) {
      return res.status(400).json({ error: 'Address, phone number and user are required' });
    }

    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ error: 'Invalid phone number' });
    }

    const newBooking = new Booking({ address, phone, userId: user._id });
    await newBooking.save();

    res.status(201).json({ message: 'Ambulance booked successfully' });
  } catch (error) {
    console.error('❌ Error booking ambulance:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
// app listen here



// Route registration
// app.use('/api/medical', medicalStoreRoutes);


app.use(errorMiddleware);


app.listen(3030, () => {
  console.log(`Server listen on PORT ${port} `);
});

// last export in error MIddleware
// app.use(errorMiddleware);
export default app;
