
// import React from "react";
// import {
//   CheckCircle,
//   Users,
//   Shield,
//   Lightbulb,
//   Target,
//   Award,
//   TrendingUp,
//   Heart,
// } from "lucide-react";


// import aboutMain from '../assets/team/aboutMain.png';

// import LeadershipSection from "../components/LeadershipSection";

// import Footer from "../components/Footer";

// import bharaImg from '../assets/team/bharat.jpg';
// import lahuImg from '../assets/team/lahu.jpg';

// import girishImg from '../assets/team/girish.jpg';

// export default function AboutPage() {
//   return (
//     <div className="bg-white">




//     {/* Hero Section */}
//           <section className="bg-blue-700 text-white py-16 md:py-24">
//             <div className="container mx-auto px-4 md:px-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <h1 className="text-3xl md:text-5xl font-bold mb-4">About Bimasaathi</h1>
//                   <p className="text-lg md:text-xl mb-6">
//                     We're on a mission to transform the insurance experience in India through transparency, technology, and trust.
//                   </p>
//                   <div className="flex flex-wrap gap-3">
//                     <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
//                       Established in 2024
//                     </span>
//                     <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
//                       1000+ Satisfied Customers 
//                     </span>
//                     <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
//                       Pan India Presence
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex justify-center">
//                   <img
//                     // src={motorMain}
//                     src={aboutMain}
//                     alt="Motor Insurance Protection"
//                     width={500}
//                     height={400}
//                     className="rounded-lg shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//       </section>




//       {/* Why Choose Us Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-blue-600 mb-4">
//               Why Choose Bimasaathi?
//             </h2>
//             <p className="text-gray-700 text-lg">
//               At Bimasaathi, we're committed to transforming the way you
//               choose insurance. By combining smart technology and human clarity,
//               we help you make confident, well-informed decisions without the
//               stress.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {[
//               {
//                 title: "Real-Time Comparison",
//                 desc: "Compare real-time quotes from India's top insurers instantly.",
//               },
//               {
//                 title: "Personalized Recommendations",
//                 desc: "Receive unbiased suggestions tailored to your unique needs.",
//               },
//               {
//                 title: "Clear Communication",
//                 desc: "No jargon, just clear and honest insurance insights.",
//               },
//               {
//                 title: "24/7 Support",
//                 desc: "24/7 human-powered support and guidance you can rely on.",
//               },
//               {
//                 title: "Efficiency",
//                 desc: "Designed to save your time, money, and stress — every time.",
//               },
//               {
//                 title: "Simplified Process",
//                 desc: "Say goodbye to complicated forms and confusing terms.",
//               },
//             ].map(({ title, desc }, idx) => (
//               <div key={idx} className="flex items-start gap-4">
//                 <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
//                   <p className="text-gray-700">{desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-10">
//             <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//               With Bimasaathi, you're always one step ahead — informed,
//               empowered, and insured.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-blue-600 mb-6">
//                 Our Story
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 Founded in 2024, Bimasaathi was born from a simple
//                 observation: insurance in India was unnecessarily complicated,
//                 confusing, and time-consuming. Our founders experienced
//                 firsthand the frustration of navigating the complex insurance
//                 landscape and decided there had to be a better way.
//               </p>
//               <p className="text-gray-700 mb-4">
//                 What began as a small startup with just 5 team members has now
//                 grown into one of India's most trusted insurance platforms,
//                 serving over hundreds customers across the country. Our journey
//                 has been driven by a singular focus: making insurance
//                 accessible, understandable, and hassle-free for every Indian.
//               </p>
//               <p className="text-gray-700">
//                 Today, we partner with over 30 leading insurance providers to
//                 offer comprehensive coverage options across motor, health, life,
//                 and property insurance. Our technology-driven approach, combined
//                 with our commitment to customer education, has revolutionized
//                 how people think about and purchase insurance in India.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <img
//                   src="/placeholder.svg?height=250&width=250"
//                   alt="Company History"
//                   width={250}
//                   height={250}
//                   className="rounded-lg shadow-md mb-4"
//                 />
//                 <img
//                   src="/placeholder.svg?height=250&width=250"
//                   alt="Company Growth"
//                   width={250}
//                   height={250}
//                   className="rounded-lg shadow-md"
//                 />
//               </div>
//               <div className="mt-6">
//                 <img
//                   src="/placeholder.svg?height=250&width=250"
//                   alt="Company Office"
//                   width={250}
//                   height={250}
//                   className="rounded-lg shadow-md mb-4"
//                 />
//                 <img
//                   src="/placeholder.svg?height=250&width=250"
//                   alt="Team Collaboration"
//                   width={250}
//                   height={250}
//                   className="rounded-lg shadow-md"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission and Values */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-blue-600 mb-4">
//               Our Mission & Values
//             </h2>
//             <p className="text-gray-700 text-lg">
//               We're guided by a clear mission and strong core values that shape
//               everything we do.
//             </p>
//           </div>

