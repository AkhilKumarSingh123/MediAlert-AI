

import React from 'react';

const FeaturedServices = () => {
  return (
    <section id="featured-services" className="py-16 bg-white flex items-center ">
      <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {/* Smart Health Chatbot */}
          <div
            className="w-full max-w-xs bg-white/70 backdrop-blur border border-gray-200 hover:border-2 hover:border-blue-500 hover:shadow-lg hover:scale-105 shadow-md p-5 rounded-lg text-center hover:bg-blue-300 transition-all duration-100 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-4xl text-pink-600 mb-3">
              <i className="fas fa-robot"></i>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-800 hover:text-blue-800 transition">
              Smart Health Chatbot
            </h4>
            <p className="text-sm text-gray-700">
              24/7 AI chatbot for basic medical guidance.
              Answers health-related queries and gives self-care suggestions.
            </p>
          </div>

          {/* Appointment Scheduling System */}
          <div
            className="w-full max-w-xs bg-white/70 backdrop-blur border border-gray-200 hover:border-2 hover:border-blue-500 hover:shadow-lg hover:scale-105 shadow-md p-5 rounded-lg text-center hover:bg-blue-300 transition-all duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-4xl text-pink-600 mb-3">
              <i className="fas fa-calendar-check"></i>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-800 hover:text-blue-800 transition">
              Appointment Scheduling System
            </h4>
            <p className="text-sm text-gray-700">
              Easy and quick scheduling with reminders.
              Manage upcoming and past appointments.
            </p>
          </div>

          {/* Patient Health Record */}
          <div
            className="w-full max-w-xs bg-white/70 backdrop-blur border border-gray-200 hover:border-2 hover:border-blue-500 hover:shadow-lg hover:scale-105 shadow-md p-5 rounded-lg text-center hover:bg-blue-300 transition-all duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-4xl text-pink-600 mb-3">
              <i className="fas fa-file-medical-alt"></i>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-800 hover:text-blue-800 transition">
              Patient Health Record
            </h4>
            <p className="text-sm text-gray-700">
              Secure storage of medical history, prescriptions, and test results.
              Access anytime, anywhere.
            </p>
          </div>

          {/* Emergency Alert System */}
          <div
            className="w-full max-w-xs bg-white/70 backdrop-blur border border-gray-200 hover:border-2 hover:border-blue-500 hover:shadow-lg hover:scale-105 shadow-md p-5 rounded-lg text-center hover:bg-blue-300 transition-all duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-4xl text-pink-600 mb-3">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-800 hover:text-blue-800 transition">
              Emergency Alert System
            </h4>
            <p className="text-sm text-gray-700">
              Instantly notify nearest emergency contact or hospital.
              Critical alert generation without wearables.
            </p>
          </div>
      </div>

      </div>
    </section>
  );
};

export default FeaturedServices;





