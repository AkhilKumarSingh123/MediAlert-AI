

import React from "react";

const pricingPlans = [
  {
    title: "Free",
    price: "0",
    features: [
      "Patient profile & medical history management",
      "Basic AI-based disease prediction",
      "Access to health tips & basic alerts",
    ],
  },
  {
    title: "Standard Plan",
    price: "199",
    features: [
      "AI-powered disease prediction and treatment suggestions",
      "Daily medicine & appointment reminders",
      "Emergency alert button with live GPS tracking",
      "Weekly health reports (PDF/email)",
      "AI Health Chatbot integration",
    ],
  },
  {
    title: "Premium Plan",
    price: "499",
    features: [
      "All Standard features +",
      "Real-time symptom monitoring via chatbot",
      "AI-based critical condition detection and alerts",
      "Priority emergency alerts to doctors/family",
      "Voice assistant for medical advice",
    ],
  },
  {
    title: "Clinic Subscription",
    price: "4999",
    tag: "Advanced",
    features: [
      "Dashboard for managing multiple patients",
      "Real-time monitoring panel for doctor oversight",
      "Custom alert routing (doctor-on-call, ambulance, family)",
      "Comprehensive patient history analytics",
      "API access for hospital integration",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-700">
      {/* Section Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-white">Our Pricing Plans</h2>
        <p className="text-white mt-2">
          Choose the plan that suits your health needs. All core features are absolutely free!
        </p>
      </div>

      {/* Mobile View: 2 Rows Scrollable Pricing Cards */}
      <div className="sm:hidden px-4 overflow-x-auto scrollbar-hide">
        <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-4 min-w-max">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="w-[200px] h-[200px] bg-gray-600 rounded-xl shadow-md p-4 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 100}
            >
              <div>
                {plan.tag && (
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    {plan.tag}
                  </span>
                )}
                <h3 className="text-sm font-bold text-white mb-1">{plan.title}</h3>
                <h4 className="text-lg font-semibold text-green-400 mb-2">
                  ₹{plan.price}
                  <span className="text-xs text-white font-normal"> / month</span>
                </h4>
                <ul className="text-white space-y-1 text-xs">
                  {plan.features.slice(0, 2).map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                  {plan.features.length > 2 && (
                    <li className="text-green-400 text-[11px] italic mt-1">+ more features</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View: Grid Cards Centered and Attractive */}
      <div className="hidden sm:block">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-gray-600 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 100}
              >
                <div>
                  {plan.tag && (
                    <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3">
                      {plan.tag}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-white mb-2">{plan.title}</h3>
                  <h4 className="text-2xl font-semibold text-green-400 mb-4">
                    ₹{plan.price}
                    <span className="text-sm text-white font-normal"> / month</span>
                  </h4>
                  <ul className="text-white space-y-1 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
