import express from "express";
import {chatbotController
} from "../controller/chatbotController.js";
import { patientTokenAuth } from "../middleware/auth.js";

const router = express.Router();

// create appiontment
router.post(
  "/book-appointment",
  chatbotController
);

export default router;