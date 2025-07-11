// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Context } from "../main";
// import { GoCheckCircleFill } from "react-icons/go";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";

// const Dashboard = () => {
//   const [appointments, setAppointments] = useState([]);

//   // get all appointments
//   useEffect(() => {
//     const fatchAppointments = async () => {
//       try {
//         const { data } = await axios.get(
//           "https://medialert-ai-3.onrender.com/api/v1/appointments/get-all-appointment",
//           { withCredentials: true }
//         );
//         setAppointments(data.appointments);
//         // console.log(data.appointments, "all appointments");
//       } catch (error) {
//         toast.error(error.response.data.message);
//       }
//     };
//     fatchAppointments();
//   }, []);

//   // update status on appointment
//   const handleStatus = async (appointmentId, status) => {
//     try {
//       const { data } = await axios.put(
//         `https://medialert-ai-3.onrender.com/api/v1/appointments/update-status-appointment/${appointmentId}`,
//         { status },
//         { withCredentials: true }
//       );
//       setAppointments((preAppointments) => {
//         preAppointments.map((appointmet) => {
//           appointmet._id === appointmentId
//             ? { ...appointmet, status }
//             : appointmet;
//         });
//       });
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error.message.data.message);
//     }
//   };

//   // delete appointment by admin
//   const handleDelete = async (appointmentId) => {
//     try {
//       const { data } = await axios.delete(
//         `https://medialert-ai-3.onrender.com/api/v1/appointments/delete-appointment/${appointmentId}`,
//         { withCredentials: true }
//       );
//       setAppointments((app) => {
//         app.filter((appointmet) => appointmet._id !== appointmentId);
//       });
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
//   const { isAuthenticated } = useContext(Context);
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }
//   return (
//     <div className="flex flex-col gap-5 mx-4 md:mx-20 bg-gray-100 p-4 md:p-10 h-screen rounded-lg">
//       <div className="flex flex-col md:flex-row gap-5 h-auto min-h-[35vh]">
//         <div className="flex flex-1 items-center bg-blue-200 rounded-lg p-5">
//           <div className="flex-2 ml-4 md:md-0">
//             <div className="flex items-center font-bold cursor-pointer text-2xl md:text-3xl mb-3">
//               <p className="mr-2">Hello,</p>
//               <p className="text-pink-500">Admin</p>
//             </div>
//             <p className="text-sm md:text-base">
//               Welcome to the admin Dashboard <div className="br"></div> Here You
//               can message all the appointments and doctors
//             </p>
//           </div>
//         </div>
//         <div
//           className="flex-1 bg-blue-500 text-white flex flex-col justify-center 
//         items-center rounded-lg p-5 "
//         >
//           <p className="text-xl md:text-2xl font-semibold">Total Appointment</p>
//           <h1 className="text-2xl md:text-3xl font-bold tracking-wider">50</h1>
//         </div>
//         <div className="flex-1 bg-blue-200 text-pink-500 flex flex-col justify-center items-center rounded-lg p-5">
//           <p className="text-xl md:text-2xl font-semibold">Registerd Doctors</p>
//           <p className="text-2xl md:text-3xl font-bold tracking-wider">15</p>
//         </div>
//       </div>
//       <div className="bg-white rounded-lg p-5 md:p-10 h-auto md:h-[65vh] overflow-y-auto">
//         <h4 className="text-xl md:text-2xl  text-center cursor-pointer font-semibold mb-5 text-gray-800">
//           Appointments
//         </h4>
//         <table className="min-w-[1450px] mx-auto bg-white px-12  shadow-md rounded-lg">
//           <thead className="bg-gray-800 text-white p-2">
//             <tr>
//               <th className="py-2 md:py-3">Patient</th>
//               <th className="py-2 md:py-3">Date</th>
//               <th className="py-2 md:py-3">Doctor</th>
//               <th className="py-2 md:py-3">Department</th>
//               <th className="py-2 md:py-3">Status</th>
//               <th className="py-2 md:py-3">Visited</th>
//               <th className="py-2 md:py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments && appointments.length > 0 ? (
//               appointments.map((items) => (
//                 <tr key={items._id} className="hover:bg-gray-300 ">
//                   <td className="py-2 text-center md:py-3 cursor-pointer">{`${items.firstName} ${items.lastName}`}</td>
//                   <td className="py-2 text-center md:py-3 cursor-pointer">
//                     {items.appointment_date.substring(0, 10)}
//                   </td>
//                   <td className="py-2 text-center md:py-3 cursor-pointer">{`${items.doctor.firstName} ${items.doctor.lastName}`}</td>
//                   <td className="py-2 text-center md:py-3 cursor-pointer">
//                     {items.department}
//                   </td>
//                   <td className="py-2 text-center md:py-3 cursor-pointer">
//                     <select
//                       value={items.status}
//                       onChange={(e) => handleStatus(items._id, e.target.value)}
//                       className={`w-full text-md lg:text-lg font-semibold border-none ${
//                         items.status === "Pending"
//                           ? "text-yellow-500"
//                           : items.status === "Acceped"
//                           ? "text-green-500"
//                           : "text-red-500"
//                       }`}
//                     >
//                       <option
//                         value="Pending"
//                         className="text-yellow-500 cursor-pointer text-center"
//                       >
//                         Pending
//                       </option>
//                       <option
//                         value="Accepted"
//                         className="text-green-500 cursor-pointer text-center"
//                       >
//                         Accepted
//                       </option>
//                       <option
//                         value="Rejected"
//                         className="text-red-500 cursor-pointer text-center"
//                       >
//                         Rejected
//                       </option>
//                     </select>
//                   </td>
//                   <td className="py-2 text-center md:py-3 cursor-pointer">
//                     {appointments.hasVisited ? (
//                       <GoCheckCircleFill className="text-green-500 text-xl md:text-2xl mx-auto" />
//                     ) : (
//                       <AiFillCloseCircle className="text-red-500 md:text-2xl lg:text-3xl mx-auto" />
//                     )}
//                   </td>
//                   <td className="py-2 text-center md:py-3 cursor-pointer ">
//                     <MdDelete
//                       size={20}
//                       className="flex justify-center items-center text-red-600 text-center"
//                       onClick={() => handleDelete(items._id)}
//                     />
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td>No Registered Patients Founds</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Context } from "../main";
// import { GoCheckCircleFill } from "react-icons/go";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";