//           <div className="mb-16">
//             <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
//               <div className="flex items-center gap-4 mb-4">
//                 <Target className="h-10 w-10 text-blue-600" />
//                 <h3 className="text-2xl font-semibold text-blue-600">
//                   Our Mission
//                 </h3>
//               </div>
//               <p className="text-gray-700 text-lg">
//                 To empower every Indian with the knowledge and tools to make
//                 informed insurance decisions, ensuring financial security and
//                 peace of mind for themselves and their loved ones.
//               </p>
//             </div>
//           </div>

//           <h3 className="text-2xl font-semibold text-blue-600 text-center mb-8">
//             Our Core Values
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 Icon: Lightbulb,
//                 title: "Transparency",
//                 desc: "We believe in complete honesty and clarity in all our communications. No hidden fees, no fine print surprises.",
//               },
//               {
//                 Icon: Heart,
//                 title: "Customer First",
//                 desc: "Every decision we make is guided by what's best for our customers. Their needs and satisfaction are our top priority.",
//               },
//               {
//                 Icon: TrendingUp,
//                 title: "Innovation",
//                 desc: "We continuously strive to improve our technology and processes to provide the best possible insurance experience.",
//               },
//               {
//                 Icon: Shield,
//                 title: "Trust",
//                 desc: "We build lasting relationships based on trust, delivering on our promises and protecting what matters most to our customers.",
//               },
//               {
//                 Icon: Award,
//                 title: "Excellence",
//                 desc: "We pursue excellence in everything we do, from customer service to product development and partner relationships.",
//               },
//               {
//                 Icon: Users,
//                 title: "Inclusivity",
//                 desc: "We're committed to making insurance accessible to all Indians, regardless of location, language, or technical expertise.",
//               },
//             ].map(({ Icon, title, desc }, idx) => (
//               <div
//                 key={idx}
//                 className="border border-blue-100 rounded-xl hover:shadow-md transition-shadow p-6"
//               >
//                 <div className="pt-6">
//                   <div className="flex justify-center mb-4">
//                     <Icon className="h-12 w-12 text-blue-600" />
//                   </div>
//                   <h4 className="text-xl font-semibold text-center text-gray-800 mb-3">
//                     {title}
//                   </h4>
//                   <p className="text-gray-700 text-center">{desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Team Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold text-blue-600 text-center mb-16">
//             Our Team
//           </h2>

//           {/* Founders */}
//           <div className="mb-16">
//             <h3 className="text-2xl font-semibold text-blue-600 text-center mb-10">
//               Founders
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="mb-4 mx-auto relative">
//                   <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
//                     <img
//                       src={lahuImg}
//                       alt="Lahu ANgarkhe"
//                       width={200}
//                       height={200}
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
//                     Founder & CEO
//                   </div>
//                 </div>
//                 <h4 className="text-xl font-semibold text-gray-800 mb-1">
//                   Lahu Angarkhe
//                 </h4>
//                 <p className="text-gray-600 mb-3">Founder & CEO</p>
//                 <p className="text-gray-700 max-w-xs mx-auto">
//                   {/* Former insurance executive with 15+ years of experience.
//                   Passionate about making insurance accessible to all. */}
//                 </p>
//               </div>


//               <div className="text-center">
//                 <div className="mb-4 mx-auto relative">
//                   <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
//                     <img
//                       src={bharaImg}
//                       alt="Rupesh"
//                       width={200}
//                       height={200}
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
//                     Cluster Head
//                   </div>
//                 </div>
//                 <h4 className="text-xl font-semibold text-gray-800 mb-1">
//                   Bharat Lakhara
//                 </h4>
//                 <p className="text-gray-600 mb-3">Cluster Head</p>
//                 <p className="text-gray-700 max-w-xs mx-auto">
                 
//                 </p>
//               </div>

//               <div className="text-center">
//                 <div className="mb-4 mx-auto relative">
//                   <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
//                     <img
//                       src={girishImg}
//                       alt="Rupesh"
//                       width={200}
//                       height={200}
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
//                     Vice President- Sales Head
//                   </div>
//                 </div>
//                 <h4 className="text-xl font-semibold text-gray-800 mb-1">
//                   Girish Tripati
//                 </h4>
//                 <p className="text-gray-600 mb-3">Vice President- Sales Head</p>
//                 <p className="text-gray-700 max-w-xs mx-auto">
//                   {/* Tech visionary with expertise in AI and machine learning.
//                   Architect of our comparison platform. */}
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//               <LeadershipSection/>
//       </section>

