// models/MedicalStore.js (Consider renaming to Booking.js for clarity)

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  address: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true, 
    match: /^\d{10}$/ // Ensures 10-digit phone number
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
