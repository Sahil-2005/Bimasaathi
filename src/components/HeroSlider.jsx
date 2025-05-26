// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Autoplay } from 'swiper/modules';
// import { motion } from 'framer-motion';
// import { ShieldCheck, Star, Clock } from 'lucide-react';

// export default function HeroSlider() {

//   const slides = [
//   {
//     image:
//       "https://plus.unsplash.com/premium_photo-1723507291530-47c2f7aa9197?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     badge: "Trusted by 10K+ Families",
//     title: "Secure Your Family’s Future",
//     subtitle: "Find the best family insurance plans in minutes.",
//     button: "Explore Plans",
//   },
//   {
//     image:
//       "https://plus.unsplash.com/premium_photo-1675808577336-fe04a814393e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     badge: "Healthcare You Can Count On",
//     title: "Health Insurance",
//     subtitle: "Protect your health with the right coverage.",
//     button: "Get Started",
//   },
//   {
//     image:
//       "https://plus.unsplash.com/premium_photo-1726768848622-398d89d16d1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     badge: "Drive with Peace of Mind",
//     title: "Drive Worry-Free",
//     subtitle: "Compare top-rated car insurance policies easily.",
//     button: "Compare Now",
//   },
//   // {
//   //   image:
//   //     "https://images.unsplash.com/photo-1588776814546-ec6f89c6ff2d?auto=format&fit=crop&w=2070&q=80",
//   //   badge: "Secure Your Life",
//   //   title: "Life Insurance",
//   //   subtitle: "Long-term financial protection for your loved ones.",
//   //   button: "View Plans",
//   // },
//   {
//     image:
//       "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     badge: "Explore Confidently",
//     title: "Travel Insurance",
//     subtitle: "Stay covered wherever you go around the world.",
//     button: "Insure Your Trip",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1648564733383-8b1ad7fe6bed?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     badge: "Protect Your Property",
//     title: "Fire Insurance",
//     subtitle: "Coverage against fire damage and disaster losses.",
//     button: "Check Fire Plans",
//   },
//   {
//     image:
//       "https://media.istockphoto.com/id/1419513736/photo/aerial-side-view-of-cargo-ship-carrying-container-and-running-for-export-goods-from-cargo.webp?a=1&b=1&s=612x612&w=0&k=20&c=E4_3fAHxg0tDOdyD3BzRUbgnDgbCdVZAJ5NuKqamQqc=",
//     badge: "Safeguard Your Shipments",
//     title: "Marine Insurance",
//     subtitle: "Coverage for cargo, ships, and freight liabilities.",
//     button: "Explore Marine Plans",
//   },
//   {
//     image:
//       "https://assets.futuregenerali.in/fg/commercial-insurance/property-insurance/burglary-insurance-1440x500.webp",
//     badge: "Prevent Losses",
//     title: "Burglary Insurance",
//     subtitle: "Secure your valuables against theft or intrusion.",
//     button: "Protect Now",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2070&q=80",
//     badge: "Shield Your Property",
//     title: "Non-Motor",
//     subtitle: "Protect buildings from risks like floods, fire, and more.",
//     button: "View Building Cover",
//   },
// ];


//   return (
//     // <section className="w-full h-[89vh] relative">
//     //   <Swiper
//     //     modules={[Autoplay]}
//     //     autoplay={{ delay: 4000 }}
//     //     loop={true}
//     //     className="h-full"
//     //   >
//     //     {slides.map((slide, index) => (
//     //       <SwiperSlide key={index}>
//     //         <div className="relative w-full h-full">
//     //           {/* Background Image */}
//     //           <img
//     //             src={slide.image}
//     //             alt={slide.title}
//     //             className="w-full h-full object-cover"
//     //           />

//     //           {/* Dark Overlay */}
//     //           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

//     //           {/* Slide Content */}
//     //           <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20 z-20">
//     //             <motion.div
//     //               initial={{ opacity: 0, y: 40 }}
//     //               animate={{ opacity: 1, y: 0 }}
//     //               transition={{ duration: 0.8 }}
//     //               className="text-white max-w-xl space-y-6"
//     //             >
//     //               {/* Badge */}
//     //               <span className="inline-block bg-blue-600 text-white px-3 py-1 text-xs uppercase rounded-full shadow-md">
//     //                 {slide.badge}
//     //               </span>

//     //               {/* Main Title */}
//     //               <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
//     //                 {slide.title}
//     //               </h2>

//     //               {/* Subtitle */}
//     //               <p className="text-lg md:text-xl text-gray-200">
//     //                 {slide.subtitle}
//     //               </p>

//     //               {/* CTA Button */}
//     //               <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-full shadow-lg text-sm md:text-base">
//     //                 {slide.button}
//     //               </button>

