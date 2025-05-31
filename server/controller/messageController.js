import { errorHandleMiddleware } from "../middleware/errorHandleMiddleware.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import Message from "../model/messageModel.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// message create
// export const createMessageController = errorHandleMiddleware(
//   async (req, res, next) => {
//     const { firstName, lastName, email, phone, message } = req.body;
//     if (!firstName || !lastName || !email || !phone || !message) {
//       // return next(new ErrorHandler("Please Fill Full Form", 400));
//       return next(new ErrorHandler("Please Fill Full Form!", 400));
//     }
//     await Message.create({ firstName, lastName, email, phone, message });
//     res.status(201).send({
//       success: true,
//       message: "Message Create Successfully",
//     });
//   }
// );

// get all message
export const getAllMessageController = errorHandleMiddleware(
  async (req, res, next) => {
    const message = await Message.find();
    if (!message || message.length === 0) {
      return next(new ErrorHandler("No Messages Found", 404));
    }
    res.status(200).send({
      success: true,
      message: "Get All Messages",
      message,
    });
  }
);

// message delete
export const deleteMessageController = errorHandleMiddleware(
  async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
      return next(new ErrorHandler("Message Id Not Found", 400));
    }
    await Message.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Message Delete Successfully",
    });
  }
);







// // controllers/messageController.js

// const nodemailer = require("nodemailer");

// exports.createMessage = async (req, res) => {
//   const { firstName, lastName, email, phone, message } = req.body;

//   try {
//     // (Optional) Save to DB here

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // or use your SMTP service
//       auth: {
//         user: "yourEmail@gmail.com",
//         pass: "yourAppPassword" // Use App Password (not your real password)
//       }
//     });

//     // Mail options
//     const mailOptions = {
//       from: email,
//       to: "yourEmail@gmail.com", // Your receiver email
//       subject: `New Message from ${firstName} ${lastName}`,
//       html: `
//         <h3>Contact Details</h3>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: "Message sent and email delivered successfully!" });

//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ message: "Failed to send message." });
//   }
// };






export const createMessageController = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;



  try {
    // Save to DB if needed (optional)
    // await Message.create({ firstName, lastName, email, phone, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "medialert.service@gmail.com",
        pass: "flsj nkvl ksdu lklo",
      },
    });

    const mailOptions = {
      from: "medialert.service@gmail.com", // ✅ Fix this line!
      to: "sandip.23754@knit.ac.in",   // You receive the message
      subject: `New Message from ${firstName} ${lastName}`,
      html: `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS); // Should be 16

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent and email delivered successfully!" });

  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send message.", error });
  }
};
