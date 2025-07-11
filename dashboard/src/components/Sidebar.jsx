// import React, { useContext, useState } from "react";
// import { Context } from "../main";
// import { useNavigate } from "react-router-dom";
// import { TiHome } from "react-icons/ti";
// import { FaUserDoctor } from "react-icons/fa6";
// import { MdAddModerator } from "react-icons/md";
// import { IoPersonAddSharp } from "react-icons/io5";
// import { AiFillMessage } from "react-icons/ai";
// import { FaUserFriends } from "react-icons/fa";
// import { RiLogoutBoxFill } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
// import axios from "axios";
// import { toast } from "react-toastify";
// const Sidebar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthenticated, setIsAuthenticated } = useContext(Context);

//   const navigate = useNavigate();

//   // show all function

//   const gotoHome = () => {
//     navigate("/");
//     setShow(false);
//   };
//   // show all doctor page
//   const gotoDoctors = () => {
//     navigate("/all-doctors");
//     setShow(false);
//   };

//   // show all patinets page
//   const gotoPatients = () => {
//     navigate("/all-patients");
//     setShow(false);
//   };

//   // show all messages page
//   const gotoMessages = () => {
//     navigate("/all-messages");
//     setShow(false);
//   };

//   // show all add new doctor page
//   const gotoAddDoctor = () => {
//     navigate("/add-new/doctor");
//     setShow(false);
//   };

//   // show add  new admin page
//   const gotoAddAdmin = () => {
//     navigate("/add-new/admin");
//     setShow(false);
//   };

//   const handleLogOut = async () => {
//     try {
//       const { data } = await axios.get(
//         "https://medialert-ai-3.onrender.com/api/v1/user/logout-admin",
//         { withCredentials: true }
//       );
//       toast.success(data.message);
//       setIsAuthenticated(false);
//     } catch (error) {
//       toast.error(error.message.data.message);
//     }
//   };
//   return (
//     <>
//       <div
//         className={`fixed top-1/2 left-[10px] rounded-t-[5px] rounded-b-[7px] h-[370px] w-[60px] lg:w-[80px] 
//     bg-gray-900 p-4 transition-all duration-300 ease-in-out transform ${
//       show ? "translate-x-0" : "-translate-x-full "
//     } lg:translate-x-0 -translate-y-1/2 flex flex-col items-center justify-center z-50`}
//         style={!isAuthenticated ? { display: "none" } : {}}
//       >
//         <div className="flex flex-col items-center space-y-6 text-white">
//           <TiHome
//             className="text-3xl lg:text-4xl cursor-pointer text-blue-400 hover:bg-blue-600"
//             onClick={gotoHome}
//           />
//           <FaUserDoctor
//             className="text-3xl lg:text-4xl cursor-pointer text-green-400 hover:bg-green-600"
//             onClick={gotoDoctors}
//           />
//           <MdAddModerator
//             className="text-3xl lg:text-4xl cursor-pointer text-yellow-400 hover:bg-yellow-600"
//             onClick={gotoAddAdmin}
//           />
//           <IoPersonAddSharp
//             className="text-3xl lg:text-4xl cursor-pointer text-purple-400 hover:bg-purple-600"
//             onClick={gotoAddDoctor}
//           />
//           <AiFillMessage
//             className="text-3xl lg:text-4xl cursor-pointer text-pink-400 hover:bg-pink-600"
//             onClick={gotoMessages}
//           />
//           <FaUserFriends
//             className="text-3xl lg:text-4xl cursor-pointer text-blue-400 hover:bg-blue-600"
//             onClick={gotoPatients}
//           />
//           <RiLogoutBoxFill
//             className="text-3xl lg:text-4xl cursor-pointer text-red-400 hover:bg-red-600"
//             onClick={handleLogOut}
//           />
//         </div>
//       </div>
//       <div
//         className="fixed top-0 left-0 p-4 z-50"
//         style={!isAuthenticated ? { display: "none" } : {}}
//       >
//         {/* <GiHamburgerMenu
//           className="cursor-pointer text-gray-900 text-3xl lg:text-4xl"
//           onClick={() => setShow(!show)}
//         /> */}
//       </div>
//     </>
//   );
// };

// export default Sidebar;








import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaUserMd, FaUserFriends } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { RiLogoutBoxFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setShow(false);
  };

  const handleLogOut = async () => {
    try {
      const { data } = await axios.get(
        "https://medialert-ai-3.onrender.com/api/v1/user/logout-admin",
        { withCredentials: true }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  };

  if (!isAuthenticated) return null;

  return (
    <>
      {/* Hamburger Button - Only Mobile */}
      <div className="lg:hidden fixed top-3 left-3 z-50">
        <GiHamburgerMenu
          onClick={() => setShow(!show)}
          className="text-3xl text-gray-900 bg-white shadow-md rounded-md mb-5 p-1 cursor-pointer"
        />
      </div>

      {/* Full Sidebar for Mobile */}
      <div
        className={`lg:hidden mt-10 fixed top-0 left-0 h-full w-56 bg-gray-900 p-4 z-40 transform transition-transform duration-300 ease-in-out ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent handleNavigation={handleNavigation} handleLogOut={handleLogOut} isVertical />
      </div>

      {/* Vertical Sidebar for Desktop */}
      <div
        className="hidden lg:flex fixed top-1/2 left-3 -translate-y-1/2 w-[60px] h-[370px] bg-gray-900 p-3 rounded-lg z-50 flex-col items-center justify-center space-y-6"
      >
        <SidebarContent handleNavigation={handleNavigation} handleLogOut={handleLogOut} isVertical={false} />
      </div>

      {/* Overlay for Mobile */}
      {show && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-40 z-30"
          onClick={() => setShow(false)}
        ></div>
      )}
    </>
  );
};

// Icon Set Component
const SidebarContent = ({ handleNavigation, handleLogOut, isVertical }) => {
  const iconSize = "text-3xl lg:text-4xl";
  const wrapperClass = isVertical
    ? "flex flex-col space-y-6 text-white"
    : "flex flex-col items-center space-y-6 text-white";

  return (
    <div className={wrapperClass}>
      <TiHome className={`${iconSize} cursor-pointer text-blue-400 hover:bg-blue-600`} onClick={() => handleNavigation("/")} title="Home" />
      <FaUserMd className={`${iconSize} cursor-pointer text-green-400 hover:bg-green-600`} onClick={() => handleNavigation("/all-doctors")} title="Doctors" />
      <MdAddModerator className={`${iconSize} cursor-pointer text-yellow-400 hover:bg-yellow-600`} onClick={() => handleNavigation("/add-new/admin")} title="Add Admin" />
      <IoPersonAddSharp className={`${iconSize} cursor-pointer text-purple-400 hover:bg-purple-600`} onClick={() => handleNavigation("/add-new/doctor")} title="Add Doctor" />
      <AiFillMessage className={`${iconSize} cursor-pointer text-pink-400 hover:bg-pink-600`} onClick={() => handleNavigation("/all-messages")} title="Messages" />
      <FaUserFriends className={`${iconSize} cursor-pointer text-blue-400 hover:bg-blue-600`} onClick={() => handleNavigation("/all-patients")} title="Patients" />
      <RiLogoutBoxFill className={`${iconSize} cursor-pointer text-red-400 hover:bg-red-600`} onClick={handleLogOut} title="Logout" />
    </div>
  );
};

export default Sidebar;