// const Dashboard = () => {
//   const [appointments, setAppointments] = useState([]);
//   const { isAuthenticated } = useContext(Context);

//   useEffect(() => {
//     const fatchAppointments = async () => {
//       try {
//         const { data } = await axios.get(
//           "https://medialert-ai-3.onrender.com/api/v1/appointments/get-all-appointment",
//           { withCredentials: true }
//         );
//         setAppointments(data.appointments);
//       } catch (error) {
//         toast.error(error.response?.data?.message || "Something went wrong");
//       }
//     };
//     fatchAppointments();
//   }, []);

//   const handleStatus = async (appointmentId, status) => {
//     try {
//       const { data } = await axios.put(
//         `https://medialert-ai-3.onrender.com/api/v1/appointments/update-status-appointment/${appointmentId}`,
//         { status },
//         { withCredentials: true }
//       );
//       setAppointments((prev) =>
//         prev.map((a) =>
//           a._id === appointmentId ? { ...a, status: status } : a
//         )
//       );
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Update failed");
//     }
//   };

//   const handleDelete = async (appointmentId) => {
//     try {
//       const { data } = await axios.delete(
//         `https://medialert-ai-3.onrender.com/api/v1/appointments/delete-appointment/${appointmentId}`,
//         { withCredentials: true }
//       );
//       setAppointments((prev) =>
//         prev.filter((a) => a._id !== appointmentId)
//       );
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Delete failed");
//     }
//   };

