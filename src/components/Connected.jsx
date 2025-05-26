// import React from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// import Cust from "../assets/connected/cust.png";
// import Part from "../assets/connected/partner.png";
// import Claim from "../assets/connected/claim.png";

// // Define actual count numbers and suffixes separately for precision
// const stats = [
//   {
//     image: Cust,
//     start: 0,
//     end: 9900,
//     suffix: "+",
//     label: "Customers Compared",
//   },
//   {
//     image:
//       "https://img.icons8.com/ios-filled/60/ffffff/group-foreground-selected.png",
//     start: 0,
//     end: 3000,
//     suffix: "+",
//     label: "Policy Holders",
//   },
//   {
//     image: Part,
//     start: 0,
//     end: 26,
//     suffix: "+",
//     label: "Insurance Partners",
//   },
//   {
//     image: Claim,
//     start: 0,
//     end: 10000,
//     suffix: "+",
//     label: "Claims Assisted",
//   },
// ];

// const Connected = () => {
//   return (
//     <section className="bg-blue-700 py-24 px-4 text-white">
//       <div className="w-full max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-20 leading-tight text-white">
//           How Strongly We're Connected 🚀
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {stats.map((item, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center justify-center bg-blue-500/20 p-6 rounded-2xl shadow-lg 
//              hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/40 
//              transition-shadow duration-300 ease-in-out"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.label}
//                 className="w-20 h-20 object-contain mb-4"
//               />
//               <p className="text-3xl font-bold">
//                 <CountUp
//                   start={item.start}
//                   end={item.end}
//                   duration={2}
//                   separator=","
//                   suffix={item.suffix}
//                   enableScrollSpy
//                   scrollSpyOnce
//                 />
//               </p>
//               <p className="text-base text-blue-100 font-medium mt-1 text-center">
//                 {item.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Connected;



import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import Cust from "../assets/connected/cust.png";
import Part from "../assets/connected/partner.png";
import Claim from "../assets/connected/claim.png";

// Define actual count numbers and suffixes separately for precision
const stats = [
  {
    image: Cust,
    start: 0,
    end: 9900,
    suffix: "+",
    label: "Customers Compared",
  },
  {
    image:
      "https://img.icons8.com/ios-filled/60/ffffff/group-foreground-selected.png",
    start: 0,
    end: 3000,
    suffix: "+",
    label: "Policy Holders",
  },
  {
    image: Part,
    start: 0,
    end: 26,
    suffix: "+",
    label: "Insurance Partners",
  },
  {
    image: Claim,
    start: 0,
    end: 10000,
    suffix: "+",
    label: "Claims Assisted",
  },
];

const Connected = () => {
  return (
    <section className="bg-blue-700 py-24 px-4 text-white">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20 leading-tight text-white">
          How Strongly We're Connected 🚀
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-blue-500/20 p-6 rounded-2xl shadow-lg 
             hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/40 
             transition-shadow duration-300 ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-20 h-20 object-contain mb-4"
              />
              <p className="text-3xl font-bold">
                <CountUp
                  start={item.start}
                  end={item.end}
                  duration={2}
                  separator=","
                  suffix={item.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <p className="text-base text-blue-100 font-medium mt-1 text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connected;
