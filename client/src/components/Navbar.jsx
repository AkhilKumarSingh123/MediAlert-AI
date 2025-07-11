
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(Context);
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Optional debugging
  }, [user]);

  const logOutHandle = async () => {
    try {
      const logoutEndpoints = {
        doctor: "logout-doctor",
        patient: "logout-patient",
        admin: "logout-admin",
      };

      const endpoint = logoutEndpoints[user.role];
      if (endpoint) {
        const res = await axios.get(
          `https://medialert-ai-3.onrender.com/api/v1/user/${endpoint}`,
          { withCredentials: true }
        );
        toast.success(res.data.message);
      }

      setIsAuth(false);
      setUser({});
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed.");
    }
  };

  const handleLogin = () => navigate("/login");

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-40">
      

      {/* Main Nav */}
      <div className="flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-green-400">
          MediAlert AI
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-white"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-6 items-center text-white">
          {!isAuth ? (
            <>
              <Link to="/" className="hover:text-green-400">Home</Link>
              <Link to="/about" className="hover:text-green-400">About</Link>
              <Link to="/services" className="hover:text-green-400">Services</Link>
              <Link to="/doctors" className="hover:text-green-400">Doctors</Link>
              <Link to="/medical-store" className="hover:text-green-400">Medical Store</Link>
              <Link to="/contact" className="hover:text-green-400">Contact</Link>
            </>
          ) : (
            <span className="text-green-400">Hi {user?.firstName}</span>
          )}
          {isAuth ? (
            <button
              onClick={logOutHandle}
              className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-green-400 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gray-800 shadow-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] py-4 px-6" : "max-h-0"
        }`}
      >
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-white">
          Home
        </Link>
        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-white">
          About
        </Link>
        <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-white">
          Services
        </Link>
        <Link to="/doctors" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-white">
          Doctors
        </Link>
        <Link to="/medical-store" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-white">
          Medical Store
        </Link>
        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-white">
          Contact
        </Link>
        <div className="pt-3">
          {isAuth ? (
            <button
              onClick={() => {
                logOutHandle();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-orange-400 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                handleLogin();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-green-400 text-white px-4 py-2 rounded"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
