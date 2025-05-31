// import React, { useEffect } from "react";
// import GLightbox from "glightbox";
// import "glightbox/dist/css/glightbox.css";

// const images = [
//   "gallery-1.jpg",
//   "gallery-2.jpg",
//   "gallery-3.jpg",
//   "gallery-4.jpg",
//   "gallery-5.jpg",
//   "gallery-6.jpg",
//   "gallery-7.jpg",
//   "gallery-8.jpg",
//   "gallery-4.jpg", // duplicate
// ];

// const Gallery = () => {
//   useEffect(() => {
//     GLightbox({
//       selector: ".glightbox",
//     });
//   }, []);

//   return (
//     <section id="gallery" className="py-16 bg-white">
//       <div className="container mx-auto px-4 text-center mb-10" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-2 text-gray-800">Gallery</h2>
//         <p className="text-gray-600">
//           Explore key moments from the MedicalAlert AI experience — innovation, dedication, and care.
//         </p>
//       </div>

//       <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {images.map((img, index) => (
//             <div key={index}>
//               <a
//                 href={`./src/assets/img/gallery/${img}`}
//                 className="glightbox"
//                 data-gallery="images-gallery"
//               >
//                 <img
//                   src={`./src/assets/img/gallery/${img}`}
//                   alt={`Gallery ${index + 1}`}
//                   className="w-full h-[220px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;






import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

const images = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-7.jpg",
  "gallery-8.jpg",
  "gallery-4.jpg", // duplicate
];

const Gallery = () => {
  useEffect(() => {
    GLightbox({
      selector: ".glightbox",
    });
  }, []);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Gallery</h2>
        <p className="text-gray-600">
          Explore key moments from the MedicalAlert AI experience — innovation, dedication, and care.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="px-2"> {/* Add padding around each image */}
              <a
                href={`./src/assets/img/gallery/${img}`}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <img
                  src={`./src/assets/img/gallery/${img}`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[160px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;




