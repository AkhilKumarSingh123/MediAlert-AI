

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { toast } from "react-toastify";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "https://medialert-ai-3.onrender.com/api/v1/user/get-all-doctor",
          { withCredentials: true }
        );
        setDoctors(data.doctor);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to fetch doctors."
        );
      }
    };
    fetchDoctors();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-3/4 mx-auto py-10 px-4 bg-gray-700">
      <h1 className="text-center text-4xl text-white font-bold mb-8">All Doctors</h1>

      {isMobile ? (
        <div className="overflow-x-auto scrollbar-hide">
          <div className="grid grid-rows-2 grid-flow-col auto-cols-max  gap-4 min-w-max">
            {doctors.map((item) => (
              <div
                key={item._id}
                className="w-[140px] h-[240px] bg-gray-600 shadow-md rounded-xl p-2 text-center flex flex-col items-center justify-start"
              >
                <img
                  src={item.docImage.url}
                  alt={`Doctor ${item._id}`}
                  className="w-[100px] h-[100px] object-cover rounded-xl mb-2"
                />
                <h3 className="text-sm font-semibold 
                text-white
                leading-tight">
                  {item.firstName} {item.lastName}
                </h3>
                <p className="text-xs text-green-400">{item.doctorDepartment}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Slider {...settings}>
          {doctors.map((item) => (
            <div key={item._id} className="px-3">
              <div className="bg-gray-600 shadow-md rounded-xl overflow-hidden p-4 text-center h-[280px] flex flex-col 
              items-center justify-start">
                <img
                  src={item.docImage.url}
                  alt={`Doctor ${item._id}`}
                  className="w-[120px] h-[120px] object-cover 
                  rounded-xl mb-3"
                />
                <h3 className="text-md font-semibold 
                text-white leading-tight">
                  {item.firstName} {item.lastName}
                </h3>
                <p className="text-sm text-green-400">{item.doctorDepartment}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Doctor;
