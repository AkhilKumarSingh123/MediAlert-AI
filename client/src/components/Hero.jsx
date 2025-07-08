

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-[66vh] overflow-hidden">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade h-full"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-full">
          {/* Item 1 */}
          <div className="carousel-item active h-full relative">
            <img
              src="./src/assets/img/hero-carousel/hero-carousel-1.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 text-center">
              <div className="bg-white/20 backdrop-blur-md text-black p-8 rounded-lg shadow-lg mx-4 border border-white/40 max-w-xl">
                <h2 className="text-4xl font-bold mb-4">
                  Welcome to Medical Alert AI
                </h2>
                <p className="text-xl mb-6">
                  Your Smart Health Companion. Stay Safe, Stay Alert!
                </p>
                <a
                  href="#about"
                  className="py-2 px-6 text-sm text-black rounded bg-blue-100 hover:bg-blue-300 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="carousel-item h-full relative">
            <img
              src="./src/assets/img/hero-carousel/hero-carousel-2.jpg"
              className="w-full h-full object-cover"
              alt="Slide 2"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 text-center">
              <div className="bg-white/20 backdrop-blur-md text-black p-8 rounded-lg shadow-lg mx-4 border border-white/40 max-w-xl">
                <h2 className="text-4xl font-bold mb-4">
                  AI-Powered Health Monitoring
                </h2>
                <p className="text-xl mb-6">
                  Stay ahead of health risks with intelligent health monitoring.
                </p>
                <a
                  href="#about"
                  className="py-2 px-6 text-sm text-black rounded bg-blue-100 hover:bg-blue-300 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="carousel-item h-full relative">
            <img
              src="./src/assets/img/hero-carousel/hero-carousel-3.jpg"
              className="w-full h-full object-cover"
              alt="Slide 3"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 text-center">
              <div className="bg-white/20 backdrop-blur-md text-black p-8 rounded-lg shadow-lg mx-4 border border-white/40 max-w-xl">
                <h2 className="text-4xl font-bold mb-4">
                  Smart Medical Assistance
                </h2>
                <p className="text-xl mb-6">
                  Real-time AI medical support at your service!
                </p>
                <a
                  href="#about"
                  className="py-2 px-6 text-sm text-black rounded bg-blue-100 hover:bg-blue-300 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
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

        {/* Carousel Indicators */}
        {/* <div className="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
