// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { Context } from "../main";
// import { Navigate } from "react-router-dom";
// import { MdDelete } from "react-icons/md";

// const Messages = () => {
//   const [messages, setMessages] = useState([]);
//   const { isAuthenticated } = useContext(Context);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const { data } = await axios.get(
//           "https://medialert-ai-3.onrender.com/api/v1/message/get-all-message",
//           { withCredentials: true }
//         );
//         setMessages(data.message);
//       } catch (error) {
//         console.log(error.response.data.message);
//       }
//     };
//     fetchMessages();
//   }, []);

//   const handleDelete = async (messageId) => {
//     try {
//       const { data } = await axios.delete(
//         `https://medialert-ai-3.onrender.com/api/v1/message/message-delete/${messageId}`,
//         { withCredentials: true }
//       );
//       setMessages((prevMessages) =>
//         prevMessages.filter((message) => message._id !== messageId)
//       );
//       toast.success(data?.message);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   if (!isAuthenticated) {
//     return <Navigate to={"/login"} />;
//   }

//   return (
//     <section className="page mx-20 bg-gray-200 p-10 h-screen rounded-l-3xl">
//       <h1 className="text-2xl font-bold text-center text-indigo-600 mb-8">
//         MESSAGE
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="py-2 px-4">#</th>
//               <th className="py-2 px-4">First Name</th>
//               <th className="py-2 px-4">Last Name</th>
//               <th className="py-2 px-4">Email</th>
//               <th className="py-2 px-4">Phone</th>
//               <th className="py-2 px-4">Message</th>
//               <th className="py-2 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {messages && messages.length > 0 ? (
//               messages.map((element, index) => (
//                 <tr key={element._id} className="hover:bg-gray-300">
//                   <td className="py-2 px-4 text-center">{index + 1}</td>
//                   <td className="py-2 px-4 text-center">{element.firstName}</td>
//                   <td className="py-2 px-4 text-center">{element.lastName}</td>
//                   <td className="py-2 px-4 text-center">{element.email}</td>
//                   <td className="py-2 px-4 text-center">{element.phone}</td>
//                   <td className="py-2 px-4 text-center">
//                     {element.message.slice(0, 20) +
//                       (element.message.length > 20 ? "..." : "")}
//                   </td>
//                   <td className="py-2 px-4 text-center">
//                     <MdDelete
//                       size={25}
//                       onClick={() => handleDelete(element._id)}
//                       className="cursor-pointer text-red-500 mx-auto"
//                     />
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className="py-4 px-4 text-center">
//                   No Messages!
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default Messages;






import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 10;

  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "https://medialert-ai-3.onrender.com/api/v1/message/get-all-message",
          { withCredentials: true }
        );
        setMessages(data.message);
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    };
    fetchMessages();
  }, []);

  const handleDelete = async (messageId) => {
    try {
      const { data } = await axios.delete(
        `https://medialert-ai-3.onrender.com/api/v1/message/message-delete/${messageId}`,
        { withCredentials: true }
      );
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg._id !== messageId)
      );
      toast.success(data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Delete failed");
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  // Pagination logic
  const indexOfLast = currentPage * messagesPerPage;
  const indexOfFirst = indexOfLast - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(messages.length / messagesPerPage);

  return (
    <section className="p-4 sm:p-6 md:p-10 bg-gray-100 min-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        MESSAGES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {currentMessages.length > 0 ? (
          currentMessages.map((msg, index) => (
            <div
              key={msg._id}
              className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200"
            >
              {/* Delete Icon */}
              <MdDelete
                size={22}
                onClick={() => handleDelete(msg._id)}
                title="Delete Message"
                className="absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold text-indigo-600 mb-1">
                {msg.firstName} {msg.lastName}
              </h3>

              {/* Email & Phone */}
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Email:</span> {msg.email}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold">Phone:</span> {msg.phone}
              </p>

              {/* Message */}
              <div className="bg-gray-50 rounded-md p-3 border border-gray-100 text-gray-700 text-sm leading-relaxed max-h-40 overflow-y-auto">
                <span className="font-medium text-gray-800 block mb-1">Message:</span>
                {msg.message.length > 150
                  ? `${msg.message.slice(0, 150)}...`
                  : msg.message}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No messages found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === idx + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Messages;








