// // models/MedicalStore.js
// import mongoose from "mongoose";

// const medicalStoreSchema = new mongoose.Schema({
//   name: String,
//   location: {
//     type: { type: String, enum: ["Point"], default: "Point" },
//     coordinates: { type: [Number], required: true }, // [lng, lat]
//   },
// });

// medicalStoreSchema.index({ location: "2dsphere" });

// const MedicalStore = mongoose.model("MedicalStore", medicalStoreSchema);
// export default MedicalStore;



// // models/MedicalStore.js
// import mongoose from 'mongoose';

// const medicalStoreSchema = new mongoose.Schema({
//   name: String,
//   address: String,
//   location: {
//     type: { type: String, enum: ['Point'], required: true },
//     coordinates: { type: [Number], required: true }, // [longitude, latitude]
//   },
// });

// medicalStoreSchema.index({ location: '2dsphere' });

// const MedicalStore = mongoose.model('MedicalStore', medicalStoreSchema);
// export default MedicalStore;
