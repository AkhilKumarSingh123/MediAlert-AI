

// import React, { useState } from "react";
// import "react-multi-carousel/lib/styles.css";

    
// import img1 from "../assets/img/departments-1.jpg"
// import img2 from "../assets/img/departments-2.jpg"
// import img3 from "../assets/img/departments-3.jpg"
// import img4 from "../assets/img/departments-4.jpg"
// import img5 from "../assets/img/departments-5.jpg"


// const departments = [
//   {
//     id: 'cardiology',
//     title: 'Cardiology',
//     // image: './src/assets/img/departments-1.jpg',
//     image : img1,
//     italic: '**_Cardiology focuses on early detection, smart monitoring, and emergency response for better heart health outcomes._**',
//     desc: 'This department specializes in diagnosing and treating heart and blood vessel conditions including heart attacks, hypertension, arrhythmias, and coronary artery disease. AI-driven alerts help detect early warning signs for timely interventions.',
//   },
//   {
//     id: 'neurology',
//     title: 'Neurology',
//     // image: './src/assets/img/departments-2.jpg',
//      image : img2,
//     italic: '**_Modern neurology integrates AI for predictive analysis and critical neurological event detection._**',
//     desc: 'Handles brain, spinal cord, and nervous system disorders such as strokes, seizures, Alzheimer’s, Parkinson’s, and multiple sclerosis. Our platform supports AI-based symptom tracking, memory analysis, and urgent neuro alerts.',
//   },
//   {
//     id: 'hepatology',
//     title: 'Hepatology',
//     // image: './src/assets/img/departments-3.jpg',
//      image : img3,
//     italic: '**_Smart monitoring and early alerts for maintaining optimal liver and digestive health._**',
//     desc: 'Focuses on liver, pancreas, gallbladder, and bile duct issues such as hepatitis, fatty liver, cirrhosis, and jaundice. AI assists in tracking liver health metrics, managing chronic conditions, and triggering alerts during acute episodes.',
//   },
//   {
//     id: 'pediatrics',
//     title: 'Pediatrics',
//     // image: './src/assets/img/departments-4.jpg',
//      image : img4,
//     italic: '**_AI-enhanced pediatric care with real-time health insights and emergency notifications for children._**',
//     desc: 'Caters to infants, children, and adolescents, handling everything from vaccinations to growth monitoring and infectious disease management. The platform ensures child safety through smart vitals analysis and instant emergency alerts.',
//   },
//   {
//     id: 'ophthalmology',
//     title: 'Ophthalmologists',
//     // image: './src/assets/img/departments-5.jpg',
//      image : img5,
//     italic: '**_Real-time eye condition monitoring and vision preservation using AI-based tools._**',
//     desc: 'Focuses on the diagnosis and treatment of eye-related disorders such as glaucoma, cataracts, retinal diseases, and vision impairment. Integrated tools assist in early detection, AI eye assessments, and remote follow-ups.',
//   },
// ];

// const Department = () => {
//   const [activeTab, setActiveTab] = useState('cardiology');

//   return (
//     <section id="departments" className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-8 text-center mb-12" data-aos="fade-up">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Departments</h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           A hospital or medical alert system typically supports various departments, each specializing in a specific area.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row gap-8" data-aos="fade-up" data-aos-delay="100">
//         {/* Department List */}
//         <ul className="flex flex-wrap gap-4 md:flex-col md:w-1/4 w-full">
//           {departments.map((dept) => (
//             <li key={dept.id} className="w-full">
//               <button
//                 onClick={() => setActiveTab(dept.id)}
//                 className={`w-full text-left px-4 py-2 rounded-lg font-medium ${
//                   activeTab === dept.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 shadow'
//                 }`}
//               >
//                 {dept.title}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Department Content */}
//         <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow">
//           {departments
//             .filter((dept) => dept.id === activeTab)
//             .map((dept) => (
//               <div key={dept.id} className="flex flex-col md:flex-row gap-6">
//                 <div className="w-full md:w-2/3">
//                   <h3 className="text-2xl font-semibold mb-2">{dept.title}</h3>
//                   <p className="italic text-gray-500 mb-2">{dept.italic}</p>
//                   <p className="text-gray-700">{dept.desc}</p>
//                 </div>
//                 <div className="w-full md:w-1/3 flex items-center justify-center">
//                   <img src={dept.image} alt={dept.title} className="rounded-lg w-full h-auto object-cover" />
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Department;








