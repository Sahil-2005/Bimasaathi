// import React, { useState } from "react";

// import nonmotorMain from '../assets/nonmotorinsurance/nonmotorMain.png';
// import nonmotorWhat from '../assets/nonmotorinsurance/nonmotorWhat.png';

// import nmFire from '../assets/nonmotorinsurance/nm-fire.png';

// import nmMarine from '../assets/nonmotorinsurance/nm-marine.png';

// import nmBurglary from '../assets/nonmotorinsurance/nm-burglary.png';

// import Footer from "../components/Footer";



// import {
//   Shield,
//   Car,
//   Truck,
//   BikeIcon as Motorcycle,
//   CheckCircle,
//   AlertCircle,
//   ChevronDown,
//   FileText,
//   Clock,
//   DollarSign,
//   Building2,
//   User,
// } from "lucide-react";





// const coverageData = [
//   {
//     id: 'fire',
//     title: 'Fire Insurance Coverage Details',
//     description: 'Fire insurance provides comprehensive protection against damage caused by fire and related perils. It safeguards your property, including buildings and contents, from the financial consequences of fire-related incidents.',
//     standard: [
//       'Fire damage to building structure',
//       'Contents and stock damage',
//       'Lightning and explosion damage',
//     ],
//     extended: [
//       'Riot, strike, and malicious damage',
//       'Storm, tempest, and flood',
//     ],
//     image: '/images/fire.jpg',
//   },
//   {
//     id: 'marine',
//     title: 'Marine Insurance Coverage Details',
//     description: 'Marine insurance covers loss or damage to goods in transit by sea, air, road, or rail. It ensures protection for cargo owners, shipping companies, and freight forwarders against unforeseen events during transportation.',
//     standard: [
//       'Loss or damage during transit',
//       'Theft, pilferage, and non-delivery',
//       'Natural calamities at sea or in transit',
//     ],
//     extended: [
//       'War and strike risks',
//       'Contingency and consequential loss',
//     ],
//     image: '/images/marine.jpg',
//   },
//   {
//     id: 'property',
//     title: 'Property Insurance Coverage Details',
//     description: 'Property insurance offers financial protection against risks to physical assets like buildings, equipment, and inventory. It covers damage due to fire, theft, natural disasters, and other perils.',
//     standard: [
//       'Building and content coverage',
//       'Burglary and theft protection',
//       'Natural calamity damage (e.g., earthquakes, floods)',
//     ],
//     extended: [
//       'Business interruption coverage',
//       'Electronic equipment insurance',
//     ],
//     image: '/images/property.jpg',
//   },
// ];


// export default function NonMotorInsurance() {
//   const [activeTab, setActiveTab] = useState("fire");
//   const [accordionOpen, setAccordionOpen] = useState(null);

//   const handleAccordionToggle = (value) => {
//     setAccordionOpen(accordionOpen === value ? null : value);
//   };


//    const [openItem, setOpenItem] = useState(null);

//   const toggleAccordion = (id) => {
//     setOpenItem(openItem === id ? null : id);
//   };

//   return (
//     <div className="bg-white">





//     {/* Hero Section */}
//           <section className="bg-blue-700 text-white py-16 md:py-24">
//             <div className="container mx-auto px-4 md:px-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <h1 className="text-3xl md:text-5xl font-bold mb-4">Non-Motor Insurance Protection</h1>
//                   <p className="text-lg md:text-xl mb-6">
//                     coverage for your property, business, and assets beyond vehicles. Protect what matters most with our specialized insurance solutions.
//                   </p>
//                   <div className="flex flex-wrap gap-3">
//                     <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
//                       Property Protection
//                     </span>
//                     <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
//                       Business Coverage
//                     </span>
//                     <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
//                       Asset Security
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex justify-center">
//                   <img
//                     src={nonmotorMain}
//                     alt="Motor Insurance Protection"
//                     width={500}
//                     height={400}
//                     className="rounded-lg shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>



    
//     {/* What is Non-Motor Insurance  */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-blue-700 mb-4">What is Non-Motor Insurance?</h2>
//             <p className="text-gray-700 text-lg">
//               Non-motor insurance encompasses all insurance products that protect your property, business, and assets other than vehicles. These policies safeguard against various risks including fire, theft, natural disasters, liability claims, and business interruptions.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <img
//                 src={nonmotorWhat}
//                 alt="Understanding Motor Insurance"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why is it Important?</h3>
//               <ul className="space-y-3">
//                 {[
//                   {
//                     title: "Legal Requirement:",
//                     text: "In most countries, it's mandatory to have at least third-party motor insurance.",
//                   },
//                   {
//                     title: "Financial Protection:",
//                     text: "Covers repair costs after accidents and damage.",
//                   },
//                   {
//                     title: "Liability Coverage:",
//                     text: "Protects you from claims if you cause injury or property damage to others.",
//                   },
//                   {
//                     title: "Peace of Mind:",
//                     text: "Drive with confidence knowing you're protected against unforeseen events.",
//                   },
//                 ].map((item, idx) => (
//                   <li className="flex items-start gap-3" key={idx}>
//                     <CheckCircle className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
//                     <p className="text-gray-700">
//                       <span className="font-medium">{item.title}</span> {item.text}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>




