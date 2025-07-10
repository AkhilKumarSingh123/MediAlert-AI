
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { toast } from "react-toastify";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

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
    speed: 300, // Reduced speed for faster swiping
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Faster autoplay speed (2 seconds)
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
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-center text-4xl font-bold mb-8">All Doctors</h1>
      <Slider {...settings}>
        {doctors.map((item) => (
          <div key={item._id} className="px-3">
            <div className="bg-white shadow-md rounded-xl overflow-hidden p-4 text-center h-[350px] flex flex-col items-center justify-between">
              <img
                src={item.docImage.url}
                alt={`Doctor ${item._id}`}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">
                {item.firstName} {item.lastName}
              </h3>
              <p className="text-gray-500">{item.doctorDepartment}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Doctor;


