
import {
  FaHeartbeat,
  FaBrain,
  FaRobot,
  FaUserShield,
  FaUserMd,
  FaMapMarkedAlt,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaHeartbeat />,
    title: 'AI-Driven Emergency Alerts',
    desc: 'Detects critical symptoms via AI input analysis and instantly sends alerts to hospitals and emergency contacts—no wearables required.',
  },
  {
    icon: <FaBrain />,
    title: 'AI-Powered Disease Prediction',
    desc: 'Uses machine learning to analyze user-reported symptoms and predict potential diseases with suggested treatments.',
  },
  {
    icon: <FaRobot />,
    title: 'Smart Health Chatbot',
    desc: 'Conversational AI assistant that understands symptoms, provides instant guidance, and recommends consulting doctors when needed.',
  },
  {
    icon: <FaUserShield />,
    title: 'Role-Based Dashboards',
    desc: 'Separate portals for Admins, Doctors, and Patients with tailored controls for managing records, appointments, and health insights.',
  },
  {
    icon: <FaUserMd />,
    title: 'Online Doctor Consultation',
    desc: 'Patients can consult doctors remotely through the platform, book appointments, and access digital prescriptions and reports.',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Nearby Medical Store Finder',
    desc: 'Lets users find nearby pharmacies through Google Maps and geolocation, making urgent medicine access easier.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore how MediAlert AI leverages artificial intelligence and real-time data to deliver life-saving healthcare services, even in critical moments.
        </p>
      </div>

      {/* Mobile View: Horizontal scroll with smaller cards */}
      <div className="block md:hidden overflow-x-auto">
        <div className="flex gap-3 w-max px-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-3 w-[200px] min-w-[200px] flex-shrink-0 rounded-lg flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={100 * (i + 1)}
            >
              <div className="bg-blue-100 text-blue-600 text-2xl p-3 rounded-full mb-3">
                {service.icon}
              </div>
              <h3 className="text-base font-semibold mb-1">{service.title}</h3>
              <p className="text-gray-600 text-xs">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop & Tablet View: Grid layout remains same */}
      <div className="hidden md:grid max-w-6xl mx-auto px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-4 w-full mx-auto rounded-lg flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-delay={100 * (i + 1)}
          >
            <div className="bg-blue-100 text-blue-600 text-3xl p-4 rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
