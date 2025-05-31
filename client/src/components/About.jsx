
// import React from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const About = () => {
//   return (
//     <section id="about" className="py-16 bg-white">
//       {/* Section Title */}
//       <div className="container mx-auto text-center mb-12 px-4" data-aos="fade-up">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
//         <p className="text-gray-600 text-lg">
//           AI-driven healthcare saves lives, enhances well-being, and ensures
//           timely medical intervention—anytime, anywhere.
//         </p>
//       </div>

//       {/* Centered Flex Container */}
//       <div className="flex justify-center">
//         <div className="w-full max-w-6xl px-4">
//           <div className="flex flex-col lg:flex-row items-start gap-10">
//             {/* Image Box */}
//             <div className="lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="100">
//               <img
//                 src="./src/assets/img/medi logo.png"
//                 alt="About Medical Alert"
//                 className="w-full h-auto object-contain rounded shadow-lg"
//               />
//             </div>

//             {/* Content Box */}
//             <div className="lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="200">
//               <h3 className="text-2xl font-semibold text-blue-700 mb-4">
//                 Stay Alert. Stay Healthy. Stay Ahead.
//               </h3>
//               <p className="italic text-gray-700 mb-4">
//                 At MedicalAlert AI, we are revolutionizing healthcare with
//                 AI-powered real-time monitoring, emergency alerts, and smart
//                 health management.
//               </p>
//               <ul className="space-y-3 mb-4 text-gray-700">
//                 <li className="flex items-start">
//                   <i className="bi bi-check2-all text-green-600 mr-2"></i>
//                   <span>Instant warning for critical health conditions.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="bi bi-check2-all text-green-600 mr-2"></i>
//                   <span>Seamless scheduling with medical specialists.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="bi bi-check2-all text-green-600 mr-2"></i>
//                   <span>
//                     Our Vision: To create a world where AI-powered healthcare
//                     enhances well-being, prevents emergencies, and ensures timely
//                     medical care for all. 🔹 Stay Alert. Stay Healthy. Stay Ahead.
//                   </span>
//                 </li>
//               </ul>
//               <p className="text-gray-700">
//                 Using AI technology, smart scheduling, and remote health
//                 monitoring, we empower individuals, caregivers, and medical
//                 professionals to stay ahead of health risks. Whether it’s
//                 emergency alerts, chronic disease tracking, pediatric care, or
//                 elderly assistance, MedicalAlert AI is your trusted digital health
//                 companion.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 text-lg">
          AI-driven healthcare saves lives, enhances well-being, and ensures
          timely medical intervention—anytime, anywhere.
        </p>
      </div>

      {/* Centered Flex Container */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* Image Box */}
            <div className="lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="100">
              <img
                src="./src/assets/img/Logo.jpg"                     
                alt="About Medical Alert"
                className="w-full h-auto object-contain rounded shadow-lg"
              />
            </div>

            {/* Content Box */}
            <div className="lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Stay Alert. Stay Healthy. Stay Ahead.
              </h3>
              <p className="italic text-gray-700 mb-4">
                At MedicalAlert AI, we are revolutionizing healthcare with
                AI-powered real-time monitoring, emergency alerts, and smart
                health management.
              </p>
              <ul className="space-y-3 mb-4 text-gray-700">
                <li className="flex items-start">
                  <i className="bi bi-heart-pulse text-green-600 mr-2"></i> {/* Updated Icon */}
                  <span>Instant warning for critical health conditions.</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-calendar-check text-green-600 mr-2"></i> {/* Updated Icon */}
                  <span>Seamless scheduling with medical specialists.</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-eye text-green-600 mr-2"></i> {/* Updated Icon */}
                  <span>
                    Our Vision: To create a world where AI-powered healthcare
                    enhances well-being, prevents emergencies, and ensures timely
                    medical care for all. 🔹 Stay Alert. Stay Healthy. Stay Ahead.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700">
                Using AI technology, smart scheduling, and remote health
                monitoring, we empower individuals, caregivers, and medical
                professionals to stay ahead of health risks. Whether it’s
                emergency alerts, chronic disease tracking, pediatric care, or
                elderly assistance, MedicalAlert AI is your trusted digital health
                companion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