//     </div>
//   );
// }



import React from "react";
import {
  CheckCircle,
  Users,
  Shield,
  Lightbulb,
  Target,
  Award,
  TrendingUp,
  Heart,
} from "lucide-react";

import aboutMain from "../assets/team/aboutMain.png";
import LeadershipSection from "../components/LeadershipSection";
import Footer from "../components/Footer";

import bharaImg from "../assets/team/bharat.jpg";
import lahuImg from "../assets/team/lahu.jpg";
import girishImg from "../assets/team/girish.jpg";

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                About Bimasaathi
              </h1>
              <p className="text-lg md:text-xl mb-6">
                We're on a mission to transform the insurance experience in India through transparency, technology, and trust.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Established in 2024
                </span>
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  1000+ Satisfied Customers
                </span>
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Pan India Presence
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={aboutMain}
                alt="About us"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Why Choose Bimasaathi?
            </h2>
            <p className="text-gray-700 text-lg">
              At Bimasaathi, we're committed to transforming the way you
              choose insurance. By combining smart technology and human clarity,
              we help you make confident, well-informed decisions without the
              stress.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                title: "Real-Time Comparison",
                desc: "Compare real-time quotes from India's top insurers instantly.",
              },
              {
                title: "Personalized Recommendations",
                desc: "Receive unbiased suggestions tailored to your unique needs.",
              },
              {
                title: "Clear Communication",
                desc: "No jargon, just clear and honest insurance insights.",
              },
              {
                title: "24/7 Support",
                desc: "24/7 human-powered support and guidance you can rely on.",
              },
              {
                title: "Efficiency",
                desc: "Designed to save your time, money, and stress — every time.",
              },
              {
                title: "Simplified Process",
                desc: "Say goodbye to complicated forms and confusing terms.",
              },
            ].map(({ title, desc }, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With Bimasaathi, you're always one step ahead — informed,
              empowered, and insured.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2024, Bimasaathi was born from a simple observation: insurance in India was unnecessarily complicated, confusing, and time-consuming.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small startup has now grown into one of India's most trusted insurance platforms. Our journey is driven by a singular focus: making insurance accessible and hassle-free for every Indian.
              </p>
              <p className="text-gray-700">
                Today, we partner with over 30 leading insurance providers to offer options across motor, health, life, and property insurance — combining technology with transparency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((_, idx) => (
                <img
                  key={idx}
                  src="/placeholder.svg?height=250&width=250"
                  alt={`Story ${idx + 1}`}
                  className="rounded-lg shadow-md w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-700 text-lg">
              We're guided by a clear mission and strong core values that shape
              everything we do.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-16 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Target className="h-10 w-10 text-blue-600" />
              <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg">
              To empower every Indian with the knowledge and tools to make
              informed insurance decisions for financial security and peace of mind.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-600 text-center mb-8">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Lightbulb, title: "Transparency", desc: "Honest communication. No hidden fees or fine print." },
              { Icon: Heart, title: "Customer First", desc: "Every decision is customer-focused. Their needs come first." },
              { Icon: TrendingUp, title: "Innovation", desc: "We constantly improve with better tech and processes." },
              { Icon: Shield, title: "Trust", desc: "We build trust through reliability and delivery." },
              { Icon: Award, title: "Excellence", desc: "We maintain high standards in every aspect of our work." },
              { Icon: Users, title: "Inclusivity", desc: "We make insurance accessible to every Indian." },
            ].map(({ Icon, title, desc }, idx) => (
              <div key={idx} className="border border-blue-100 rounded-xl hover:shadow-md transition-shadow p-6 text-center">
                <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-16">Our Team</h2>

          <h3 className="text-2xl font-semibold text-blue-600 text-center mb-10">Founders</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { img: lahuImg, name: "Lahu Angarkhe", title: "Founder & CEO" },
              { img: girishImg, name: "Girish Tripati", title: "Vice President" },
              { img: bharaImg, name: "Bharat Lakhara", title: "State Head" },
            ].map(({ img, name, title }, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 mx-auto relative w-48 h-48">
                  <img src={img} alt={name} className="w-48 h-48 rounded-full object-cover mx-auto" />
                  {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    {title}
                  </div> */}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">{name}</h4>
                <p className="text-gray-600">{title}</p>
              </div>
            ))}
          </div>
        </div>

        <LeadershipSection />
      </section>

    </div>
  );
}
