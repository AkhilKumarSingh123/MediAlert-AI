import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import PageNotFound from "./page/PageNotFound";
import PrivacyandPolicy from "./page/PrivacyandPolicy";
import Contact from "./page/Contact";
import Services from "./page/Services";
import Appointment from "./page/Appointment";

import Doctor from "./components/Doctor.jsx";

import FindMedicalStores from "./page/MedicalStore.jsx";

import PatientDashboard from "./patient/patient-dashboard.jsx";
import DoctorDashboard from "./doctor/doctor-dashboard.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Register from "./page/Register";
import Login from "./page/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./page/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
const App = () => {
  // const { isAuth, setIsAuth, setUser } = useContext(Context);

  // // get single patinent
  // useEffect(() => {
  //   const fatchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:3030/api/v1/user/single-patient",
  //         { withCredentials: true }
  //       );
  //       setIsAuth(true);
  //       setUser(response.data.user);
  //     } catch (error) {
  //       setIsAuth(false);
  //       setUser({});
  //     }
  //   };
  //   fatchUser();
  // }, [isAuth]);

  const { setIsAuth, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3030/api/v1/user/single-patient",
          { withCredentials: true }
        );
        setIsAuth(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuth(false);
        setUser({});
      }
    };
    fetchUser();
  }, []);

  return (
    <GoogleOAuthProvider clientId="216455133552-8mcuj5f4q3klkk8mm1rkq3s62h4t3ti1.apps.googleusercontent.com">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
        
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/medical-store" element={<FindMedicalStores/>} />


          <Route path="/privacyAndPolicy" element={<PrivacyandPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
