

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
