import { errorHandleMiddleware } from "../middleware/errorHandleMiddleware.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import Appointment from "../model/appointmentModel.js";
import User from "../model/userModel.js";
import {sendAppointmentEmail} from "../utils/emailTransporter.js";

// create appiontment
export const createAppointmentController = errorHandleMiddleware(
  async (req, res, next) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor_firstName,
      doctor_lastName,
      hasVisited,
      address,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !nic ||
      !dob ||
      !gender ||
      !appointment_date ||
      !department ||
      !doctor_firstName ||
      !doctor_lastName ||
      !address
    ) {
      return next(new ErrorHandler("Please Fill Full Form", 400));
    }

    // search doctor by name
    const foundDoctors = await User.find({
      firstName: { $regex: new RegExp(doctor_firstName, "i") }, // Case-insensitive search
      lastName: { $regex: new RegExp(doctor_lastName, "i") }, // Case-insensitive search
      role: "Doctor",
      doctorDepartment: { $regex: new RegExp(department, "i") }, // Case-insensitive search
    });
    if (foundDoctors.length === 0) {
      return next(new ErrorHandler("Doctor NOt Found", 400));
    }
    if (foundDoctors.length > 1) {
      return next(
        new ErrorHandler(
          "Many Doctor Found Please Contact By Phone or Email",
          400
        )
      );
    }
    const doctorId = foundDoctors[0]._id;
    const patientId = req.user._id;
    // create appiontment
    const appiontment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor: { firstName: doctor_firstName, lastName: doctor_lastName },
      hasVisited,
      address,
      doctorId,
      patientId,
    });
    // response here
    const emailHTML = `
      <h2>Appointment Confirmation</h2>
      <p>Dear ${appiontment.firstName} ${appiontment.lastName},</p>
      <p>Your appointment has been successfully booked.</p>
      <ul>
        <li><strong>Doctor:</strong> Dr. ${appiontment.doctor.firstName} ${appiontment.doctor.lastName}</li>
        <li><strong>Department:</strong> ${appiontment.department}</li>
        <li><strong>Date:</strong> ${appiontment.appointment_date}</li>
      </ul>
      <p>Thank you for using MediAlert AI.</p>
    `;

    await sendAppointmentEmail(
      appiontment.email,
      "Appointment Confirmation - MediAlert AI",
      emailHTML
    );

    res.status(201).send({
      success: true,
      message: "Appointment Send Successfully",
      appiontment,
    });
  }
);


// get all appointments by userId via req.params
export const getAllAppointmentController = errorHandleMiddleware(
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      console.log("User ID from params:", userId);

      if (!userId) {
        return next(new ErrorHandler("User ID is required", 400));
      }

      const appointments = await Appointment.find({ patientId: userId });

      if (!appointments || appointments.length === 0) {
        return next(new ErrorHandler("No appointments found", 404));
      }

      res.status(200).json({
        success: true,
        message: "Appointments fetched successfully",
        appointments,
      });
    } catch (error) {
      next(error);
    }
  }
);


// get all appointments by userId via req.params
export const getAllAppointmentAllController = errorHandleMiddleware(
  async (req, res, next) => {
    try {

      const appointments = await Appointment.find();

      if (!appointments || appointments.length === 0) {
        return next(new ErrorHandler("No appointments found", 404));
      }

      res.status(200).json({
        success: true,
        message: "Appointments fetched successfully",
        appointments,
      });
    } catch (error) {
      next(error);
    }
  }
);


// delete appointment
export const deleteAppointmentController = errorHandleMiddleware(
  async (req, res, next) => {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return next(new ErrorHandler("Appointment Not Found", 400));
    }
    // response
    await appointment.deleteOne();
    res.status(200).send({
      success: true,
      message: "Appointment Deleted Successfully",
    });
  }
);

// update appointment status
export const updateAppointmentController = errorHandleMiddleware(
  async (req, res, next) => {
    const { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
      return next(new ErrorHandler("Appointment Not Found", 400));
    }
    appointment = await Appointment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).send({
      success: true,
      message: "Appointment Stutas Updated",
    });
  }
);







///////////////////////////////////////////////////////////////////////


// get all appointments by userId via req.params
// export const getAllAppointmentDoctorController = errorHandleMiddleware(
//   async (req, res, next) => {
//     try {

//       const appointments = await Appointment.find();

//       if (!appointments || appointments.length === 0) {
//         return next(new ErrorHandler("No appointments found", 404));
//       }

//       res.status(200).json({
//         success: true,
//         message: "Appointments fetched successfully",
//         appointments,
//       });
//     } catch (error) {
//       next(error);
//     }
//   }
// );





// controllers/appointmentController.js
// export const getAllAppointmentDoctorController = errorHandleMiddleware(
//   async (req, res, next) => {
//     try {
//       const doctorId = req.params.doctorId;

//       const appointments = await Appointment.find({ doctorId })
//         .populate("patientId", "firstName lastName email phone dob gender") // add other fields as needed
//         .exec();

//       if (!appointments.length) {
//         return next(new ErrorHandler("No appointments found", 404));
//       }

//       res.status(200).json({
//         success: true,
//         message: "Appointments fetched successfully",
//         appointments,
//       });
//     } catch (error) {
//       next(error);
//     }
//   }
// );




export const getAllAppointmentDoctorController = errorHandleMiddleware(
  async (req, res, next) => {
    try {
      const doctorId = req.params.doctorId;

      const appointments = await Appointment.find({ doctorId })
        .populate("patientId") // Populate all fields of the patient
        .exec();

      if (!appointments.length) {
        return next(new ErrorHandler("No appointments found", 404));
      }

      res.status(200).json({
        success: true,
        message: "Appointments fetched successfully",
        appointments,
      });
    } catch (error) {
      next(error);
    }
  }
);





