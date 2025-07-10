import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../assets/img/testimonials/testimonials-1.jpg"
import img2 from "../assets/img/testimonials/testimonials-2.jpg"
import img3 from "../assets/img/testimonials/testimonials-3.jpg"
import img4 from "../assets/img/testimonials/testimonials-4.jpg"
import img5 from "../assets/img/testimonials/testimonials-5.jpg"

const testimonials = [
  {
    quote: 'MedicalAlert AI: Smart, Fast, and Reliable Emergency Assistance.',
    // img: './src/assets/img/testimonials/testimonials-1.jpg',
    img : img1,
    name: 'Liam',
    role: 'CEO & Founder',
  },
  {
    quote: 'MedicalAlert AI: Always there when I needed it the most.',
    // img: './src/assets/img/testimonials/testimonials-2.jpg',
    img : img2,
    name: 'Sofia',
    role: 'Designer',
  },
  {
    quote: 'The response time was incredible. Highly recommended.',
    // img: './src/assets/img/testimonials/testimonials-3.jpg',
    img : img3,
    name: 'Aisha',
    role: 'Store Owner',
  },
  {
    quote: 'Helpful and smart. This is the future of emergency care.',
    // img: './src/assets/img/testimonials/testimonials-4.jpg',
    img : img4,
    name: 'Mateo',
    role: 'Freelancer',
  },
  {
    quote: 'I trust MedicalAlert AI with my family’s safety.',
    // img: './src/assets/img/testimonials/testimonials-5.jpg',
    img : img5,
    name: 'Hiroshi',
    role: 'Entrepreneur',
  },
];

const TestimonialSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-gray-800">Testimonials</h2>
        <h1 className="text-3xl text-blue-600 font-bold mt-2">What Patients Say About Us</h1>
      </div>

      <div className="container mx-auto px-4 mt-10" data-aos="fade-up" data-aos-delay="100">

        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (

            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center mx-2 h-full flex flex-col items-center justify-center">
                <p className="text-gray-600 italic mb-3 sm:mb-4 text-sm sm:text-base relative leading-snug">
                  <i className="bi bi-quote quote-icon-left mr-1 sm:mr-2 text-xl sm:text-2xl text-blue-500"></i>
                  <span>{item.quote}</span>
                  <i className="bi bi-quote quote-icon-right ml-1 sm:ml-2 text-xl sm:text-2xl text-blue-500"></i>
                </p>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-blue-300 mb-3 sm:mb-4"
                />
                <h3 className="text-base sm:text-xl font-semibold text-gray-800">{item.name}</h3>
                <h4 className="text-xs sm:text-sm text-gray-500">{item.role}</h4>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>

        <div className="swiper-pagination mt-6"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;

