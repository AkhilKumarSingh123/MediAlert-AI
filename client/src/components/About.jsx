
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import img1 from "../assets/img/Logo.jpg";

const About = () => {
  return (
    <section id="about" className="py-8 sm:py-16 bg-gray-700">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-6 sm:mb-12 px-4" data-aos="fade-up">
        <h2 className="text-xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
          About Us
        </h2>
        <p className="text-white text-xs sm:text-lg">
          AI-driven healthcare saves lives, enhances well-being, and ensures
          timely medical intervention—anytime, anywhere.
        </p>
      </div>

      {/* Flex Container */}
      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
            {/* Left Spacer (1/6 width) */}
            <div className="hidden lg:block lg:w-1/6" />

            {/* Image (1/3 width) */}
            <div
              className="w-full lg:w-1/3 flex justify-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={img1}
                alt="About Medical Alert"
                className="w-2/3 sm:w-full h-auto object-contain rounded shadow-md"
              />
            </div>

            {/* Content (1/2 width) */}
            <div
              className="w-full lg:w-1/2 text-xs sm:text-base"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-sm sm:text-2xl font-semibold text-green-400 mb-2 sm:mb-4">
                Stay Alert. Stay Healthy. Stay Ahead.
              </h3>
              <p className="italic text-white text-xs sm:text-base mb-3 sm:mb-4">
                At MedicalAlert AI, we are revolutionizing healthcare with
                AI-powered real-time monitoring, emergency alerts, and smart
                health management.
              </p>

              <ul className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 text-white text-xs sm:text-base">
                <li className="flex items-start">
                  <i className="bi bi-heart-pulse text-green-600 mr-2 mt-1 text-base sm:text-lg"></i>
                  <span>Instant warning for critical health conditions.</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-calendar-check text-green-600 mr-2 mt-1 text-base sm:text-lg"></i>
                  <span>Seamless scheduling with medical specialists.</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-eye text-green-600 mr-2 mt-1 text-base sm:text-lg"></i>
                  <span>
                    Our Vision: AI-powered healthcare enhances well-being, prevents emergencies,
                    and ensures timely care. 🔹 Stay Alert. Stay Healthy. Stay Ahead.
                  </span>
                </li>
              </ul>

              <p className="text-white text-xs sm:text-base leading-relaxed">
                Using AI technology, smart scheduling, and remote health monitoring,
                we empower individuals, caregivers, and medical professionals to stay
                ahead of health risks. Whether it’s emergency alerts, chronic disease tracking,
                pediatric care, or elderly assistance — MedicalAlert AI is your trusted digital health companion.
              </p>
            </div>

            {/* Right Spacer (1/6 width) */}
            <div className="hidden lg:block lg:w-1/6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

