// import myPhoto1 from "../assets/img/features.jpg";

// import React from "react";
// import {
//   FaHandHoldingMedical,
//   FaBriefcaseMedical,
//   FaUserMd,
//   FaMapMarkedAlt,
// } from "react-icons/fa";

// const FeaturesSection = () => {
//   return (
//     <section id="features" className="py-3 bg-gray-50">
//       <div className="max-w-8xl mx-auto px-2">
//         <div className="flex flex-col lg:flex-row lg:justify-around gap-10">
//           {/* Feature Image */}
//           <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
//             <img
//               // src="./src/assets/img/features.jpg"
//               src = {myPhoto1}
//               alt="Features"
//               className="w-full rounded-lg shadow-md"
//             />
//           </div>

//           {/* Feature Content */}
//           <div
//             className="lg:w-2/5 flex flex-col justify-center space-y-6"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <h3 className="text-3xl font-bold text-gray-800">
//               Transforming Smart Healthcare Through AI
//             </h3>
//             <p className="text-gray-600">
//               MediAlert AI offers real-time diagnostics, emergency alerts, and AI-powered consultations
//               to improve patient care and save lives—anytime, anywhere.
//             </p>

//             {/* Service 1 */}
//             <div
//               className="flex items-start gap-4"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <FaHandHoldingMedical className="text-blue-600 text-2xl flex-shrink-0" />
//               <div>
//                 <h4 className="text-xl font-semibold text-gray-800">
//                   AI-Powered Symptom Checker
//                 </h4>
//                 <p className="text-gray-600">
//                   Enter your symptoms and receive instant predictions powered by AI and machine learning to help identify possible conditions.
//                 </p>
//               </div>
//             </div>

//             {/* Service 2 */}
//             <div
//               className="flex items-start gap-4"
//               data-aos="fade-up"
//               data-aos-delay="400"
//             >
//               <FaBriefcaseMedical className="text-green-600 text-2xl flex-shrink-0" />
//               <div>
//                 <h4 className="text-xl font-semibold text-gray-800">
//                   Emergency Alert System
//                 </h4>
//                 <p className="text-gray-600">
//                   Detects critical health emergencies and sends real-time alerts to emergency contacts or nearby hospitals without wearables.
//                 </p>
//               </div>
//             </div>

//             {/* Service 3 */}
//             <div
//               className="flex items-start gap-4"
//               data-aos="fade-up"
//               data-aos-delay="500"
//             >
//               <FaUserMd className="text-purple-600 text-2xl flex-shrink-0" />
//               <div>
//                 <h4 className="text-xl font-semibold text-gray-800">
//                   Doctor Consultation & Management
//                 </h4>
//                 <p className="text-gray-600">
//                   Schedule appointments, consult with doctors virtually, and manage patient records through a centralized dashboard.
//                 </p>
//               </div>
//             </div>

//             {/* Service 4 */}
//             <div
//               className="flex items-start gap-4"
//               data-aos="fade-up"
//               data-aos-delay="600"
//             >
//               <FaMapMarkedAlt className="text-red-600 text-2xl flex-shrink-0" />
//               <div>
//                 <h4 className="text-xl font-semibold text-gray-800">
//                   Nearby Medical Store Finder
//                 </h4>
//                 <p className="text-gray-600">
//                   Find the nearest medical store or pharmacy using real-time geolocation integrated with Google Maps.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;









import React from "react";
import {
  FaHandHoldingMedical,
  FaBriefcaseMedical,
  FaUserMd,
  FaMapMarkedAlt,
} from "react-icons/fa";

import myPhoto1 from "../assets/img/features.jpg";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-4 sm:py-10 bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 sm:gap-10">
          {/* Feature Image */}
          <div
            className="lg:w-1/2 w-full"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={myPhoto1}
              alt="Features"
              className="w-full h-[180px] sm:h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Feature Content */}
          <div
            className="lg:w-1/2 w-full min-h-[45vh] sm:min-h-fit flex flex-col justify-center space-y-3 sm:space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-lg sm:text-3xl font-bold text-white leading-snug">
              Transforming Smart Healthcare Through AI
            </h3>
            <p className="text-xs sm:text-base text-white leading-relaxed">
              MediAlert AI offers real-time diagnostics, emergency alerts, and AI-powered consultations
              to improve patient care and save lives—anytime, anywhere.
            </p>

            {/* Features */}
            {[
              {
                icon: <FaHandHoldingMedical className="text-blue-600 text-lg sm:text-2xl flex-shrink-0" />,
                title: "AI-Powered Symptom Checker",
                desc: "Enter your symptoms and receive AI-powered predictions instantly.",
              },
              {
                icon: <FaBriefcaseMedical className="text-green-400 text-lg sm:text-2xl flex-shrink-0" />,
                title: "Emergency Alert System",
                desc: "Detects emergencies and alerts hospitals—no wearables required.",
              },
              {
                icon: <FaUserMd className="text-purple-600 text-lg sm:text-2xl flex-shrink-0" />,
                title: "Doctor Consultation & Management",
                desc: "Book virtual appointments and manage health records easily.",
              },
              {
                icon: <FaMapMarkedAlt className="text-red-600 text-lg sm:text-2xl flex-shrink-0" />,
                title: "Nearby Medical Store Finder",
                desc: "Find nearest medical shops using live geolocation and maps.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                {item.icon}
                <div>
                  <h4 className="text-sm sm:text-lg font-semibold text-green-400">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
