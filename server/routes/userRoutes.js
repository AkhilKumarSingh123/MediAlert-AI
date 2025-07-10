import express from "express";
import {
  createAdminController,
  createNewDoctorController,
  createUserController,
  deleteDoctorController,
  deletePatientController,
  getAllDoctorController,
  getAllPatientController,
  getSinglePtientController,
  logOutAdmin,
  logOutDoctor,
  logOutPatient,
  getPatientDetailsController,
  loginUserController,
} from "../controller/userController.js";
import {
  adminTokenAuth,
  doctorTokenAuth,
  patientTokenAuth,
} from "../middleware/auth.js";
import mongoose from "mongoose";
import UserModel from '../model/appointmentModel.js'
const router = express.Router();

// create a user
router.post("/create-patient", createUserController);

// login routes
router.post("/login-user", loginUserController);

// add new admin
// only admin create a admin
router.post("/create-new-admin", adminTokenAuth, createAdminController);

// add new doctor
// only admin create a doctor
router.post("/create-new-doctor", adminTokenAuth, createNewDoctorController);

// get all doctor
router.get("/get-all-doctor", getAllDoctorController);

// get all patient
router.get("/get-all-patient", adminTokenAuth, getAllPatientController);

// get single patient
router.get("/single-patient", patientTokenAuth, getSinglePtientController);
// get single doctor
router.get("/single-doctor", doctorTokenAuth, getSinglePtientController);
// get single admin
router.get("/single-admin", adminTokenAuth, getSinglePtientController);

// logged Out admin
router.get("/logout-admin", adminTokenAuth, logOutAdmin);
// logged Out Patient
router.get("/logout-patient", patientTokenAuth, logOutPatient);
// LogOut Doctor
router.get("/logout-doctor", doctorTokenAuth, logOutDoctor);



// Appointment details
router.get('/getAppointmentDetails/:userId',async (req,res)=>{
  
    try {
      const userId = req.params.userId;
      console.log(userId);
      if (!mongoose.Types.ObjectId.isValid(userId)) {
  return res.status(400).json({ error: "Invalid user ID" });
}
      const user = await UserModel.findById(userId); // ⬅️ using findById
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving user', error: err.message });
    }
  
})

////////////////////////////////////////

router.get('/:patientId', getPatientDetailsController);


// models/Appointment.js
// Assuming you already have this model with fields like: doctorId, patientId, appointment_date

import Appointment from "../model/appointmentModel.js";

// routes/dashboard.js

router.get("/dashboard/doctor/:doctorId", async (req, res) => {
  const { doctorId } = req.params;

  try {
    const allAppointments = await Appointment.find({ doctorId });

    const totalAppointments = allAppointments.length;
    console.log(totalAppointments);

    // Unique patients treated
    const uniquePatientIds = new Set(allAppointments.map(a => a.patientId.toString()));
    const patientsTreated = uniquePatientIds.size;
    console.log(patientsTreated);
    // Today's Appointments
    const today = new Date();
    const todayDate = today.toISOString().split('T')[0]; // yyyy-mm-dd

    const todayAppointments = allAppointments.filter(a => {
      const appointmentDate = new Date(a.appointment_date).toISOString().split('T')[0];
      return appointmentDate === todayDate;
    });
    console.log(todayAppointments.length)

    res.json({
      totalAppointments,
      patientsTreated,
      todayAppointments: todayAppointments.length,
    });

  } catch (error) {
    console.error("Dashboard fetch error:", error);
    res.status(500).json({ message: "Error fetching dashboard data" });
  }
});

// delete single doctor
router.delete("/delete/doctor/:id", adminTokenAuth, deleteDoctorController);
// delete single patient
router.delete("/delete/patient/:id", adminTokenAuth, deletePatientController);

export default router;
