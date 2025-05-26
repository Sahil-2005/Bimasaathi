// import React from 'react'


// import adityaBirla from "../assets/partners/aditya-birla.png";
// import bajaj from "../assets/partners/bajaj.webp";
// import hdfc from "../assets/partners/hdfc.svg";
// import icic from "../assets/partners/icic.png";
// import kotak from "../assets/partners/kotak.jpeg";
// import maxlife from "../assets/partners/maxlife.svg";
// import niva from "../assets/partners/niva.svg";
// import tata from "../assets/partners/tata.png";


// const Partners = () => {

//     const partnerLogos = [
//       adityaBirla,
//       bajaj,
//       hdfc,
//       icic,
//       kotak,
//       maxlife,
//       niva,
//       tata,
//     ];


//   return (
//     <section className="bg-blue-600 py-16">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
//             Our Trusted Insurance Partners
//           </h2>
//           <div className="overflow-hidden relative w-full">
//             <div className="flex w-max animate-slide gap-20 items-center">
//               {partnerLogos.concat(partnerLogos).map((logo, i) => (
//                 <img
//                   key={i}
//                   src={logo}
//                   alt={`Partner logo ${i + 1}`}
//                   // className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
//                   className="h-20 md:h-24 object-contain transition duration-300"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

        
//       </section>
      
//   )
// }

// export default Partners;



// import React from 'react'


// import adityaBirla from "../assets/partners/aditya-birla.png";
// import bajaj from "../assets/partners/bajaj.webp";
// import hdfc from "../assets/partners/hdfc.svg";
// import icic from "../assets/partners/icic.png";
// import kotak from "../assets/partners/kotak.jpeg";
// import maxlife from "../assets/partners/maxlife.svg";
// import niva from "../assets/partners/niva.svg";
// import tata from "../assets/partners/tata.png";


// const Partners = () => {

//     const partnerLogos = [
//       adityaBirla,
//       bajaj,
//       hdfc,
//       icic,
//       kotak,
//       maxlife,
//       niva,
//       tata,
//     ];


//   return (
//     <section className="bg-blue-600 py-16">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
//             Our Trusted Insurance Partners
//           </h2>
//           <div className="overflow-hidden relative w-full">
//             <div className="flex w-max animate-slide gap-20 items-center">
//               {partnerLogos.concat(partnerLogos).map((logo, i) => (
//                 <img
//                   key={i}
//                   src={logo}
//                   alt={`Partner logo ${i + 1}`}
//                   // className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
//                   className="h-20 md:h-24 object-contain transition duration-300"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

        
//       </section>
      
//   )
// }

// export default Partners;



import React from "react";
import adityaBirla from "../assets/partners/aditya-birla.png";
import bajaj from "../assets/partners/bajaj.webp";
import hdfc from "../assets/partners/hdfc.svg";
import icic from "../assets/partners/icic.png";
import kotak from "../assets/partners/kotak.jpeg";
import maxlife from "../assets/partners/maxlife.svg";
import niva from "../assets/partners/niva.svg";
import tata from "../assets/partners/tata.png";
import sbi from "../assets/partners/sbi.png";
import exide from "../assets/partners/exidel.png";
import aegon from "../assets/partners/aegonl.png";
import hdfcl from "../assets/partners/hdfcl.png";


const Partners = () => {
  const lifeInsurancePartners = [hdfc, icic, kotak, maxlife, sbi, exide, aegon];
  const healthInsurancePartners = [adityaBirla, niva, hdfcl];
  const motorInsurancePartners = [bajaj, tata];

  const renderScrollingRow = (logos, direction, index) => (
    <div className="overflow-hidden w-full my-8" key={index}>
      <div
        className={`flex w-max gap-20 items-center ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <img
            key={`${index}-${i}`}
            src={logo}
            alt={`Partner ${index}-${i}`}
            className="h-20 md:h-24 object-contain transition duration-300"
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
          Our Trusted Insurance Partners
        </h2>
        {renderScrollingRow(lifeInsurancePartners, "left", 1)}
        {renderScrollingRow(healthInsurancePartners, "right", 2)}
        {renderScrollingRow(motorInsurancePartners, "left", 3)}
      </div>
    </section>
  );
};

export default Partners;
