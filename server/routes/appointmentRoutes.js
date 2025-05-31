import express from "express";
import {
  createAppointmentController,
  deleteAppointmentController,
  getAllAppointmentController,
  getAllAppointmentAllController,
  getAllAppointmentDoctorController,
  updateAppointmentController,
} from "../controller/appointmentController.js";
import { adminTokenAuth, patientTokenAuth } from "../middleware/auth.js";
import appointmentModel from "../model/appointmentModel.js";

const router = express.Router();

// create appiontment
router.post(
  "/create-appointment",
  patientTokenAuth,
  createAppointmentController
);

// get all appointment
router.get("/get-all-appointment", adminTokenAuth, getAllAppointmentAllController);
// get all appointment by userId
router.get('/getAppointmentDetails/:userId', getAllAppointmentController);



  router.delete('/delete-appointment/:emailId', async (req, res) => {
  const email = req.params.emailId;  // Get the patientId from the URL
  // const deletedUser = await appointmentModel.findOneAndDelete({ email });
  try {
    const email = req.params.emailId;

    const deletedUser = await appointmentModel.findOneAndDelete({ email });

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, message: 'User deleted successfully', data: deletedUser });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
  });

router.patch('/rescheduleAppointment/:emailId', async (req, res) => {
  try {
    const email =  req.params.emailId;  // Get the patientId from the URL
    const { appointment_date } = req.body;

   
    const updatedUser = await appointmentModel.updateMany(
      { email },  // Filter by email
      { $set: { appointment_date: appointment_date } },  // Set the new appointment date
      { new: true }  // Return updated documents (not needed for updateMany, but can be used)
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user: updatedUser });
  }
  catch (error) {
    console.error('Error rescheduling appointment:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});






// get all appointment by doctorname

// router.get("/getAppointmentsByDoctor/:doctorId",(req,res)=>{
//   const doctorId = req.params.doctorId;
//   getAllAppointmentDoctorController(req,res,doctorId);
// }
// );

router.get("/getAppointmentsByDoctor/:doctorId",getAllAppointmentDoctorController);

///////////////////////////////////////








// delete a single appointment
router.delete(
  "/delete-appointment/:id",
  adminTokenAuth,
  deleteAppointmentController
);

router.put(
  "/update-status-appointment/:id",
  adminTokenAuth,
  updateAppointmentController
);
export default router;
