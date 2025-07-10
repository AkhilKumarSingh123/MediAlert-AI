

import React from "react";
import myPhoto1 from "../assets/img/hero-carousel/hero-carousel-1.jpg";
import myPhoto2 from "../assets/img/hero-carousel/hero-carousel-2.jpg";
import myPhoto3 from "../assets/img/hero-carousel/hero-carousel-3.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[50vh] sm:h-[66vh] overflow-hidden"
    >
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade h-full"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner h-full">
          {[myPhoto1, myPhoto2, myPhoto3].map((photo, idx) => (
            <div
              key={idx}
              className={`carousel-item h-full relative ${
                idx === 0 ? "active" : ""
              }`}
            >
              <img
                src={photo}
                className="w-full h-full object-cover"
                alt={`Slide ${idx + 1}`}
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center w-full px-2 sm:px-0">
                <div className="bg-white/30 backdrop-blur-md text-black p-3 sm:p-6 rounded-lg shadow-lg mx-auto border border-white/40 w-full max-w-[95%] sm:max-w-xl">
                  <h2 className="text-base sm:text-4xl font-bold mb-1 sm:mb-4 leading-tight">
                    {idx === 0 && "Welcome to Medical Alert AI"}
                    {idx === 1 && "AI-Powered Health Monitoring"}
                    {idx === 2 && "Smart Medical Assistance"}
                  </h2>
                  <p className="text-xs sm:text-lg mb-2 sm:mb-6 leading-snug">
                    {idx === 0 &&
                      "Your Smart Health Companion. Stay Safe, Stay Alert!"}
                    {idx === 1 &&
                      "Stay ahead of health risks with intelligent health monitoring."}
                    {idx === 2 &&
                      "Real-time AI medical support at your service!"}
                  </p>
                  <a
                    href="#about"
                    className="py-1 px-3 sm:py-2 sm:px-6 text-xs sm:text-sm text-black rounded bg-blue-100 hover:bg-blue-300 transition"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded-full p-2"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark rounded-full p-2"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;


