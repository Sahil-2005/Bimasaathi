// import React, { useState } from 'react';
// import { Building, CheckCircle, Flame, Droplets, Zap, TreePine, Sofa, Shield } from 'lucide-react';

// const HomeInsuranceTypes = () => {
//   const [activeTab, setActiveTab] = useState('structure');

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
//           Types of Home Insurance Coverage
//         </h2>

//         <div className="max-w-5xl mx-auto">
//           <div className="grid grid-cols-3 mb-8">
//             <button
//               onClick={() => setActiveTab('structure')}
//               className={`py-2 px-4 font-medium border-b-2 ${
//                 activeTab === 'structure' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
//               }`}
//             >
//               Structure Insurance
//             </button>
//             <button
//               onClick={() => setActiveTab('contents')}
//               className={`py-2 px-4 font-medium border-b-2 ${
//                 activeTab === 'contents' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
//               }`}
//             >
//               Contents Insurance
//             </button>
//             <button
//               onClick={() => setActiveTab('comprehensive')}
//               className={`py-2 px-4 font-medium border-b-2 ${
//                 activeTab === 'comprehensive' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
//               }`}
//             >
//               Comprehensive Coverage
//             </button>
//           </div>

//           {activeTab === 'structure' && (
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <div className="flex items-center gap-3 mb-4">
//                     <Building className="h-8 w-8 text-blue-600" />
//                     <h3 className="text-2xl font-semibold text-blue-600">Structure Insurance</h3>
//                   </div>
//                   <p className="text-gray-700 mb-6">
//                     Structure insurance covers the physical building of your home, including the foundation, walls,
//                     roof, floors, and permanently attached fixtures and fittings.
//                   </p>

//                   <h4 className="font-medium text-blue-600 mb-2">What's Covered:</h4>
//                   <ul className="space-y-2 mb-4">
//                     {[
//                       'Main building structure (walls, roof, foundation)',
//                       'Built-in fixtures and fittings',
//                       'Attached structures (garage, deck, porch)',
//                       'Plumbing, electrical, and HVAC systems'
//                     ].map((item, idx) => (
//                       <li key={idx} className="flex items-start gap-2">
//                         <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
//                         <span className="text-gray-700">{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <h4 className="font-medium text-blue-600 mb-2">Covered Perils:</h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start gap-2">
//                       <Flame className="h-5 w-5 text-red-500 mt-0.5" />
//                       <span className="text-gray-700">Fire and smoke damage</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <Droplets className="h-5 w-5 text-blue-500 mt-0.5" />
//                       <span className="text-gray-700">Water damage from burst pipes</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
//                       <span className="text-gray-700">Lightning and electrical damage</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <TreePine className="h-5 w-5 text-green-500 mt-0.5" />
//                       <span className="text-gray-700">Storm and wind damage</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <img
//                     src="/placeholder.svg?height=300&width=400"
//                     alt="Structure Insurance"
//                     width={400}
//                     height={300}
//                     className="rounded-lg shadow-md"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'contents' && (
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <div className="flex items-center gap-3 mb-4">
//                     <Sofa className="h-8 w-8 text-blue-600" />
//                     <h3 className="text-2xl font-semibold text-blue-600">Contents Insurance</h3>
//                   </div>
//                   <p className="text-gray-700 mb-6">
//                     Contents insurance protects your personal belongings and movable items within your home against
//                     theft, damage, or loss due to covered perils.
//                   </p>

//                   <h4 className="font-medium text-blue-600 mb-2">What's Covered:</h4>
//                   <ul className="space-y-2 mb-4">
//                     {[
//                       'Furniture and home furnishings',
//                       'Electronics and appliances',
//                       'Clothing and personal items',
//                       'Jewelry and valuables (with limits)',
//                       'Books, artwork, and collectibles'
//                     ].map((item, idx) => (
//                       <li key={idx} className="flex items-start gap-2">
//                         <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
//                         <span className="text-gray-700">{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <h4 className="font-medium text-blue-600 mb-2">Coverage Options:</h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
//                       <span className="text-gray-700">
//                         <strong>Actual Cash Value:</strong> Replacement cost minus depreciation
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
//                       <span className="text-gray-700">
//                         <strong>Replacement Cost:</strong> Full cost to replace with new items
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <img
//                     src="/placeholder.svg?height=300&width=400"
//                     alt="Contents Insurance"
//                     width={400}
//                     height={300}
//                     className="rounded-lg shadow-md"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'comprehensive' && (
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <div className="flex items-center gap-3 mb-4">
//                     <Shield className="h-8 w-8 text-blue-600" />
//                     <h3 className="text-2xl font-semibold text-blue-600">Comprehensive Home Insurance</h3>
//                   </div>
//                   <p className="text-gray-700 mb-6">
//                     Comprehensive home insurance combines structure and contents coverage with additional protections,
//                     providing complete peace of mind for homeowners.
//                   </p>

