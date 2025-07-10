

// import React from 'react';
// import { FaUserMd, FaFlask, FaAward } from 'react-icons/fa';
// import { FaHospital } from 'react-icons/fa6';

// const StatItem = ({ icon: Icon, label }) => {
//   return (
//     <div className="flex items-center gap-4 bg-white shadow-md p-6 rounded-lg h-full w-full hover:shadow-lg transition-shadow duration-300">
//       <Icon className="text-blue-600 text-4xl flex-shrink-0" />
//       <div>
//         <p className="text-lg font-semibold text-gray-800">{label}</p>
//       </div>
//     </div>
//   );
// };

// const Stats = () => {
//   return (
//     <section id="stats" className="py-16 bg-gray-50">
//       <div
//         className="max-w-6xl mx-auto px-4"
//         data-aos="fade-up"
//         data-aos-delay="100"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <StatItem icon={FaUserMd} label="Doctors" />
//           <StatItem icon={FaHospital} label="Departments" />
//           <StatItem icon={FaFlask} label="Research" />
//           <StatItem icon={FaAward} label="Awards" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;




import React from 'react';
import { FaUserMd, FaFlask, FaAward } from 'react-icons/fa';
import { FaHospital } from 'react-icons/fa6';

const StatItem = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 bg-white shadow-md p-4 sm:p-6 rounded-lg h-full w-full hover:shadow-lg transition-shadow duration-300">
      <Icon className="text-blue-600 text-2xl sm:text-4xl flex-shrink-0" />
      <div>
        <p className="text-sm sm:text-lg font-semibold text-gray-800">
          {label}
        </p>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="py-10 sm:py-16 bg-gray-50">
      <div
        className="max-w-5xl mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2">
          <StatItem icon={FaUserMd} label="Doctors" />
          <StatItem icon={FaHospital} label="Departments" />
          <StatItem icon={FaFlask} label="Research" />
          <StatItem icon={FaAward} label="Awards" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
