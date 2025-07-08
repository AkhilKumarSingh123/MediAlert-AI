
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
    <section id="pricing" className="py-16 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">Our Pricing Plans</h2>
        <p className="text-gray-600 mt-2">
          Choose the plan that suits your health needs. All core features are absolutely free!
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between w-full sm:w-[280px] md:w-[300px] lg:w-[320px]" // Reduced width for each box container
              data-aos="fade-up"
              data-aos-delay={index * 100 + 100}
            >
              <div>
                {plan.tag && (
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    {plan.tag}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-800 mb-2">{plan.title}</h3>
                <h4 className="text-2xl font-semibold text-blue-600 mb-4">
                  ₹{plan.price}
                  <span className="text-sm text-gray-600 font-normal"> / month</span>
                </h4>
                <ul className="text-gray-700 space-y-1 mb-6 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