//   if (!isAuthenticated) return <Navigate to="/login" />;

//   return (
//     <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
//       {/* Welcome Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <div className="bg-gradient-to-br from-blue-300 to-blue-500 text-white rounded-xl p-6 shadow-md animate-fadeIn">
//           <h2 className="text-xl md:text-2xl font-bold mb-2">Hello, <span className="text-yellow-200">Admin</span></h2>
//           <p className="text-sm">Welcome to the dashboard. Manage appointments and doctors here.</p>
//         </div>
//         <div className="bg-blue-500 text-white rounded-xl p-6 text-center shadow-md animate-fadeIn">
//           <p className="text-xl font-semibold">Total Appointments</p>
//           <h1 className="text-3xl font-bold mt-2">{appointments.length}</h1>
//         </div>
//         <div className="bg-pink-200 text-pink-700 rounded-xl p-6 text-center shadow-md animate-fadeIn">
//           <p className="text-xl font-semibold">Registered Doctors</p>
//           <h1 className="text-3xl font-bold mt-2">15</h1>
//         </div>
//       </div>

//       {/* Appointments Table or Cards */}
//       <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
//         <h2 className="text-center text-xl md:text-2xl font-bold text-gray-700 mb-6">Appointments</h2>

//         {/* Show in Table on Desktop */}
//         <div className="hidden md:block overflow-x-auto">
//           <table className="w-full border rounded-md text-center shadow">
//             <thead className="bg-gray-800 text-white">
//               <tr>
//                 <th className="p-3">Patient</th>
//                 <th className="p-3">Date</th>
//                 <th className="p-3">Doctor</th>
//                 <th className="p-3">Department</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Visited</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.map((item) => (
//                 <tr key={item._id} className="hover:bg-gray-100 transition">
//                   <td className="p-2">{item.firstName} {item.lastName}</td>
//                   <td className="p-2">{item.appointment_date?.substring(0, 10)}</td>
//                   <td className="p-2">{item.doctor?.firstName} {item.doctor?.lastName}</td>
//                   <td className="p-2">{item.department}</td>
//                   <td className="p-2">
//                     <select
//                       value={item.status}
//                       onChange={(e) => handleStatus(item._id, e.target.value)}
//                       className={`font-semibold rounded-md p-1 ${
//                         item.status === "Pending"
//                           ? "text-yellow-500"
//                           : item.status === "Accepted"
//                           ? "text-green-600"
//                           : "text-red-500"
//                       }`}
//                     >
//                       <option value="Pending">Pending</option>
//                       <option value="Accepted">Accepted</option>
//                       <option value="Rejected">Rejected</option>
//                     </select>
//                   </td>
//                   <td>
//                     {item.hasVisited ? (
//                       <GoCheckCircleFill className="text-green-500 mx-auto text-lg" />
//                     ) : (
//                       <AiFillCloseCircle className="text-red-500 mx-auto text-lg" />
//                     )}
//                   </td>
//                   <td>
//                     <MdDelete
//                       onClick={() => handleDelete(item._id)}
//                       className="cursor-pointer text-red-600 mx-auto"
//                       size={20}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Show in Cards on Mobile */}
//         <div className="block md:hidden space-y-4">
//           {appointments.map((item) => (
//             <div
//               key={item._id}
//               className="border border-gray-300 rounded-lg p-4 shadow-sm"
//             >
//               <h3 className="font-semibold text-lg mb-1">
//                 {item.firstName} {item.lastName}
//               </h3>
//               <p><strong>Date:</strong> {item.appointment_date?.substring(0, 10)}</p>
//               <p><strong>Doctor:</strong> {item.doctor?.firstName} {item.doctor?.lastName}</p>
//               <p><strong>Department:</strong> {item.department}</p>
//               <p className="my-1">
//                 <strong>Status:</strong>{" "}
//                 <select
//                   value={item.status}
//                   onChange={(e) => handleStatus(item._id, e.target.value)}
//                   className="ml-2 border rounded-md p-1"
//                 >
//                   <option value="Pending">Pending</option>
//                   <option value="Accepted">Accepted</option>
//                   <option value="Rejected">Rejected</option>
//                 </select>
//               </p>
//               <div className="flex justify-between items-center mt-3">
//                 <span>
//                   {item.hasVisited ? (
//                     <GoCheckCircleFill className="text-green-500" />
//                   ) : (
//                     <AiFillCloseCircle className="text-red-500" />
//                   )}
//                 </span>
//                 <MdDelete
//                   onClick={() => handleDelete(item._id)}
//                   className="text-red-500 cursor-pointer"
//                   size={20}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;