//       {/* Types of Non-Motor Insurance */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
//             Types of Non-Motor Insurance
//           </h2>

//           {/* Tabs */}
//           <div className="max-w-5xl mx-auto">
//             <div className="grid grid-cols-3 gap-4 mb-8">
//               {["fire", "marine", "burglary"].map((type) => (
//                 <button
//                   key={type}
//                   onClick={() => setActiveTab(type)}
//                   className={`py-2 px-4 font-semibold border rounded ${
//                     activeTab === type
//                       ? "bg-blue-600 text-white"
//                       : "bg-white text-blue-600 border-blue-600"
//                   }`}
//                 >
//                   {type.charAt(0).toUpperCase() + type.slice(1)} Insurance
//                 </button>
//               ))}
//             </div>

//             {/* Tab Content */}
//             {activeTab === "fire" && (
//               <div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-blue-600 mb-4">🔥 Fire Insurance</h3>
//                   <p className="text-gray-700 mb-4">
//                     Fire insurance provides protection against losses caused by fire and related perils...
//                   </p>

//                   <h4 className="font-medium text-blue-600 mb-2">What's Covered:</h4>
//                   <ul className="space-y-2 mb-4 list-disc pl-5 text-gray-700">
//                     <li>Fire damage to buildings and contents</li>
//                     <li>Lightning strikes</li>
//                     <li>Explosion and implosion</li>
//                     <li>Aircraft damage</li>
//                     <li>Riot, strike, and malicious damage</li>
//                   </ul>

//                   <h4 className="font-medium text-blue-600 mb-2">Additional Benefits:</h4>
//                   <ul className="space-y-2 list-disc pl-5 text-gray-700">
//                     <li>Debris removal costs</li>
//                     <li>Temporary accommodation expenses</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <img
//                     src={nmFire}
//                     alt="Fire Insurance"
//                     className="rounded-lg shadow-md w-full"
//                   />
//                 </div>
//               </div>
//             )}

//             {activeTab === "marine" && (
//               <div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-blue-600 mb-4">🚢 Marine Insurance</h3>
//                   <p className="text-gray-700 mb-4">
//                     Marine insurance covers goods, freight, cargo, and vessels during transit by sea, air, or land...
//                   </p>

//                   <h4 className="font-medium text-blue-600 mb-2">Types of Marine Insurance:</h4>
//                   <ul className="space-y-2 mb-4 list-disc pl-5 text-gray-700">
//                     <li>Cargo Insurance: Covers goods in transit</li>
//                     <li>Hull Insurance: Covers ships and vessels</li>
//                     <li>Freight Insurance: Covers freight charges</li>
//                     <li>Liability Insurance: Third-party coverage</li>
//                   </ul>

//                   <h4 className="font-medium text-blue-600 mb-2">Coverage Includes:</h4>
//                   <ul className="space-y-2 list-disc pl-5 text-gray-700">
//                     <li>Perils of the sea</li>
//                     <li>Theft and piracy</li>
//                     <li>General average contributions</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <img
//                     src={nmMarine}
//                     alt="Marine Insurance"
//                     className="rounded-lg shadow-md w-full"
//                   />
//                 </div>
//               </div>
//             )}

//             {activeTab === "burglary" && (
//               <div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-blue-600 mb-4">🏠 Burglary Insurance</h3>
//                   <p className="text-gray-700 mb-4">
//                     Burglary insurance provides protection against losses due to theft, burglary, and housebreaking...
//                   </p>

