// import React, { useContext, useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Context } from "../main";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { isAuthenticated, setIsAuthenticated } = useContext(Context);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://medialert-ai-3.onrender.com/api/v1/user/login-user",
//         { email, password, role: "Admin" },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       console.log(response.data);
//       toast.success(response.data.message);
//       setIsAuthenticated(true);
//       navigate("/"); // Redirect to dashboard after login
//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   if (isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-300">
//       <section className="flex justify-center items-center py-24 w-[500px] rounded-md">
//         <div className="px-4 bg-white p-2 py-6 w-full lg:max-w-[650px] md:max-w-[500px] max-w-[300px] mx-auto flex flex-col rounded-lg shadow-lg">
//           <div className="flex flex-col justify-center items-center">
//             <h2 className="text-center py-8 text-xl md:text-2xl font-bold text-yellow-500">
//               Login
//             </h2>
//             <form onSubmit={handleLogin} className="flex flex-col gap-6 w-full">
//               <input
//                 type="text"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
//                 required
//               />
//               <div className="flex justify-center items-center">
//                 <button
//                   type="submit"
//                   className="px-5 w-full py-1 rounded-lg cursor-pointer bg-yellow-200 text-lg text-black text-center border-2 border-black hover:border-3"
//                 >
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;




import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://medialert-ai-3.onrender.com/api/v1/user/login-user",
        { email, password, role: "Admin" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-300 via-yellow-200 to-yellow-100 px-4">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md p-8 sm:p-10 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700 font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-gray-700 font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;