import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "https://medialert-ai-3.onrender.com/api/v1/appointments/get-all-appointment",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Error fetching appointments");
      }
    };
    fetchAppointments();
  }, []);

  const handleStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `https://medialert-ai-3.onrender.com/api/v1/appointments/update-status-appointment/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prev) =>
        prev.map((a) =>
          a._id === appointmentId ? { ...a, status } : a
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Status update failed");
    }
  };

  const handleDelete = async (appointmentId) => {
    try {
      const { data } = await axios.delete(
        `https://medialert-ai-3.onrender.com/api/v1/appointments/delete-appointment/${appointmentId}`,
        { withCredentials: true }
      );
      setAppointments((prev) =>
        prev.filter((a) => a._id !== appointmentId)
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Delete failed");
    }
  };

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen w-full">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl p-6 shadow-md">
          <h2 className="text-lg sm:text-xl font-bold mb-2">Hello, <span className="text-yellow-200">Admin</span></h2>
          <p className="text-sm">Welcome to your dashboard. You can manage appointments and doctors here.</p>
        </div>
        <div className="bg-blue-500 text-white rounded-xl p-6 text-center shadow-md">
          <p className="text-lg font-semibold">Total Appointments</p>
          <h1 className="text-2xl font-bold mt-2">{appointments.length}</h1>
        </div>
        <div className="bg-pink-100 text-pink-700 rounded-xl p-6 text-center shadow-md">
          <p className="text-lg font-semibold">Registered Doctors</p>
          <h1 className="text-2xl font-bold mt-2">15</h1>
        </div>
      </div>

      {/* Appointments Section */}
      <div className="bg-white rounded-lg shadow p-4 md:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-gray-700">
          Appointments
        </h2>

        {/* Card Grid for Desktop and Mobile */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {appointments.map((item) => (
            <div
              key={item._id}
              className="border border-gray-200 rounded-xl p-6 shadow-md bg-gray-50 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-indigo-600">
                  {item.firstName} {item.lastName}
                </h3>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-500 hover:text-red-700"
                  title="Delete Appointment"
                >
                  <MdDelete size={22} />
                </button>
              </div>

              <p className="text-gray-700 mb-1">
                <strong>Date:</strong> {item.appointment_date?.substring(0, 10)}
              </p>

              <p className="text-gray-700 mb-1">
                <strong>Doctor:</strong> {item.doctor?.firstName} {item.doctor?.lastName}
              </p>

              <p className="text-gray-700 mb-1">
                <strong>Department:</strong> {item.department}
              </p>

              <div className="mt-3">
                <strong>Status:</strong>
                <select
                  value={item.status}
                  onChange={(e) => handleStatus(item._id, e.target.value)}
                  className="ml-2 px-2 py-1 border rounded-md text-sm bg-white focus:outline-none"
                >
                  <option value="Pending" className="text-yellow-500">Pending</option>
                  <option value="Accepted" className="text-green-600">Accepted</option>
                  <option value="Rejected" className="text-red-500">Rejected</option>
                </select>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="font-medium text-gray-600">
                  Visited:
                </p>
                {item.hasVisited ? (
                  <GoCheckCircleFill className="text-green-500 text-2xl" />
                ) : (
                  <AiFillCloseCircle className="text-red-500 text-2xl" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
