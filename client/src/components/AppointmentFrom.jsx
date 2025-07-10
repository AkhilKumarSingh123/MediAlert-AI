
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const AppointmentForm = (onSend) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [nic, setNic] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   const [appointmentDate, setAppointmentDate] = useState("");
//   const [department, setDepartment] = useState("Pediatrics");
//   const [doctorFirstName, setDoctorFirstName] = useState("");
//   const [doctorLastName, setDoctorLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [hasVisited, setHasVisited] = useState(false);

//   // const { setIsAuth, setUser } = useContext(Context);

//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   const minDate = tomorrow.toISOString().split('T')[0];

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem("user")) {
//       navigate("/login");
//     }
//   }, []);

//   const departmentsArray = [
//     "Pediatrics",
//     "Orthopedics",
//     "Cardiology",
//     "Neurology",
//     "Oncology",
//     "Radiology",
//     "Physical Therapy",
//     "Dermatology",
//     "ENT",
//   ];

//   const [doctors, setDoctors] = useState([]);
//   useEffect(() => {
//     const fetchDoctor = async () => {
//       const { data } = await axios.get(
//         "https://medialert-ai-3.onrender.com/api/v1/user/get-all-doctor",
//         { withCredentials: true }
//       );
//       setDoctors(data?.doctor);
//     };
//     fetchDoctor();
//   }, []);

//   const handleAppointment = async (e) => {
//     e.preventDefault();
//     try {
//       const hasVisitedBool = Boolean(hasVisited);
//       const { data } = await axios.post(
//         "https://medialert-ai-3.onrender.com/api/v1/appointments/create-appointment",
//         {
//           firstName,
//           lastName,
//           email,
//           phone,
//           nic,
//           dob,
//           gender,
//           appointment_date: appointmentDate,
//           department,
//           doctor_firstName: doctorFirstName,
//           doctor_lastName: doctorLastName,
//           hasVisited: hasVisitedBool,
//           address,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       toast.success(data.message);
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setPhone("");
//       setNic("");
//       setDob("");
//       setGender("");
//       setAppointmentDate("");
//       setDepartment("");
//       setDoctorFirstName("");
//       setDoctorLastName("");
//       setHasVisited(false);
//       setAddress("");
//       onSend();
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
//   // const tomorrow = new Date();
//   // tomorrow.setDate(tomorrow.getDate() + 1);
//   // const minDate = tomorrow.toISOString().split('T')[0];
//   return (
//     <div
//       className="container mx-auto py-12 px-4 bg-gray-100 my-4"
//       style={{
//         background:
//           "linear-gradient(135deg, #1fa3d4, #86c7e2, #206f91, #5b879f, #a4c1ca)",
//       }}
//     >
//       <h1 className="text-3xl font-bold mb-8 text-center cursor-pointer text-blue-800">
//         Appointment
//       </h1>
//       <form className="space-y-6" onSubmit={handleAppointment}>
//         <div className="flex flex-col md:flex-row gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             className="w-full md:w-1/2 p-3 border border-gray-300  bg-white-300 rounded-md outline-none shadow-md"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             className="w-full md:w-1/2 p-3 border border-gray-300  bg-white-100 rounded-md outline-none shadow-md"
//           />
//         </div>
//         <div className="flex flex-col md:flex-row gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full md:w-1/2 p-3 border border-gray-300  bg-white-300 rounded-md outline-none shadow-md"
//           />
//           <input
//             type="number"
//             placeholder="Mobile Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="w-full md:w-1/2 p-3 border border-gray-300  bg-white-300 rounded-md outline-none shadow-md"
//           />
//         </div>
//         <div className="flex flex-col md:flex-row gap-4 mb-4">
//           <input
//             type="number"
//             placeholder="5 Digit NIC Number"
//             value={nic}
//             onChange={(e) => setNic(e.target.value)}
//             className="w-full md:w-1/2 p-3 border border-gray-300  bg-white-300 rounded-md outline-none shadow-md"
//           />
//           <input
//             type="date"
//             placeholder="Date of Birth"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             className="w-full md:w-1/2 p-3 border border-gray-300  bg-white-300 rounded-md outline-none shadow-md"
//           />
//         </div>
//         <div className="flex flex-col md:flex-row gap-4 mb-4">
//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             className="w-full md:w-1/2 p-3 border border-gray-300  bg-white-300 rounded-md outline-none shadow-md"
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <input
//             type="date"
//             placeholder="Appointment Date"
//             min={minDate}
//             value={appointmentDate}
//             onChange={(e) => setAppointmentDate(e.target.value)}
//             className="w-full md:w-1/2 p-3 border border-gray-300  bg-white-300 rounded-md outline-none shadow-md"
//           />
//         </div>
//         <div className="flex flex-col md:flex-row gap-4 mb-4">
//           <select
//             value={department}
//             onChange={(e) => {
//               setDepartment(e.target.value);
//               setDoctorFirstName("");
//               setDoctorLastName("");
//             }}
//             className="w-full md:w-1/2 p-3 border border-gray-300  bg-white-300 rounded-md outline-none shadow-md"
//           >
//             {departmentsArray.map((depart, index) => (
//               <option value={depart} key={index}>
//                 {depart}
//               </option>
//             ))}
//           </select>
//           <select
//             value={`${doctorFirstName} ${doctorLastName}`}
//             onChange={(e) => {
//               const [firstName, lastName] = e.target.value.split(" ");
//               setDoctorFirstName(firstName);
//               setDoctorLastName(lastName);
//             }}
//             disabled={!department}
//             className="w-full md:w-1/2 p-3 border border-gray-300  bg-white-100 rounded-md outline-none shadow-md"
//           >
//             <option value="">Select Doctor</option>
//             {doctors
//               .filter((doctor) => doctor.doctorDepartment === department)
//               .map((doctor, index) => (
//                 <option
//                   value={`${doctor.firstName} ${doctor.lastName}`}
//                   key={index}
//                 >
//                   {doctor.firstName} {doctor.lastName}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <textarea
//           rows="4"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Address"
//           className="w-full p-3 border border-gray-300 bg-black-100 rounded-md outline-none shadow-md"
//         />
//         <div className="flex items-center text-center justify-center gap-4 mb-4">
//           <p className="mb-0 text-center text-green-200 cursor-pointer justify-center">
//             Have you visited before?
//           </p>
//           <input
//             type="checkbox"
//             checked={hasVisited}
//             onChange={(e) => setHasVisited(e.target.checked)}
//             className="w-6 h-6 rounded-full "
//           />
//         </div>
//         <button
//           type="submit"
//           className="mx-auto bg-blue-400 text-black w-full 
//           cursor-pointer hover:text-white py-3 px-6 rounded-md hover:bg-blue-600"
//         >
//           GET APPOINTMENT
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AppointmentForm;





import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AppointmentForm = ({ onSend }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const navigate = useNavigate();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const departmentsArray = [
    "Pediatrics", "Orthopedics", "Cardiology", "Neurology",
    "Oncology", "Radiology", "Physical Therapy", "Dermatology", "ENT",
  ];

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctor = async () => {
      const { data } = await axios.get(
        "https://medialert-ai-3.onrender.com/api/v1/user/get-all-doctor",
        { withCredentials: true }
      );
      setDoctors(data?.doctor);
    };
    fetchDoctor();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("user")) navigate("/login");
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "https://medialert-ai-3.onrender.com/api/v1/appointments/create-appointment",
        {
          firstName, lastName, email, phone, nic, dob, gender,
          appointment_date: appointmentDate,
          department, doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName, hasVisited: hasVisitedBool, address
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setNic("");
      setDob(""); setGender(""); setAppointmentDate(""); setDepartment("Pediatrics");
      setDoctorFirstName(""); setDoctorLastName(""); setHasVisited(false); setAddress("");
      onSend();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded shadow">
      <h2 className="text-3xl text-center font-bold mb-8 text-blue-900">Appointment</h2>
      <form className="space-y-5" onSubmit={handleAppointment}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}
            className="p-3 rounded border border-gray-300 outline-none shadow-sm" required />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}
            className="p-3 rounded border border-gray-300 outline-none shadow-sm" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded border border-gray-300 outline-none shadow-sm" required />
          <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)}
            className="p-3 rounded border border-gray-300 outline-none shadow-sm" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="5 Digit NIC Number" value={nic} onChange={(e) => setNic(e.target.value)}
            className="p-3 rounded border border-gray-300 outline-none shadow-sm" required />
          <input type="date" placeholder="DOB" value={dob} onChange={(e) => setDob(e.target.value)}
            className="p-3 rounded border border-gray-300 outline-none shadow-sm" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select value={gender} onChange={(e) => setGender(e.target.value)}
            className="p-3 rounded border border-gray-300 outline-none shadow-sm" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input type="date" min={minDate} value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)}
            className="p-3 rounded border border-gray-300 outline-none shadow-sm" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select value={department} onChange={(e) => {
            setDepartment(e.target.value);
            setDoctorFirstName(""); setDoctorLastName("");
          }} className="p-3 rounded border border-gray-300 outline-none shadow-sm">
            {departmentsArray.map((dep, i) => (
              <option key={i} value={dep}>{dep}</option>
            ))}
          </select>

          <select value={`${doctorFirstName} ${doctorLastName}`} onChange={(e) => {
            const [firstName, lastName] = e.target.value.split(" ");
            setDoctorFirstName(firstName); setDoctorLastName(lastName);
          }} disabled={!department}
            className="p-3 rounded border border-gray-300 outline-none shadow-sm">
            <option value="">Select Doctor</option>
            {doctors.filter(doc => doc.doctorDepartment === department).map((doc, i) => (
              <option key={i} value={`${doc.firstName} ${doc.lastName}`}>
                {doc.firstName} {doc.lastName}
              </option>
            ))}
          </select>
        </div>

        <textarea rows="4" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded shadow-sm outline-none" required />

        <div className="flex items-center gap-3">
          <label htmlFor="visited" className="text-gray-800 font-medium">Have you visited before?</label>
          <input type="checkbox" id="visited" checked={hasVisited} onChange={(e) => setHasVisited(e.target.checked)}
            className="w-5 h-5 rounded border" />
        </div>

        <button type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded shadow transition duration-300">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
