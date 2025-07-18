// import { useContext, useEffect, useState } from "react";
// import { Context } from "../main";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Navigate } from "react-router-dom";
// import { MdDelete } from "react-icons/md";

// const Patients = () => {
//   const [doctors, setDoctors] = useState([]);
//   const { isAuthenticated } = useContext(Context);

//   // get all doctor
//   // by one function useEffect
//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const { data } = await axios.get(
//           "https://medialert-ai-3.onrender.com/api/v1/user/get-all-patient",
//           { withCredentials: true }
//         );
//         setDoctors(data.patient);
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

//   const handleDelete = async (patientId) => {
//     try {
//       const { data } = await axios.delete(
//         `https://medialert-ai-3.onrender.com/api/v1/user/delete/patient/${patientId}`,
//         { withCredentials: true }
//       );
//       setDoctors((prevDoctors) =>
//         prevDoctors.filter((doctor) => doctor._id !== patientId)
//       );
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
//   return (
//     <div className=" py-20 bg-gray-200">
//       <h1 className="text-2xl md:text-3xl font-bold py-4 text-center text-indigo-600 mb-8 cursor-pointer">
//         All Patients{" "}
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-[1540px] mx-auto bg-white shadow-md rounded-lg">
//           <thead className="bg-gray-800 text-white p-2">
//             <tr className="py-2">
//               <th className="py-2 px-4 cursor-pointer text-lg">#</th>
//               <th className="py-2 px-4 cursor-pointer text-lg">Name </th>
//               <th className="py-2 px-4 cursor-pointer text-lg">Email</th>
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

//                   <td className="py-2 text-center px-4 cursor-pointer">{`${ele.firstName} ${ele.lastName}`}</td>
//                   <td className="py-2 text-center px-4 cursor-pointer">
//                     {ele.email}
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
//                 <td>No Registered Patients Founds</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Patients;









import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const { data } = await axios.get(
          "https://medialert-ai-3.onrender.com/api/v1/user/get-all-patient",
          { withCredentials: true }
        );
        setPatients(data.patient);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to fetch");
      }
    };
    fetchPatients();
  }, []);

  const handleDelete = async (patientId) => {
    try {
      const { data } = await axios.delete(
        `https://medialert-ai-3.onrender.com/api/v1/user/delete/patient/${patientId}`,
        { withCredentials: true }
      );
      setPatients((prev) =>
        prev.filter((patient) => patient._id !== patientId)
      );
      toast.success(data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Delete failed");
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="py-20 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-8">
        All Patients
      </h1>

      {patients.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No registered patients found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {patients.map((patient, index) => (
            <div
              key={patient._id}
              className="bg-white rounded-lg shadow-lg p-4 relative border border-gray-200 hover:shadow-xl transition"
            >
              <div className="absolute top-3 right-3">
                <MdDelete
                  size={24}
                  onClick={() => handleDelete(patient._id)}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  title="Delete Patient"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {index + 1}. {patient.firstName} {patient.lastName}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Email:</strong> {patient.email}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>NIC:</strong> {patient.nic}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Phone:</strong> {patient.phone}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Patients;