//                   <h4 className="font-medium text-blue-600 mb-2">What's Covered:</h4>
//                   <ul className="space-y-2 mb-4 list-disc pl-5 text-gray-700">
//                     <li>Theft by forcible entry</li>
//                     <li>Burglary and housebreaking</li>
//                     <li>Damage to property during theft</li>
//                     <li>Cash, jewelry, and valuables</li>
//                   </ul>

//                   <h4 className="font-medium text-blue-600 mb-2">Additional Features:</h4>
//                   <ul className="space-y-2 list-disc pl-5 text-gray-700">
//                     <li>24/7 security monitoring</li>
//                     <li>Replacement cost coverage</li>
//                     <li>Temporary accommodation</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <img
//                     src={nmBurglary}
//                     alt="Burglary Insurance"
//                     className="rounded-lg shadow-md w-full"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>


//       {/* Benefits of Motor Insurance */}
//             <section className="py-16">
//               <div className="container mx-auto px-4 md:px-6">
//                 <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">Benefits of Non-Motor Insurance</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {[
//                     {
//                       icon: <Shield className="h-10 w-10 text-blue-700 mb-2" />,
//                       title: "Protection",
//                       desc: "Covers a wide range of risks including fire, theft, natural disasters, and liability claims, providing complete peace of mind.",
//                     },
//                     {
//                       icon: <Building2 className="h-10 w-10 text-blue-700 mb-2" />,
//                       title: "Business Continuity",
//                       desc: "Ensures your business can recover quickly from covered losses, minimizing downtime and financial impact.",
//                     },
//                     {
//                       icon: <DollarSign className="h-10 w-10 text-blue-700 mb-2" />,
//                       title: "Cost-Effective Coverage",
//                       desc: "Affordable premiums that provide significant financial protection against potentially devastating losses.",
//                     },
//                     {
//                       icon: <FileText className="h-10 w-10 text-blue-700 mb-2" />,
//                       title: "Legal Compliance",
//                       desc: "Helps meet regulatory requirements and contractual obligations for various types of insurance coverage.",
//                     },
//                     {
//                       icon: <Clock className="h-10 w-10 text-blue-700 mb-2" />,
//                       title: "Quick Claim Settlement",
//                       desc: "Fast and efficient claims processing to help you recover from losses and get back to normal operations quickly.",
//                     },
//                     {
//                       icon: <User className="h-10 w-10 text-blue-700 mb-2" />,
//                       title: "Expert Support",
//                       desc: "Access to specialized risk assessment and loss prevention services to minimize potential exposures.",
//                     },
//                   ].map((benefit, idx) => (
//                     <div
//                       key={idx}
//                       className="border border-blue-100 rounded-lg p-6 hover:shadow-md transition-shadow"
//                     >
//                       <div className="pb-2">{benefit.icon}</div>
//                       <h3 className="text-xl text-blue-700 font-semibold mb-2">{benefit.title}</h3>
//                       <p className="text-gray-700">{benefit.desc}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
      



//       {/* Coverage Details */}

//       <div className="space-y-6 px-4 sm:px-6 lg:px-8 py-6 max-w-5xl mx-auto">
//       <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Insurance Coverage Details</h2>

//       {coverageData.map((coverage) => (
//         <div key={coverage.id} className="border border-gray-200 rounded-lg">
//           <button
//             onClick={() => toggleAccordion(coverage.id)}
//             className="text-lg flex justify-between items-center transition w-full text-left px-6 py-4 font-medium text-blue-600 hover:bg-blue-50"
//           >
//             {coverage.title}
//             <ChevronDown className={`transition-transform ${openItem === coverage.id ? 'rotate-180' : ''}`} />
//           </button>
//           {openItem === coverage.id && (
//             <div className="px-6 py-4">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <div className="col-span-2">
//                   <p className="text-gray-700 mb-3">{coverage.description}</p>
//                   <h4 className="font-semibold text-gray-800 mb-2">Standard Coverage:</h4>
//                   <ul className="space-y-1 mb-3">
//                     {coverage.standard.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2 text-gray-700">
//                         <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <h4 className="font-semibold text-gray-800 mb-2">Extended Coverage:</h4>
//                   <ul className="space-y-1">
//                     {coverage.extended.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2 text-gray-700">
//                         <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <img
//                     src={coverage.image}
//                     alt={`${coverage.title}`}
//                     className="rounded-lg w-full h-auto object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}

