// // utils/emailTransporter.js

// import nodemailer from "nodemailer";  // Use 'import' instead of 'require'
// import dotenv from "dotenv";  // Import dotenv to load environment variables

// dotenv.config();  // Load environment variables from .env

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export default transporter;  // Use 'export default' instead of 'module.exports'


// utils/emailService.js




import nodemailer from "nodemailer";

export const sendAppointmentEmail = async (email, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "medialert.service@gmail.com",
      pass: "flsj nkvl ksdu lklo",
    },
  });

  const mailOptions = {
    from: "medialert.service@gmail.com",
    to: email,
    subject: subject,
    html: html,
  };

  await transporter.sendMail(mailOptions);
};
