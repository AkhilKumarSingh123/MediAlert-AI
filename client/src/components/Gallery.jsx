
// import React, { useEffect } from "react";
// import GLightbox from "glightbox";
// import "glightbox/dist/css/glightbox.css";

// // const images = [
// //   "gallery-1.jpg",
// //   "gallery-2.jpg",
// //   "gallery-3.jpg",
// //   "gallery-4.jpg",
// //   "gallery-5.jpg",
// //   "gallery-6.jpg",
// //   "gallery-7.jpg",
// //   "gallery-8.jpg",
// //   "gallery-4.jpg", // duplicate
// // ];

// import img1 from "../assets/img/gallery/gallery-1.jpg";
// import img2 from "../assets/img/gallery/gallery-2.jpg";
// import img3 from "../assets/img/gallery/gallery-3.jpg";
// import img4 from "../assets/img/gallery/gallery-4.jpg";
// import img5 from "../assets/img/gallery/gallery-5.jpg";
// import img6 from "../assets/img/gallery/gallery-6.jpg";
// import img7 from "../assets/img/gallery/gallery-7.jpg";
// import img8 from "../assets/img/gallery/gallery-8.jpg";

// // Remove duplicate if needed
// const images = [img1, img2, img3, img4, img5, img6, img7, img8];

// // import photo from `../assets/img/gallery/${img}`


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

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="100">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
//           {images.map((img, index) => (
//             <div key={index} className="px-2"> {/* Add padding around each image */}
//               <a
//                 // href={`./src/assets/img/gallery/${img}`}
//                 href = {img}
//                 className="glightbox"
//                 data-gallery="images-gallery"
//               >
//                 <img
//                   // src={`./src/assets/img/gallery/${img}`}
//                   src = {img}
//                   alt={`Gallery ${index + 1}`}
//                   className="w-full h-[160px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
      




// {/* 
// <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="100">
//   <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
//     <div className="flex space-x-4 min-w-max">
//       {images.map((img, index) => (
//         <div key={index} className="flex flex-col space-y-4">
//           <a
//             href={img}
//             className="glightbox"
//             data-gallery="images-gallery"
//           >
//             <img
//               src={img}
//               alt={`Gallery ${index + 1}`}
//               className="w-[120px] h-[120px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
//             />
//           </a>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>


//  */}





// {/* 
// <div
//   className="container mx-auto px-4 sm:px-6 lg:px-8"
//   data-aos="fade-up"
//   data-aos-delay="100"
// >
//   <div className="sm:hidden overflow-x-auto scrollbar-hide">
//     <div className="grid grid-cols-2 gap-4 min-w-[480px]">
//       {images.map((img, index) => (
//         <div key={index} className="px-2">
//           <a href={img} className="glightbox" data-gallery="images-gallery">
//             <img
//               src={img}
//               alt={`Gallery ${index + 1}`}
//               className="w-full h-[160px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
//             />
//           </a>
//         </div>
//       ))}
//     </div>
//   </div>

//   <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4">
//     {images.map((img, index) => (
//       <div key={index} className="px-2">
//         <a href={img} className="glightbox" data-gallery="images-gallery">
//           <img
//             src={img}
//             alt={`Gallery ${index + 1}`}
//             className="w-full h-[160px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
//           />
//         </a>
//       </div>
//     ))}
//   </div>
// </div>


//  */}





//     </section>
//   );
// };

// export default Gallery;







import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

// Import images
import img1 from "../assets/img/gallery/gallery-1.jpg";
import img2 from "../assets/img/gallery/gallery-2.jpg";
import img3 from "../assets/img/gallery/gallery-3.jpg";
import img4 from "../assets/img/gallery/gallery-4.jpg";
import img5 from "../assets/img/gallery/gallery-5.jpg";
import img6 from "../assets/img/gallery/gallery-6.jpg";
import img7 from "../assets/img/gallery/gallery-7.jpg";
import img8 from "../assets/img/gallery/gallery-8.jpg";

// Image list
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  useEffect(() => {
    GLightbox({
      selector: ".glightbox",
    });
  }, []);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div
        className="container mx-auto px-4 text-center mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Gallery</h2>
        <p className="text-gray-600">
          Explore key moments from the MedicalAlert AI experience — innovation,
          dedication, and care.
        </p>
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Mobile View - Horizontal Scroll with 3 Rows */}
        <div className="sm:hidden overflow-x-auto scrollbar-hide">
          <div className="grid grid-rows-3 auto-cols-max gap-4 grid-flow-col min-w-max">
            {images.map((img, index) => (
              <div key={index} className="px-1">
                <a
                  href={img}
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-[120px] h-[120px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - 3 Columns Grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <a
                href={img}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <img
                  src={img}
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
