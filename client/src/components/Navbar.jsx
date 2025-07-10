// import React, { useContext, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Context } from "../main";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useState } from "react";

// const Navbar = () => {
//   const { isAuth, setIsAuth } = useContext(Context);
//   const { user, setUser } = useContext(Context);
//   const userData = JSON.parse(localStorage.getItem("user"));
//   // console.log(userData, "user data");
//   const navigate = useNavigate();

//   // console.log(user, "user in navbar");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     console.log(user, "use");
//   }, [user]);

//   const logOutHandle = async () => {
//     try {
//       const logoutEndpoints = {
//         doctor: "logout-doctor",
//         patient: "logout-patient",
//         admin: "logout-admin",
//       };

//       const endpoint = logoutEndpoints[user.role];

//       if (endpoint) {
//         const res = await axios.get(
//           `https://medialert-ai-3.onrender.com/api/v1/user/${endpoint}`,
//           { withCredentials: true }
//         );
//         toast.success(res.data.message);
//       }

//       setIsAuth(false);
//       setUser({});
//       localStorage.removeItem("user");
//       sessionStorage.removeItem("user");
//       navigate("/login");
//     } catch (err) {
//       toast.error(
//         err.response?.data?.message || "Logout failed. Please try again."
//       );
//     }
//   };

//   const handleLogin = () => {
//     navigate("/login");
//   };
//   console.log(isAuth, "isAuth in navbar");

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-40">
//       {/* Topbar */}

//       <div
//         className="bg-blue-300 text-white text-m py-2 px-8 flex justify-between items-center"
//         style={{
//           background:
//             "linear-gradient(135deg, #1fa3d4, #86c7e2, #206f91, #5b879f, #a4c1ca)",
//         }}
//       >
//         <div className="hidden md:flex items-center gap-1">
//           <i className="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM
//         </div>
//         <div className="flex gap-3">
//           <i className="bi bi-phone"></i> Call us now 9918231485
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="flex flex-wrap justify-between items-center py-2 px-6 max-w-[1540px] mx-auto">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <h1 className="text-xl font-bold text-gray-800">MediAlert AI</h1>
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <div
//           className="md:hidden flex items-center"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <button className="text-gray-700 hover:text-black text-xl">
//             {isMobileMenuOpen ? "✖️" : "•••"} {/* Show three dots on mobile */}
//           </button>
//         </div>

//         {/* Navigation Links (Desktop) */}
//         <nav className="hidden lg:flex gap-6 items-center">
//           {Object.keys(user).length === 0 ? (
//             <>
//               <Link
//                 to="/"
//                 className="text-gray-700 hover:text-black font-medium hover:underline underline-offset-8"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="text-gray-700 hover:text-black font-medium hover:underline underline-offset-8"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/services"
//                 className="text-gray-700 hover:text-black font-medium hover:underline underline-offset-8"
//               >
//                 Services
//               </Link>
//               {/* <Link to="/appointment" className="text-gray-700 hover:text-black font-medium hover:underline underline-offset-8">Appointment</Link> */}
//               <Link
//                 to="/doctors"
//                 className="text-gray-700 hover:text-black font-medium hover:underline underline-offset-8"
//               >
//                 Doctors
//               </Link>

//               <Link
//                 to="/medical-store"
//                 className="text-gray-700 hover:text-black font-medium hover:underline underline-offset-8"
//               >
//                 Near Medical Store
//               </Link>

//               <Link
//                 to="/contact"
//                 className="text-gray-700 hover:text-black font-medium hover:underline underline-offset-8"
//               >
//                 Contact
//               </Link>
//             </>
//           ) : (
//             `Hi ${user.firstName} ${user.lastName}`
//           )}

//           {/* Login/Logout Button */}
//           {isAuth ? (
//             <button
//               onClick={logOutHandle}
//               className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               onClick={handleLogin}
//               className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//             >
//               Login
//             </button>
//           )}
//         </nav>

//         {/* Mobile Menu (visible when isMobileMenuOpen is true) */}
//         <nav
//           className={`md:hidden ${
//             isMobileMenuOpen ? "block" : "hidden"
//           } bg-gray-100 py-3 px-6 w-full`}
//         >
//           <Link to="/" className="block py-2 text-gray-700 hover:text-black">
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="block py-2 text-gray-700 hover:text-black"
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="block py-2 text-gray-700 hover:text-black"
//           >
//             Services
//           </Link>
//           <Link
//             to="/appointment"
//             className="block py-2 text-gray-700 hover:text-black"
//           >
//             Appointment
//           </Link>
//           <Link
//             to="/doctors"
//             className="block py-2 text-gray-700 hover:text-black"
//           >
//             Doctors
//           </Link>
//           <Link
//             to="/contact"
//             className="block py-2 text-gray-700 hover:text-black"
//           >
//             Contact
//           </Link>
//           <div className="py-2">
//             {isAuth ? (
//               <button
//                 onClick={logOutHandle}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
//               >
//                 Logout
//               </button>
//             ) : (
//               <button
//                 onClick={handleLogin}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;






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
      {/* Top Bar */}
      {/* <div
        className="bg-gray-800 text-white text-sm py-2 px-4 flex justify-between items-center"
        // style={{
        //   background:
        //     "linear-gradient(135deg, #1fa3d4, #86c7e2, #206f91, #5b879f, #a4c1ca)",
        // }}
      >
        <div className="hidden md:flex items-center gap-1">
          <i className="bi bi-clock"></i> Mon - Sat, 8AM to 10PM
        </div>
        <div className="flex gap-3 items-center">
          <i className="bi bi-phone"></i> Call us: 9918231485
        </div>
      </div> */}

      {/* Main Nav */}
      <div className="flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
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
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
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
        <Link to="/appointment" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-white">
          Appointment
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