//     //               {/* Mini Features */}
//     //               <div className="flex gap-6 pt-4 text-sm text-gray-200">
//     //                 <div className="flex items-center gap-2">
//     //                   <ShieldCheck size={18} /> Secure & Reliable
//     //                 </div>
//     //                 <div className="flex items-center gap-2">
//     //                   <Star size={18} /> Top Rated Policies
//     //                 </div>
//     //                 <div className="flex items-center gap-2">
//     //                   <Clock size={18} /> Instant Quote
//     //                 </div>
//     //               </div>
//     //             </motion.div>
//     //           </div>
//     //         </div>
//     //       </SwiperSlide>
//     //     ))}
//     //   </Swiper>
//     // </section>

//     <section className="w-full h-[89vh] relative">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 4000 }}
//         loop={true}
//         className="h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               {/* Background Image */}
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

//               {/* Slide Content */}
//               <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-20 z-20">
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                   className="text-white max-w-xl space-y-4 sm:space-y-6"
//                 >
//                   {/* Badge */}
//                   <span className="inline-block bg-blue-600 text-white px-3 py-1 text-[10px] sm:text-xs uppercase rounded-full shadow-md">
//                     {slide.badge}
//                   </span>

//                   {/* Main Title */}
//                   <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
//                     {slide.title}
//                   </h2>

//                   {/* Subtitle */}
//                   <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-md">
//                     {slide.subtitle}
//                   </p>

//                   {/* CTA Button */}
//                   <button className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-full shadow-lg text-xs sm:text-sm md:text-base">
//                     {slide.button}
//                   </button>

//                   {/* Mini Features - stack vertically on mobile */}
//                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-3 text-xs sm:text-sm text-gray-200 max-w-md">
//                     <div className="flex items-center gap-2">
//                       <ShieldCheck size={16} /> Secure & Reliable
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Star size={16} /> Top Rated Policies
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Clock size={16} /> Instant Quote
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeroSlider() {
  const navigate = useNavigate();

  const slides = [
    {
      image: "https://plus.unsplash.com/premium_photo-1723507291530-47c2f7aa9197?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Trusted by 10K+ Families",
      title: "Secure Your Family’s Future",
      subtitle: "Find the best family insurance plans in minutes.",
      button: "Explore Plans",
      route: "/insurance/health-life-insurance",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1675808577336-fe04a814393e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Healthcare You Can Count On",
      title: "Health Insurance",
      subtitle: "Protect your health with the right coverage.",
      button: "Get Started",
      route: "/insurance/health-life-insurance",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1726768848622-398d89d16d1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Drive with Peace of Mind",
      title: "Drive Worry-Free",
      subtitle: "Compare top-rated car insurance policies easily.",
      button: "Compare Now",
      route: "/insurance/motor-insurance",
    },
    {
      image: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Explore Confidently",
      title: "Travel Insurance",
      subtitle: "Stay covered wherever you go around the world.",
      button: "Insure Your Trip",
      route: "/insurance/travel-insurance",
    },
    {
      image: "https://images.unsplash.com/photo-1648564733383-8b1ad7fe6bed?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Protect Your Property",
      title: "Fire Insurance",
      subtitle: "Coverage against fire damage and disaster losses.",
      button: "Check Fire Plans",
      route: "/insurance/non-motor-insurance",
    },
    {
      image: "https://media.istockphoto.com/id/1419513736/photo/aerial-side-view-of-cargo-ship-carrying-container-and-running-for-export-goods-from-cargo.webp?a=1&b=1&s=612x612&w=0&k=20&c=E4_3fAHxg0tDOdyD3BzRUbgnDgbCdVZAJ5NuKqamQqc=",
      badge: "Safeguard Your Shipments",
      title: "Marine Insurance",
      subtitle: "Coverage for cargo, ships, and freight liabilities.",
      button: "Explore Marine Plans",
      route: "/insurance/non-motor-insurance",
    },
    {
      image: "https://assets.futuregenerali.in/fg/commercial-insurance/property-insurance/burglary-insurance-1440x500.webp",
      badge: "Prevent Losses",
      title: "Burglary Insurance",
      subtitle: "Secure your valuables against theft or intrusion.",
      button: "Protect Now",
      route: "/insurance/non-motor-insurance",
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2070&q=80",
      badge: "Shield Your Property",
      title: "Non-Motor",
      subtitle: "Protect buildings from risks like floods, fire, and more.",
      button: "View Building Cover",
      route: "/insurance/non-motor-insurance",
    },
  ];

  return (
    <section className="w-full h-[89vh] relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-20 z-20">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white max-w-xl space-y-4 sm:space-y-6"
                >
                  {/* Badge */}
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 text-[10px] sm:text-xs uppercase rounded-full shadow-md">
                    {slide.badge}
                  </span>

                  {/* Main Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-md">
                    {slide.subtitle}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={() => navigate(slide.route)}
                    className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-full shadow-lg text-xs sm:text-sm md:text-base"
                  >
                    {slide.button}
                  </button>

                  {/* Mini Features */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-3 text-xs sm:text-sm text-gray-200 max-w-md">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} /> Secure & Reliable
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} /> Top Rated Policies
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} /> Instant Quote
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