//     </div>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import nonmotorMain from '../assets/nonmotorinsurance/nonmotorMain.png';
// import nonmotorWhat from '../assets/nonmotorinsurance/nonmotorWhat.png';
// import nmFire from '../assets/nonmotorinsurance/nm-fire.png';
// import nmMarine from '../assets/nonmotorinsurance/nm-marine.png';
// import nmBurglary from '../assets/nonmotorinsurance/nm-burglary.png';
// import { CheckCircle } from "lucide-react";

// export default function NonMotorInsurance() {
//   const [activeTab, setActiveTab] = useState("fire");

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="bg-blue-700 text-white py-16 md:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h1 className="text-3xl md:text-5xl font-bold mb-4">Non-Motor Insurance Protection</h1>
//               <p className="text-lg md:text-xl mb-6">
//                 Coverage for your property, business, and assets beyond vehicles. Protect what matters most with our specialized insurance solutions.
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Property Protection</span>
//                 <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Business Coverage</span>
//                 <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Asset Security</span>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <img src={nonmotorMain} alt="Non-Motor Insurance" className="rounded-lg shadow-lg w-full max-w-md" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What is Non-Motor Insurance */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-blue-700 mb-4">What is Non-Motor Insurance?</h2>
//             <p className="text-gray-700 text-lg">
//               Non-motor insurance encompasses all insurance products that protect your property, business, and assets other than vehicles. These policies safeguard against various risks including fire, theft, natural disasters, liability claims, and business interruptions.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <img src={nonmotorWhat} alt="Understanding Insurance" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why is it Important?</h3>
//               <ul className="space-y-3">
//                 {[{
//                   title: "Legal Requirement:",
//                   text: "Some businesses may require specific insurance to operate legally."
//                 }, {
//                   title: "Financial Protection:",
//                   text: "Covers losses and damages from various perils."
//                 }, {
//                   title: "Liability Coverage:",
//                   text: "Protects from legal liabilities due to accidents."
//                 }, {
//                   title: "Peace of Mind:",
//                   text: "Helps you focus on your business without worry."
//                 }].map((item, idx) => (
//                   <li className="flex items-start gap-3" key={idx}>
//                     <CheckCircle className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
//                     <p className="text-gray-700">
//                       <span className="font-medium">{item.title}</span> {item.text}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Types of Insurance */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Types of Non-Motor Insurance</h2>

//           {/* Tabs */}
//           <div className="max-w-5xl mx-auto">
//             <div className="flex flex-wrap justify-center gap-4 mb-8">
//               {["fire", "marine", "burglary"].map((type) => (
//                 <button
//                   key={type}
//                   onClick={() => setActiveTab(type)}
//                   className={`py-2 px-4 font-semibold border rounded transition duration-300 ${
//                     activeTab === type
//                       ? "bg-blue-600 text-white"
//                       : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
//                   }`}
//                 >
//                   {type.charAt(0).toUpperCase() + type.slice(1)} Insurance
//                 </button>
//               ))}
//             </div>

//             {/* Tab Panels */}
//             <div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//               {activeTab === "fire" && (
//                 <>
//                   <div>
//                     <h3 className="text-2xl font-semibold text-blue-600 mb-4">🔥 Fire Insurance</h3>
//                     <p className="text-gray-700 mb-4">Provides protection against fire-related losses.</p>
//                     <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                       <li>Fire and lightning</li>
//                       <li>Explosion</li>
//                       <li>Aircraft damage</li>
//                       <li>Riot, strike, and malicious damage</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <img src={nmFire} alt="Fire Insurance" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
//                   </div>
//                 </>
//               )}

//               {activeTab === "marine" && (
//                 <>
//                   <div>
//                     <h3 className="text-2xl font-semibold text-blue-600 mb-4">🚢 Marine Insurance</h3>
//                     <p className="text-gray-700 mb-4">Covers goods and freight in transit via sea, land, or air.</p>
//                     <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                       <li>Transit damage</li>
//                       <li>Theft or piracy</li>
//                       <li>Weather-related damage</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <img src={nmMarine} alt="Marine Insurance" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
//                   </div>
//                 </>
//               )}

