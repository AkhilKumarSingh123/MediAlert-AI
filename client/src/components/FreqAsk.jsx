

// import React, { useState } from "react";

// const faqs = [
//   {
//     question: "What is Medical Alert AI?",
//     answer: "Medical Alert AI is a smart health monitoring system designed to detect medical emergencies (like seizures, abnormal heart rates, or falls) and send real-time alerts to caregivers, doctors, or emergency services.",
//   },
//   {
//     question: "Do I need wearable devices to use it?",
//     answer: "No, basic features like symptom logging and medication reminders work through the mobile app.",
//   },
//   {
//     question: "Is my data safe and private?",
//     answer: "Yes. We use end-to-end encryption and follow strict data privacy protocols. Only authorized caregivers and doctors can access your medical data.",
//   },
//   {
//     question: "What platforms is Medical Alert AI available on?",
//     answer: "Web dashboard (for doctors and hospitals). Coming soon: iOS & smartwatch support.",
//   },
//   {
//     question: "Is it doctor-approved or medically certified?",
//     answer: "We collaborate with certified healthcare professionals during development, and the system is built to follow standard health protocols. Final diagnosis should still be done by a licensed doctor.",
//   },
//   {
//     question: "How to subscribe?",
//     answer: "Users can upgrade or manage plans directly through the app or website.",
//   },
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section
//       id="faq"
//       className="faq section py-8 bg-gray-50 flex items-center justify-center min-h-screen"
//     >
//       <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-6">
//         {/* Section Title */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-semibold text-gray-800">Frequently Asked Questions</h2>
//           <p className="text-gray-600 mt-1 text-sm">Medical Alert AI project — ideal for documentation, slides, or overview sections:</p>
//         </div>

//         <div className="faq-container space-y-3">
//           {faqs.map((faq, index) => (
//             <div key={index} className="faq-item">
//               <div
//                 className="faq-header flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
//                 <i
//                   className={`faq-toggle transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"} text-gray-600`}
//                 >
//                   &#9660;
//                 </i>
//               </div>
//               {activeIndex === index && (
//                 <div className="faq-content mt-1 p-3 bg-gray-100 rounded-lg">
//                   <p className="text-gray-700 text-sm">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;





import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is Medical Alert AI?",
    answer:
      "Medical Alert AI is a smart health monitoring system designed to detect medical emergencies (like seizures, abnormal heart rates, or falls) and send real-time alerts to caregivers, doctors, or emergency services.",
  },
  {
    question: "Do I need wearable devices to use it?",
    answer:
      "No, basic features like symptom logging and medication reminders work through the mobile app.",
  },
  {
    question: "Is my data safe and private?",
    answer:
      "Yes. We use end-to-end encryption and follow strict data privacy protocols. Only authorized caregivers and doctors can access your medical data.",
  },
  {
    question: "What platforms is Medical Alert AI available on?",
    answer:
      "Web dashboard (for doctors and hospitals). Coming soon: iOS & smartwatch support.",
  },
  {
    question: "Is it doctor-approved or medically certified?",
    answer:
      "We collaborate with certified healthcare professionals during development, and the system is built to follow standard health protocols. Final diagnosis should still be done by a licensed doctor.",
  },
  {
    question: "How to subscribe?",
    answer:
      "Users can upgrade or manage plans directly through the app or website.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Everything you need to know about the MedicalAlert AI system.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium text-base sm:text-lg hover:bg-blue-50 transition duration-300"
              >
                {faq.question}
                <FaChevronDown
                  className={`transform transition-transform duration-300 text-gray-500 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`px-4 pt-0 pb-4 text-sm sm:text-base text-gray-700 bg-gray-50 transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  


  
  
  );
};

export default FAQ;
