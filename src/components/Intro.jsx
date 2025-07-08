// import React from 'react'
// import Insure from '../assets/insure.jpg';


// const Intro = () => {
//   return (
//     <section className="bg-white py-28">
//         <div className="w-full px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-left">
//             <h2 className="text-5xl font-extrabold text-blue-700 mb-10 leading-tight">
//               Why Choose <span className="text-black">V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP?</span>
//             </h2>

//             <p className="text-gray-800 text-2xl mb-10 leading-relaxed max-w-3xl">
//               At <strong>V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP</strong>, we’re committed to
//               transforming the way you choose insurance. By combining smart
//               technology and human clarity, we help you make confident,
//               well-informed decisions without the stress.
//             </p>

//             <ul className="space-y-6 text-gray-800 text-xl font-medium">
//               <li className="flex items-start">
//                 <span className="text-blue-600 text-3xl mr-4">✔</span>
//                 Compare real-time quotes from India's top insurers instantly.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-600 text-3xl mr-4">✔</span>
//                 Receive unbiased suggestions tailored to your unique needs.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-600 text-3xl mr-4">✔</span>
//                 No jargon, just clear and honest insurance insights.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-600 text-3xl mr-4">✔</span>
//                 24/7 human-powered support and guidance you can rely on.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-600 text-3xl mr-4">✔</span>
//                 Designed to save your time, money, and stress — every time.
//               </li>
//             </ul>

//             <p className="mt-10 text-gray-700 text-xl max-w-2xl">
//               Say goodbye to complicated forms and confusing terms. With{" "}
//               <strong>V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP</strong>, you’re always one step ahead
//               — informed, empowered, and insured.
//             </p>
//           </div>

//           {/* Right Image */}
//           <div className="w-full flex justify-center">
//             <img
//               src={Insure}
//               alt="Insurance Carry Info - Visual"
//               className="w-full h-auto max-w-xl rounded-3xl shadow-2xl object-cover"
//             />
//           </div>
//         </div>
//       </section>
//   )
// }

// export default Intro


import React from 'react'
import Insure from '../assets/insure.jpg';

const Intro = () => {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 sm:mb-10 leading-tight">
            Why Choose <span className="text-black">V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP?</span>
          </h2>

          <p className="text-gray-800 text-base sm:text-lg md:text-2xl mb-6 sm:mb-10 leading-relaxed max-w-full sm:max-w-3xl">
            At <strong>V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP</strong>, we’re committed to
            transforming the way you choose insurance. By combining smart
            technology and human clarity, we help you make confident,
            well-informed decisions without the stress.
          </p>

          <ul className="space-y-4 sm:space-y-6 text-gray-800 text-base sm:text-xl font-medium max-w-full sm:max-w-lg">
            <li className="flex items-start">
              <span className="text-blue-600 text-2xl sm:text-3xl mr-3 sm:mr-4 leading-none">✔</span>
              Compare real-time quotes from India's top insurers instantly.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-2xl sm:text-3xl mr-3 sm:mr-4 leading-none">✔</span>
              Receive unbiased suggestions tailored to your unique needs.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-2xl sm:text-3xl mr-3 sm:mr-4 leading-none">✔</span>
              No jargon, just clear and honest insurance insights.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-2xl sm:text-3xl mr-3 sm:mr-4 leading-none">✔</span>
              24/7 human-powered support and guidance you can rely on.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-2xl sm:text-3xl mr-3 sm:mr-4 leading-none">✔</span>
              Designed to save your time, money, and stress — every time.
            </li>
          </ul>

          <p className="mt-8 sm:mt-10 text-gray-700 text-base sm:text-xl max-w-full sm:max-w-2xl">
            Say goodbye to complicated forms and confusing terms. With{" "}
            <strong>V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP</strong>, you’re always one step ahead
            — informed, empowered, and insured.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center mt-10 lg:mt-0">
          <img
            src={Insure}
            alt="Insurance Carry Info - Visual"
            className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Intro;
