// import axios from "axios";
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const MessageForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleMessage = async (e) => {
//     e.preventDefault();
//     await axios
//       .post(
//         "http://localhost:3030/api/v1/message/create-message",
//         {
//           firstName,
//           lastName,
//           email,
//           phone,
//           message,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       )
//       .then((res) => {
//         toast.success(res?.data?.message);
//         setFirstName("");
//         setLastName("");
//         setEmail("");
//         setPhone("");
//         setMessage("");
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.err(err.response?.data?.message);
//       });
//   };
//   return (
//     <div className="max-w-[1540px] mx-auto py-12 mb-2 px-4 bg-yellow-100">
//       <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">
//         Send Message Form Us
//       </h2>
//       <form action="" className="space-y-6" onSubmit={handleMessage}>
//         <div className="flex flex-col md:flex-row gap-4 mb-4">
//           <input
//             type="text"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             placeholder="Frist Name"
//             className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
//           />
//         </div>
//         <div className="flex flex-col md:flex-row gap-4 mb-4">
//           <input
//             type="email"
//             placeholder=" Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
//           />
//           <input
//             type="phone"
//             placeholder="Phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
//           />
//         </div>
//         <textarea
//           placeholder="Message Lenght More than 10 Digits"
//           rows="7"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="w-full p-3 text-md border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
//         />
//         <div className="flex justify-center mb-4">
//           <button className="bg-yellow-500 text-black py-2 px-24 rounded hover:bg-blue-600">
//             Message Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MessageForm;




import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const Message = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3030/api/v1/message/create-message",
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response?.data?.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section id="contact" className="contact section bg-gray-50 py-12">
      {/* Section Title */}
      <div className="container text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-yellow-700">Contact</h2>
        <p className="text-xl text-gray-600">KNIT SULTANPUR, UTTAR PRADESH</p>
      </div>

      {/* Google Map */}
      <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: "0", width: "100%", height: "370px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14332.956037028864!2d82.06318451292609!3d26.26477316800179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399049fc057b5e9b%3A0x3ad9ff021004c84a!2sSultanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712645842905!5m2!1sen!2sin"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Address, Call Us, Email Us */}
          <div className="lg:w-1/2 space-y-8">
            <div className="info-item flex flex-col justify-center items-center text-center bg-white-100 p-6 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-3xl text-white-600 mb-3" />
              <h3 className="text-xl font-semibold text-black-700">Address</h3>
              <p className="text-lg text-gray-600">KNIT SULTANPUR, UTTAR PRADESH</p>
            </div>

            {/* Second Row with Call Us and Email Us */}
            <div className="flex space-x-4">
              <div className="info-item flex flex-col justify-center items-center text-center bg-white-100 p-6 rounded-lg shadow-md w-1/2">
                <FaPhoneAlt className="text-3xl text-white-600 mb-3" />
                <h3 className="text-xl font-semibold text-black-700">Call Us</h3>
                <p className="text-lg text-gray-600">9918231485</p>
              </div>
              <div className="info-item flex flex-col justify-center items-center text-center bg-white-100 p-6 rounded-lg shadow-md w-1/2">
                <FaEnvelope className="text-3xl text-white-600 mb-3" />
                <h3 className="text-xl font-semibold text-black-700">Email Us</h3>
                <p className="text-lg text-gray-600">Medicalalertai@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleMessage} className="php-email-form" data-aos="fade-up" data-aos-delay="500">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control w-full p-3 rounded-lg border border-gray-300 bg-slate-200"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control w-full p-3 rounded-lg border border-gray-300 bg-slate-200"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="form-control w-full p-3 rounded-lg border border-gray-300 bg-slate-200"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="phone"
                    name="phone"
                    className="form-control w-full p-3 rounded-lg border border-gray-300 bg-slate-200"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="form-control w-full p-3 rounded-lg border border-gray-300 bg-slate-200"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-400 text-black py-3 px-10 rounded-lg hover:bg-blue-600 focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;


