

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Context } from "../main";
import { Shield, User, Stethoscope } from "lucide-react";

import img1 from "../assets/img/AppointmentPhoto.jpg";
import img2 from "../assets/img/DoctorsPhoto.jpg";
import img3 from "../assets/img/NursePhoto.jpg";
import img4 from "../assets/img/HeartPulsePhoto.jpg";

import GoogleLoginButton from "../components/GoogleLoginButton";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Patient",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { setIsAuth, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, role } = formData;
    try {
      const response = await axios.post(
        "https://medialert-ai-3.onrender.com/api/v1/user/login-user",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsAuth(true);
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success(response.data.message);

      const userRole = response.data.user.role;
      if (userRole === "Patient") {
        navigate("/Patient-dashboard");
      } else if (userRole === "Doctor") {
        navigate("/doctor-dashboard");
      } else {
        navigate("/");
      }
      setFormData({ email: "", password: "", role: "Patient" });
    } catch (error) {
      const message = error.response?.data?.message || "Login failed.";
      toast.error(message);
    }
  };

  const roles = [
    // { id: "Admin", label: "Admin", icon: Shield },
    { id: "Patient", label: "Patient", icon: User },
    { id: "Doctor", label: "Doctor", icon: Stethoscope },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  // const images = [
  //   "../src/assets/img/AppointmentPhoto.jpg",
  //   "../src/assets/img/DoctorsPhoto.jpg",
  //   "../src/assets/img/NursePhoto.jpg",
  //   "../src/assets/img/HeartPulsePhoto.jpg",
  // ];
  const images = [img1, img2, img3, img4];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-row">
      {/* Left - Rotating Image */}
      <div className="w-1/2 bg-white flex justify-center items-center relative overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="relative h-[50vh] w-[50vh]">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                  currentImage === index
                    ? "opacity-100 rotate-[360deg]"
                    : "opacity-0"
                }`}
              />
            ))}
          </div>
          <h1 className="text-blue-600 text-3xl font-semibold text-center">
            Welcome to MediAlert AI
          </h1>
        </div>
      </div>

      {/* Right - Login Form */}
      <div className="w-1/2 bg-blue-600 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="p-6 bg-blue-600 text-white">
            <h2 className="text-2xl font-bold text-center">
              Login to MedicalAlert AI
            </h2>
            <p className="text-center text-blue-100 mt-1">
              Access your account securely
            </p>
          </div>
          <div className="p-6">
            {/* Role Selection */}
            <div className="flex bg-blue-100 rounded-lg p-1 mb-6">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setFormData({ ...formData, role: role.id })}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-colors ${
                    formData.role === role.id
                      ? "bg-blue-600 text-white"
                      : "text-blue-600"
                  }`}
                >
                  <role.icon size={16} />
                  <span>{role.label}</span>
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    onClick={togglePassword}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login as {formData.role}
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-600">
              Don't have an account?
              <Link
                to="/register"
                className="text-blue-600 font-semibold ml-1 hover:underline"
              >
                Register here
              </Link>
              {/* <GoogleLoginButton /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
