// import {
//   CarFront,
//   Bike,
//   Truck,
//   Home,
//   UserRoundCheck,
//   Building2,
//   Flame,
//   Ship,
//   ShieldCheck,
//   Plane,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const groupedFeatures = [
//   {
//     icon: <CarFront className="w-12 h-12 text-blue-500" />,
//     title: "Motor Insurance",
//     description:
//       "• Car Insurance: 24×7 roadside assistance, quick claims\n• Bike Insurance: Comprehensive add-ons, low premium\n• Commercial Vehicle Insurance: Third-party + theft cover",
//     link: "/insurance/motor-insurance",
//   },
//   {
//     icon: <Building2 className="w-12 h-12 text-blue-500" />,
//     title: "Non-Motor Insurance",
//     description:
//       "• Fire Insurance: Asset damage protection\n• Marine Insurance: Cargo & international trade cover\n• Burglary Insurance: Covers theft/forced entry losses",
//     link: "/insurance/non-motor-insurance",
//   },
//   {
//     icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
//     title: "Health & Life Insurance",
//     description:
//       "• Life Insurance: Financial security + tax benefits\n• Personal Accident Insurance: Accidental death coverage\n• Peace of mind for you and your family",
//     link: "/insurance/health-life-insurance",
//   },
//   {
//     icon: <Plane className="w-12 h-12 text-blue-500" />,
//     title: "Travel Insurance",
//     description:
//       "• Medical emergency support\n• Travel delays covered\n• Multiple travel policy options",
//     link: "/insurance/travel-insurance",
//   },
//   {
//     icon: <Home className="w-12 h-12 text-blue-500" />,
//     title: "Home Insurance",
//     description:
//       "• Covers building & contents\n• Digital-friendly policies\n• Natural disaster protection",
//     link: "/insurance/home-insurance",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function FeatureCards() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-blue-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-5xl font-extrabold text-blue-700 mb-6 tracking-tight">
//           Our Product Categories
//         </h2>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
//           Explore our comprehensive range of insurance products categorized to meet your every need — all in one platform.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {groupedFeatures.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-left"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               custom={index}
//             >
//               <div className="mb-6 flex justify-start">{item.icon}</div>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 {item.title}
//               </h3>
//               <p className="text-base text-gray-600 whitespace-pre-line leading-relaxed mb-6">
//                 {item.description}
//               </p>
//               <Link
//                 to={item.link}
//                 className="inline-block text-blue-600 font-medium hover:underline"
//               >
//                 Learn More →
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import {
  CarFront,
  Bike,
  Truck,
  Home,
  UserRoundCheck,
  Building2,
  Flame,
  Ship,
  ShieldCheck,
  Plane,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const groupedFeatures = [
  {
    icon: <CarFront className="w-12 h-12 text-blue-500" />,
    title: "Motor Insurance",
    description:
      "• Car Insurance: 24×7 roadside assistance, quick claims\n• Bike Insurance: Comprehensive add-ons, low premium\n• Commercial Vehicle Insurance: Third-party + theft cover",
    link: "/insurance/motor-insurance",
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-500" />,
    title: "Non-Motor Insurance",
    description:
      "• Fire Insurance: Asset damage protection\n• Marine Insurance: Cargo & international trade cover\n• Burglary Insurance: Covers theft/forced entry losses",
    link: "/insurance/non-motor-insurance",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
    title: "Health & Life Insurance",
    description:
      "• Life Insurance: Financial security + tax benefits\n• Personal Accident Insurance: Accidental death coverage\n• Peace of mind for you and your family",
    link: "/insurance/health-life-insurance",
  },
  {
    icon: <Plane className="w-12 h-12 text-blue-500" />,
    title: "Travel Insurance",
    description:
      "• Medical emergency support\n• Travel delays covered\n• Multiple travel policy options",
    link: "/insurance/travel-insurance",
  },
  {
    icon: <Home className="w-12 h-12 text-blue-500" />,
    title: "Home Insurance",
    description:
      "• Covers building & contents\n• Digital-friendly policies\n• Natural disaster protection",
    link: "/insurance/home-insurance",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function FeatureCards() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-blue-700 mb-6 tracking-tight">
          Our Product Categories
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          Explore our comprehensive range of insurance products categorized to meet your every need — all in one platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {groupedFeatures.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-left"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <div className="mb-6 flex justify-start">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 whitespace-pre-line leading-relaxed mb-6">
                {item.description}
              </p>
              <Link
                to={item.link}
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
