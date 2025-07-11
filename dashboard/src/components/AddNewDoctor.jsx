// import React, { useContext, useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Context } from "../main";
// import axios from "axios";

// const AddNewDoctor = () => {
//   const { isAuthenticated, setIsAuthenticated } = useContext(Context);

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [nic, setNic] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   const [password, setPassword] = useState("");
//   const [doctorDepartment, setDoctorDepartment] = useState("");
//   const [docImage, setDocImage] = useState(null);
//   const [docAvatarPreview, setDocAvatarPreview] = useState("");

//   const navigateTo = useNavigate();

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
//     "Gastroenterology",
//     "Psychiatry",
//     "Urology",
//     "Ophthalmology",
//   ];

//   const handleAvatar = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setDocAvatarPreview(reader.result);
//         setDocImage(file);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAddNewDoctor = async (e) => {
//     e.preventDefault();
//     if (!docImage) {
//       toast.error("Doctor image is required!");
//       return;
//     }
//     try {
//       const formData = new FormData();
//       formData.append("firstName", firstName);
//       formData.append("lastName", lastName);
//       formData.append("email", email);
//       formData.append("phone", phone);
//       formData.append("password", password);
//       formData.append("nic", nic);
//       formData.append("dob", dob);
//       formData.append("gender", gender);
//       formData.append("doctorDepartment", doctorDepartment);
//       formData.append("docImage", docImage);

//       const { data } = await axios.post(
//         "https://medialert-ai-3.onrender.com/api/v1/user/create-new-doctor",
//         formData,
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       toast.success(data.message);
//       navigateTo("/");
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setPhone("");
//       setNic("");
//       setDob("");
//       setGender("");
//       setPassword("");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Doctor registration failed"
//       );
//     }
//   };

//   if (!isAuthenticated) {
//     return <Navigate to={"/login"} />;
//   }
//   return (
//     <section className="flex justify-center items-center py-20 bg-gray-200">
//       <section
//         className="max-w-[1240px] mx-auto bg-gray-100  justify-center 
//       items-center p-8 md:p-10 lg:p-12 xl:p-14 h-auto rounded-[50px] shadow-xl"
//       >
//         <section
//           className="container add-doctor-form flex flex-col items-center 
//         gap-6 p-0 "
//         >
//           <h1
//             className="form-title text-2xl md:text-3xl lg:text-4xl text-black 
//           mb-7 font-bold"
//           >
//             REGISTER A NEW DOCTOR
//           </h1>
//           <form onSubmit={handleAddNewDoctor} className="w-[1200px]">
//             <div className="">
//               <div
//                 className="w-[900px] mx-auto my-4 h-[500px] flex
//                 rounded-[15px] justify-center gap-5"
//               >
//                 <img
//                   src={
//                     docAvatarPreview
//                       ? `${docAvatarPreview}`
//                       : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QhjRJKfxNsyqz7vTVU5hmOJfiAjeeEfrlg&s"
//                   }
//                   alt="Doctor"
//                   className="w-[600px] h-auto max-h-[500px]  rounded-lg  transition-all duration-300 ease-in-out"
//                 />
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleAvatar}
//                   className="w-full  border object-contain text-center justify-center items-center  rounded-lg"
//                 />
//               </div>
//               <div className="grid grid-cols-1  md:grid-cols-2 gap-5 md:gap-7">
//                 {/* Input fields */}
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Mobile Number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="NIC"
//                   value={nic}
//                   onChange={(e) => setNic(e.target.value)}
//                   className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                   required
//                 />
//                 <input
//                   type="date"
//                   value={dob}
//                   onChange={(e) => setDob(e.target.value)}
//                   className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                   required
//                 />
//                 <select
//                   value={gender}
//                   onChange={(e) => setGender(e.target.value)}
//                   className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                   required
//                 />
//                 <select
//                   value={doctorDepartment}
//                   onChange={(e) => setDoctorDepartment(e.target.value)}
//                   className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   {departmentsArray.map((depart, index) => (
//                     <option value={depart} key={index}>
//                       {depart}
//                     </option>
//                   ))}
//                 </select>
//                 <button
//                   type="submit"
//                   className="text-lg md:text-xl p-3 rounded-lg 
//                   border border-gray-300 shadow-md bg-gradient-to-r
//                    from-purple-400 to-indigo-700 text-white font-bold
//                     transition-all duration-300 ease-in-out hover:from-purple-500
//                      hover:to-indigo-800"
//                 >
//                   Register New Doctor
//                 </button>
//               </div>
//             </div>
//           </form>
//         </section>
//       </section>
//     </section>
//   );
// };

// export default AddNewDoctor;







import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docImage, setDocImage] = useState(null);
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const departmentsArray = [
    "Pediatrics", "Orthopedics", "Cardiology", "Neurology", "Oncology",
    "Radiology", "Physical Therapy", "Dermatology", "ENT", "Gastroenterology",
    "Psychiatry", "Urology", "Ophthalmology",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDocAvatarPreview(reader.result);
        setDocImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    if (!docImage) {
      toast.error("Doctor image is required!");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docImage", docImage);

      const { data } = await axios.post(
        "https://medialert-ai-3.onrender.com/api/v1/user/create-new-doctor",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(data.message);
      navigateTo("/");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setPassword("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Doctor registration failed"
      );
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="flex justify-center items-center py-10 px-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-indigo-700 mb-8">
          Register a New Doctor
        </h1>

        <form onSubmit={handleAddNewDoctor} className="space-y-6">
          {/* Image Preview & Upload */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-full lg:w-1/2">
              <img
                src={
                  docAvatarPreview
                    ? docAvatarPreview
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QhjRJKfxNsyqz7vTVU5hmOJfiAjeeEfrlg&s"
                }
                alt="Doctor Preview"
                className="w-full h-auto max-h-80 rounded-xl object-cover shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Doctor Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatar}
                className="w-full border p-3 rounded-md shadow-sm bg-gray-50"
              />
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input-style"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input-style"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-style"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-style"
              required
            />
            <input
              type="text"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="input-style"
              required
            />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="input-style"
              required
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="input-style"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-style"
              required
            />
            <select
              value={doctorDepartment}
              onChange={(e) => setDoctorDepartment(e.target.value)}
              className="input-style"
              required
            >
              <option value="">Select Department</option>
              {departmentsArray.map((dept, index) => (
                <option value={dept} key={index}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-700 transition duration-300"
            >
              Register Doctor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewDoctor;
