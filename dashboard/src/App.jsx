// import React, { useContext, useEffect } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";
// import AddNewDoctor from "./components/AddNewDoctor";
// import AddNewAdmin from "./components/AddNewAdmin";
// import Messages from "./components/Messages";
// import Patients from "./components/Patients";
// import Doctors from "./components/Doctors";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Context } from "./main";
// import axios from "axios";

// const App = () => {
//   const { isAuthenticated, setIsAuthenticated, setAdmin } = useContext(Context);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(
//           "https://medialert-ai-3.onrender.com/api/v1/user/single-admin",
//           { withCredentials: true }
//         );
//         setIsAuthenticated(true);
//         setAdmin(response?.data?.user);
//       } catch (error) {
//         setIsAuthenticated(false);
//         setAdmin({});
//       }
//     };
//     fetchUser();
//   }, [setIsAuthenticated, setAdmin]);

//   return (
//     <div>
//       <Sidebar />
//       <Routes>
//         <Route
//           path="/"
//           element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/login"
//           element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
//         />
//         <Route path="/add-new/doctor" element={<AddNewDoctor />} />
//         <Route path="/add-new/admin" element={<AddNewAdmin />} />
//         <Route path="/all-messages" element={<Messages />} />
//         <Route path="/all-patients" element={<Patients />} />
//         <Route path="/all-doctors" element={<Doctors />} />
//       </Routes>
//       <ToastContainer position="top-center" />
//     </div>
//   );
// };

// export default App;





import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import AddNewAdmin from "./components/AddNewAdmin";
import Messages from "./components/Messages";
import Patients from "./components/Patients";
import Doctors from "./components/Doctors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./main";
import axios from "axios";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setAdmin } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://medialert-ai-3.onrender.com/api/v1/user/single-admin",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setAdmin(response?.data?.user);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [setIsAuthenticated, setAdmin]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Checking Authentication...
      </div>
    );
  }

  return (
    <div className="flex">
      {isAuthenticated && <Sidebar />}

      <div className="flex-1">
        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
          />

          {/* Protected Routes */}
          {isAuthenticated && (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-new/doctor" element={<AddNewDoctor />} />
              <Route path="/add-new/admin" element={<AddNewAdmin />} />
              <Route path="/all-messages" element={<Messages />} />
              <Route path="/all-patients" element={<Patients />} />
              <Route path="/all-doctors" element={<Doctors />} />
            </>
          )}

          {/* Catch-All Route */}
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
          />
        </Routes>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default App;
