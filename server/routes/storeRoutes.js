// // routes/storeRoutes.js
// import express from "express";
// import MedicalStore from "../models/MedicalStore.js";

// const router = express.Router();

// router.get("/nearest", async (req, res) => {
//   const { lat, lng } = req.query;

//   try {
//     const stores = await MedicalStore.find({
//       location: {
//         $near: {
//           $geometry: {
//             type: "Point",
//             coordinates: [parseFloat(lng), parseFloat(lat)],
//           },
//           $maxDistance: 5000, // 5km radius
//         },
//       },
//     }).limit(5);

//     res.json(stores);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching nearby stores" });
//   }
// });

// export default router;





// // routes/medicalStore.js
// import express from 'express';
// import MedicalStore from '../models/MedicalStore.js';

// const router = express.Router();

// router.get('/nearby', async (req, res) => {
//   const { lat, lng } = req.query;

//   if (!lat || !lng) {
//     return res.status(400).json({ message: 'Latitude and longitude are required' });
//   }

//   try {
//     const stores = await MedicalStore.find({
//       location: {
//         $near: {
//           $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
//           $maxDistance: 5000, // 5 km
//         },
//       },
//     });

//     res.json(stores);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// export default router;