import React, { useState } from "react";
import img1 from "../assets/img/departments-1.jpg";
import img2 from "../assets/img/departments-2.jpg";
import img3 from "../assets/img/departments-3.jpg";
import img4 from "../assets/img/departments-4.jpg";
import img5 from "../assets/img/departments-5.jpg";

const departments = [
  {
    id: "cardiology",
    title: "Cardiology",
    image: img1,
    italic:
      "**_Cardiology focuses on early detection, smart monitoring, and emergency response for better heart health outcomes._**",
    desc: "This department specializes in diagnosing and treating heart and blood vessel conditions including heart attacks, hypertension, arrhythmias, and coronary artery disease. AI-driven alerts help detect early warning signs for timely interventions.",
  },
  {
    id: "neurology",
    title: "Neurology",
    image: img2,
    italic:
      "**_Modern neurology integrates AI for predictive analysis and critical neurological event detection._**",
    desc: "Handles brain, spinal cord, and nervous system disorders such as strokes, seizures, Alzheimer’s, Parkinson’s, and multiple sclerosis. Our platform supports AI-based symptom tracking, memory analysis, and urgent neuro alerts.",
  },
  {
    id: "hepatology",
    title: "Hepatology",
    image: img3,
    italic:
      "**_Smart monitoring and early alerts for maintaining optimal liver and digestive health._**",
    desc: "Focuses on liver, pancreas, gallbladder, and bile duct issues such as hepatitis, fatty liver, cirrhosis, and jaundice. AI assists in tracking liver health metrics, managing chronic conditions, and triggering alerts during acute episodes.",
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    image: img4,
    italic:
      "**_AI-enhanced pediatric care with real-time health insights and emergency notifications for children._**",
    desc: "Caters to infants, children, and adolescents, handling everything from vaccinations to growth monitoring and infectious disease management. The platform ensures child safety through smart vitals analysis and instant emergency alerts.",
  },
  {
    id: "ophthalmology",
    title: "Ophthalmologists",
    image: img5,
    italic:
      "**_Real-time eye condition monitoring and vision preservation using AI-based tools._**",
    desc: "Focuses on the diagnosis and treatment of eye-related disorders such as glaucoma, cataracts, retinal diseases, and vision impairment. Integrated tools assist in early detection, AI eye assessments, and remote follow-ups.",
  },
];

const Department = () => {
  const [activeTab, setActiveTab] = useState("cardiology");

  return (
    <section id="departments" className="py-10 sm:py-16 bg-gray-50">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-8 text-center mb-8 sm:mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">
          Departments
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          A hospital or medical alert system typically supports various departments, each specializing in a specific area.
        </p>
      </div>

      <div
        className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row gap-6 sm:gap-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Department List */}
        <ul className="flex flex-wrap md:flex-col gap-2 sm:gap-4 md:w-1/4 w-full overflow-x-auto md:overflow-visible pb-2">
          {departments.map((dept) => (
            <li key={dept.id} className="w-full">
              <button
                onClick={() => setActiveTab(dept.id)}
                className={`w-full px-3 py-2 rounded-md text-sm sm:text-base font-medium transition ${
                  activeTab === dept.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 shadow"
                }`}
              >
                {dept.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Department Content */}
 

        <div className="w-full md:w-3/4 bg-white p-3 sm:p-6 rounded-lg shadow">
          {departments
            .filter((dept) => dept.id === activeTab)
            .map((dept) => (
              <div
                key={dept.id}
                className="flex flex-col-reverse md:flex-row gap-3 sm:gap-6"
              >
                {/* Text Content */}
                <div className="w-full md:w-2/3 text-xs sm:text-base leading-tight">
                  <h3 className="text-base sm:text-2xl font-semibold mb-1 sm:mb-2">
                    {dept.title}
                  </h3>
                  <p className="italic text-gray-500 mb-1 sm:mb-2">{dept.italic}</p>
                  <p className="text-gray-700">{dept.desc}</p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src={dept.image}
                    alt={dept.title}
                    className="rounded-lg w-3/4 sm:w-full object-cover h-auto"
                  />
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Department;


