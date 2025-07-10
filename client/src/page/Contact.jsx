
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://medialert-ai-3.onrender.com/api/v1/message/create-message",
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
    <section id="contact" className="contact section bg-gray-50 py-8 sm:py-12">
      {/* Section Title */}
      <div className="container text-center mb-6 sm:mb-10" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-700">Contact</h2>
        <p className="text-base sm:text-xl text-gray-600">Gorakhpur, UTTAR PRADESH</p>
      </div>

      {/* Google Map */}
      <div className="mb-6 sm:mb-10" data-aos="fade-up" data-aos-delay="200">
        <iframe
          className="w-full h-[200px] sm:h-[300px] md:h-[370px] border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14340.686385624146!2d83.3606104!3d26.7605544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39914fc353f5b7e3%3A0x2e3d25c134cc847e!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1720602050123!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Info and Form */}
      <div className="container px-4 sm:px-6" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          {/* Info Section */}
          <div className="lg:w-1/2 space-y-3 sm:space-y-6">
            <div className="flex flex-col items-center text-center bg-white p-3 sm:p-6 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-xl sm:text-3xl text-blue-600 mb-1 sm:mb-2" />
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-xs sm:text-base text-gray-600">Gorakhpur, UTTAR PRADESH</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex flex-col items-center text-center bg-white p-3 sm:p-6 rounded-lg shadow-md w-full sm:w-1/2">
                <FaPhoneAlt className="text-xl sm:text-3xl text-green-600 mb-1 sm:mb-2" />
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Call Us</h3>
                <p className="text-xs sm:text-base text-gray-600">9219739903</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-3 sm:p-6 rounded-lg shadow-md w-full sm:w-1/2">
                <FaEnvelope className="text-xl sm:text-3xl text-red-600 mb-1 sm:mb-2" />
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Email Us</h3>
                <p className="text-xs sm:text-base text-gray-600">Medicalalertai@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleMessage} className="space-y-3 sm:space-y-4" data-aos="fade-up" data-aos-delay="500">
              <input
                type="text"
                name="firstName"
                className="form-control w-full p-2 sm:p-3 rounded-lg border border-gray-300 bg-slate-200 text-sm"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                name="lastName"
                className="form-control w-full p-2 sm:p-3 rounded-lg border border-gray-300 bg-slate-200 text-sm"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                className="form-control w-full p-2 sm:p-3 rounded-lg border border-gray-300 bg-slate-200 text-sm"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="phone"
                name="phone"
                className="form-control w-full p-2 sm:p-3 rounded-lg border border-gray-300 bg-slate-200 text-sm"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <textarea
                className="form-control w-full p-2 sm:p-3 rounded-lg border border-gray-300 bg-slate-200 text-sm"
                name="message"
                rows="4"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-10 rounded-lg hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

