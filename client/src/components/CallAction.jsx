


import React from 'react';

const CallToAction = () => {
  return (
    <section
      id="call-to-action"
      className="py-8 sm:py-14 text-white"
      style={{
        background: "linear-gradient(135deg, #1fa3d4, #86c7e2, #206f91, #5b879f, #a4c1ca)",
      }}
    >
      <div className="container mx-auto px-4">
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="w-full max-w-sm sm:max-w-2xl text-center">
            <h3 className="text-lg sm:text-2xl font-semibold mb-3 text-white leading-snug">
              In an emergency? Need help now?
            </h3>
            <p className="mb-3 text-xs sm:text-base leading-relaxed text-white px-1 sm:px-3">
              Stay Safe. Stay Connected. Get Help When You Need It Most!<br />
              AI-Powered Emergency Alerts. 24/7 Health Monitoring.<br />
              Quick Access to Medical Help. Smart Location Tracking. <br />
              One-Tap Emergency SOS.
            </p>
            <a
              href="/login"
              className="inline-block bg-white text-blue-800 font-semibold py-1.5 px-4 sm:px-6 text-xs sm:text-sm rounded-md hover:bg-blue-100 transition duration-300 shadow-md"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