//                   <h4 className="font-medium text-blue-600 mb-2">Complete Coverage Includes:</h4>
//                   <ul className="space-y-2 mb-4">
//                     {[
//                       'All structure insurance benefits',
//                       'All contents insurance benefits',
//                       'Personal liability coverage',
//                       'Additional living expenses',
//                       'Medical payments to others'
//                     ].map((item, idx) => (
//                       <li key={idx} className="flex items-start gap-2">
//                         <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
//                         <span className="text-gray-700">{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <h4 className="font-medium text-blue-600 mb-2">Additional Benefits:</h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
//                       <span className="text-gray-700">Temporary accommodation during major repairs</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
//                       <span className="text-gray-700">Coverage for loss of rent (if property is rented)</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <img
//                     src="/placeholder.svg?height=300&width=400"
//                     alt="Comprehensive Home Insurance"
//                     width={400}
//                     height={300}
//                     className="rounded-lg shadow-md"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeInsuranceTypes;

import React, { useState } from 'react';
import {
  Building,
  CheckCircle,
  Flame,
  Droplets,
  Zap,
  TreePine,
  Sofa,
  Shield,
} from 'lucide-react';

const HomeInsuranceTypes = () => {
  const [activeTab, setActiveTab] = useState('structure');

  return (
    <section className="py-12 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-10">
          Types of Home Insurance Coverage
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 mb-10 text-center">
          {[
            { key: 'structure', label: 'Structure Insurance' },
            { key: 'contents', label: 'Contents Insurance' },
            { key: 'comprehensive', label: 'Comprehensive Coverage' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`py-2 px-4 text-sm sm:text-base font-medium border-b-2 sm:border-b-0 sm:border-l-4 sm:text-left transition-colors ${
                activeTab === key
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          {activeTab === 'structure' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">
                    Structure Insurance
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Structure insurance covers the physical building of your home,
                  including the foundation, walls, roof, floors, and permanently
                  attached fixtures and fittings.
                </p>

                <h4 className="font-medium text-blue-600 mb-2">What's Covered:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    'Main building structure (walls, roof, foundation)',
                    'Built-in fixtures and fittings',
                    'Attached structures (garage, deck, porch)',
                    'Plumbing, electrical, and HVAC systems',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-medium text-blue-600 mb-2">Covered Perils:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Flame className="h-5 w-5 text-red-500 mt-0.5" />
                    <span className="text-gray-700">Fire and smoke damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Droplets className="h-5 w-5 text-blue-500 mt-0.5" />
                    <span className="text-gray-700">Water damage from burst pipes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span className="text-gray-700">Lightning and electrical damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TreePine className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Storm and wind damage</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Structure Insurance"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          )}

          {activeTab === 'contents' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Sofa className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">
                    Contents Insurance
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Contents insurance protects your personal belongings and movable
                  items within your home against theft, damage, or loss due to
                  covered perils.
                </p>

                <h4 className="font-medium text-blue-600 mb-2">What's Covered:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    'Furniture and home furnishings',
                    'Electronics and appliances',
                    'Clothing and personal items',
                    'Jewelry and valuables (with limits)',
                    'Books, artwork, and collectibles',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-medium text-blue-600 mb-2">Coverage Options:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Actual Cash Value:</strong> Replacement cost minus
                      depreciation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Replacement Cost:</strong> Full cost to replace with
                      new items
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Contents Insurance"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          )}

          {activeTab === 'comprehensive' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">
                    Comprehensive Home Insurance
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Comprehensive home insurance combines structure and contents
                  coverage with additional protections, providing complete peace
                  of mind for homeowners.
                </p>

                <h4 className="font-medium text-blue-600 mb-2">
                  Complete Coverage Includes:
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    'All structure insurance benefits',
                    'All contents insurance benefits',
                    'Personal liability coverage',
                    'Additional living expenses',
                    'Medical payments to others',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-medium text-blue-600 mb-2">
                  Additional Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">
                      Temporary accommodation during major repairs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">
                      Coverage for loss of rent (if property is rented)
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Comprehensive Home Insurance"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeInsuranceTypes;
