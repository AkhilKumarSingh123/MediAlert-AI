// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../main";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Navigate } from "react-router-dom";
// import { MdDelete } from "react-icons/md";

// const Doctors = () => {
//   const [doctors, setDoctors] = useState([]);
//   const { isAuthenticated } = useContext(Context);

//   // get all doctor
//   // by one function useEffect
//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const { data } = await axios.get(
//           "https://medialert-ai-3.onrender.com/api/v1/user//get-all-doctor",
//           { withCredentials: true }
//         );
//         setDoctors(data.doctor);
//       } catch (error) {
//         toast.error(error.response.data.message);
//       }
//     };
//     fetchDoctors();
//   }, []);
//   if (!isAuthenticated) {
//     <Navigate to="/login" />;
//   }
//   // delete doctor by admin

//   const handleDelete = async (doctorId) => {
//     try {
//       const { data } = await axios.delete(
//         `https://medialert-ai-3.onrender.com/api/v1/user/delete/doctor/${doctorId}`,
//         { withCredentials: true }
//       );
//       setDoctors((prevDoctors) =>
//         prevDoctors.filter((doctor) => doctor._id !== doctorId)
//       );
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
//   return (
//     <div className=" py-20 bg-gray-200">
//       <h1 className="text-2xl md:text-3xl font-bold py-4 text-center text-indigo-600 mb-8 cursor-pointer">
//         All Doctor{" "}
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-[1540px] mx-auto bg-white shadow-md rounded-lg">
//           <thead className="bg-gray-800 text-white p-2">
//             <tr className="py-2">
//               <th className="py-2 px-4 cursor-pointer text-lg">#</th>
//               <th className="py-2 px-4 cursor-pointer text-lg">Image</th>
//               <th className="py-2 px-4 cursor-pointer text-lg">Name </th>
//               <th className="py-2 px-4 cursor-pointer text-lg">Department</th>
//               <th className="py-2 px-4 cursor-pointer text-lg">NIC</th>
//               <th className="py-2 px-4 cursor-pointer text-lg">Phone</th>
//               <th className="py-2 px-4 cursor-pointer text-lg">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {doctors && doctors.length > 0 ? (
//               doctors.map((ele, index) => (
//                 <tr key={ele._id} className="hover:bg-gray-300 ">
//                   <td className="py-2 text-center px-4 cursor-pointer">
//                     {index + 1}
//                   </td>
//                   <td className="py-2 text-center px-4 cursor-pointer">
//                     {ele.docImage.url}
//                   </td>
//                   <td className="py-2 text-center px-4 cursor-pointer">{`${ele.firstName} ${ele.lastName}`}</td>
//                   <td className="py-2 text-center px-4 cursor-pointer">
//                     {ele.doctorDepartment}
//                   </td>
//                   <td className="py-2 text-center px-4 cursor-pointer">
//                     {ele.nic}
//                   </td>
//                   <td className="py-2 text-center px-4 cursor-pointer">
//                     {ele.phone}
//                   </td>
//                   <td>
//                     <MdDelete
//                       size={25}
//                       onClick={() => handleDelete(ele._id)}
//                       className="cursor-pointer text-red-600 mx-auto text-3xl"
//                     />
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td>No Registered Doctor Founds</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Doctors;







import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "https://medialert-ai-3.onrender.com/api/v1/user/get-all-doctor",
          { withCredentials: true }
        );
        setDoctors(data.doctor);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to load doctors");
      }
    };
    fetchDoctors();
  }, []);

  const handleDelete = async (doctorId) => {
    try {
      const { data } = await axios.delete(
        `https://medialert-ai-3.onrender.com/api/v1/user/delete/doctor/${doctorId}`,
        { withCredentials: true }
      );
      setDoctors((prevDoctors) =>
        prevDoctors.filter((doc) => doc._id !== doctorId)
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Delete failed");
    }
  };

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        All Doctors
      </h1>

      {doctors.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No registered doctors found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {doctors.map((doc, index) => (
            <div
              key={doc._id}
              className="w-full h-48 bg-white p-2 rounded-t-xl flex items-center justify-center"
            >
              <img
                src={doc.docImage?.url}
                alt={`${doc.firstName} ${doc.lastName}`}
                className="max-h-full max-w-full object-contain "
              />
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-bold text-indigo-600">
                  {doc.firstName} {doc.lastName}
                </h2>
                <p className="text-gray-600 text-sm">
                  <strong>Department:</strong> {doc.doctorDepartment}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>NIC:</strong> {doc.nic}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Phone:</strong> {doc.phone}
                </p>
              </div>
              <button
                onClick={() => handleDelete(doc._id)}
                className="absolute top-3 right-3 text-red-600 hover:text-red-800 transition"
              >
                <MdDelete size={24} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Doctors;