//               {activeTab === "burglary" && (
//                 <>
//                   <div>
//                     <h3 className="text-2xl font-semibold text-blue-600 mb-4">🔐 Burglary Insurance</h3>
//                     <p className="text-gray-700 mb-4">Protects against loss or damage due to burglary and theft.</p>
//                     <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                       <li>Forced entry theft</li>
//                       <li>Housebreaking</li>
//                       <li>Damage to property during burglary</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <img src={nmBurglary} alt="Burglary Insurance" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useState } from "react";
import nonmotorMain from '../assets/nonmotorinsurance/nonmotorMain.png';
import nonmotorWhat from '../assets/nonmotorinsurance/nonmotorWhat.png';
import nmFire from '../assets/nonmotorinsurance/nm-fire.png';
import nmMarine from '../assets/nonmotorinsurance/nm-marine.png';
import nmBurglary from '../assets/nonmotorinsurance/nm-burglary.png';
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";

export default function NonMotorInsurance() {
  const [activeTab, setActiveTab] = useState("fire");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Non-Motor Insurance Protection</h1>
              <p className="text-lg md:text-xl mb-6">
                Coverage for your property, business, and assets beyond vehicles. Protect what matters most with our specialized insurance solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Property Protection</span>
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Business Coverage</span>
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Asset Security</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={nonmotorMain} alt="Non-Motor Insurance" className="rounded-lg shadow-lg w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Non-Motor Insurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">What is Non-Motor Insurance?</h2>
            <p className="text-gray-700 text-lg">
              Non-motor insurance encompasses all insurance products that protect your property, business, and assets other than vehicles. These policies safeguard against various risks including fire, theft, natural disasters, liability claims, and business interruptions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={nonmotorWhat} alt="Understanding Insurance" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why is it Important?</h3>
              <ul className="space-y-3">
                {[{
                  title: "Legal Requirement:",
                  text: "Some businesses may require specific insurance to operate legally."
                }, {
                  title: "Financial Protection:",
                  text: "Covers losses and damages from various perils."
                }, {
                  title: "Liability Coverage:",
                  text: "Protects from legal liabilities due to accidents."
                }, {
                  title: "Peace of Mind:",
                  text: "Helps you focus on your business without worry."
                }].map((item, idx) => (
                  <li className="flex items-start gap-3" key={idx}>
                    <CheckCircle className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <span className="font-medium">{item.title}</span> {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Benefits of Non-Motor Insurance</h2>
            <p className="text-gray-700 text-lg">Explore the key advantages of securing your property and business with our insurance plans.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Protection against unforeseen events",
              "Safeguards physical assets",
              "Ensures business continuity",
              "Legal liability coverage",
              "Risk mitigation for natural disasters",
              "Boosts credibility with stakeholders"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                <CheckCircle className="text-blue-600 h-6 w-6 mt-1" />
                <p className="text-gray-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Insurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Types of Non-Motor Insurance</h2>

          {/* Tabs */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["fire", "marine", "burglary"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTab(type)}
                  className={`py-2 px-4 font-semibold border rounded transition duration-300 ${
                    activeTab === type
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} Insurance
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            <div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {activeTab === "fire" && (
                <>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">🔥 Fire Insurance</h3>
                    <p className="text-gray-700 mb-4">Provides protection against fire-related losses.</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Fire and lightning</li>
                      <li>Explosion</li>
                      <li>Aircraft damage</li>
                      <li>Riot, strike, and malicious damage</li>
                    </ul>
                  </div>
                  <div>
                    <img src={nmFire} alt="Fire Insurance" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
                  </div>
                </>
              )}

              {activeTab === "marine" && (
                <>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">🚢 Marine Insurance</h3>
                    <p className="text-gray-700 mb-4">Covers goods and freight in transit via sea, land, or air.</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Transit damage</li>
                      <li>Theft or piracy</li>
                      <li>Weather-related damage</li>
                    </ul>
                  </div>
                  <div>
                    <img src={nmMarine} alt="Marine Insurance" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
                  </div>
                </>
              )}

              {activeTab === "burglary" && (
                <>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">🔐 Burglary Insurance</h3>
                    <p className="text-gray-700 mb-4">Protects against loss or damage due to burglary and theft.</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Forced entry theft</li>
                      <li>Housebreaking</li>
                      <li>Damage to property during burglary</li>
                    </ul>
                  </div>
                  <div>
                    <img src={nmBurglary} alt="Burglary Insurance" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
