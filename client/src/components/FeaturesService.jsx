

import React from "react";

const cards = [
  {
    icon: "fas fa-robot",
    title: "Smart Health Chatbot",
    desc: "24/7 AI chatbot for basic medical guidance. Answers health queries and gives self-care tips.",
  },
  {
    icon: "fas fa-calendar-check",
    title: "Appointment System",
    desc: "Quick appointment booking with reminders. Track upcoming and past schedules.",
  },
  {
    icon: "fas fa-file-medical-alt",
    title: "Health Records",
    desc: "Store medical reports and prescriptions. Access your health info anytime.",
  },
  {
    icon: "fas fa-exclamation-triangle",
    title: "Emergency Alert",
    desc: "Auto alert to hospitals or family in emergencies without wearables.",
  },
];

const Card = ({ icon, title, desc, index }) => (
  <div
    className="w-60 sm:w-72 bg-gray-600 backdrop-blur border border-gray-200 hover:border-green-600 hover:shadow-lg hover:scale-105 shadow-md p-3 sm:p-5 rounded-lg text-center hover:bg-green-400 transition-all duration-300 ease-in-out mx-auto my-2"
    data-aos="fade-up"
    data-aos-delay={index * 100 + 100}
  >
    <div className="text-3xl sm:text-4xl text-pink-600 mb-2 sm:mb-3">
      <i className={icon}></i>
    </div>
    <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-white hover:text-blue-800 transition">
      {title}
    </h4>
    <p className="text-xs sm:text-sm text-white">{desc}</p>
  </div>
);

const FeaturedServices = () => {
  return (
    <section id="featured-services" className="py-10 sm:py-16 bg-gray-700 flex items-center">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Mobile View: 2-row horizontal scroll */}
        <div className="sm:hidden">
          <div className="overflow-x-auto">
            <div className="grid grid-rows-2 auto-cols-max grid-flow-col gap-2 px-1">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  desc={card.desc}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View: Normal Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;





