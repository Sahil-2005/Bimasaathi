// // CareersPage.jsx
// import React, { useState } from "react";
// import {
//   CheckCircle,
//   Upload,
//   Users,
//   Briefcase,
//   Star,
//   Clock,
//   Heart,
//   Trophy,
// } from "lucide-react";
// import { FaCheckCircle, FaUpload, FaBriefcase } from "react-icons/fa";

// import { motion } from "framer-motion";

// import Footer from "../components/Footer";

// import teamImg from '../assets/careers/team.png';

// function CareersPage() {

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
// };

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     position: "",
//     resume: null,
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate async submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//     }, 1500);
//   };

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}

//       <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//       <section className="relative bg-blue-600 text-white py-16 md:py-24 overflow-hidden">
//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h1 className="text-3xl md:text-5xl font-bold mb-4">
//                 Join Our Growing Team
//               </h1>
//               <p className="text-lg md:text-xl mb-6">
//                 Be part of a dynamic organization that values innovation,
//                 growth, and excellence. We're looking for talented individuals
//                 who are passionate about making a difference in the insurance
//                 industry.
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
//                   <Users className="h-4 w-4 mr-2" /> Collaborative Culture
//                 </span>
//                 <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
//                   <Star className="h-4 w-4 mr-2" /> Growth Opportunities
//                 </span>
//                 <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
//                   <Heart className="h-4 w-4 mr-2" /> Work-Life Balance
//                 </span>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <img
//                 src={teamImg}
//                 alt="Team Collaboration"
//                 className="rounded-lg shadow-lg w-full max-w-md"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       </motion.div>

//       {/* Why Join Us */}
//       <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-blue-600 mb-4">
//               Why Join Bimasaathi?
//             </h2>
//             <p className="text-gray-700 text-lg">
//               We believe in creating an environment where our team members can
//               thrive professionally and personally. Here's what makes us
//               different:
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 Icon: Trophy,
//                 title: "Professional Growth",
//                 desc: "Continuous learning opportunities, mentorship programs, and clear career advancement paths.",
//               },
//               {
//                 Icon: Users,
//                 title: "Inclusive Culture",
//                 desc: "A diverse and inclusive workplace where every voice is heard and valued.",
//               },
//               {
//                 Icon: Clock,
//                 title: "Work-Life Balance",
//                 desc: "Flexible work arrangements and a culture that respects your time.",
//               },
//             ].map(({ Icon, title, desc }, i) => (
//               <div key={i} className="border p-6 rounded shadow-sm bg-white">
//                 <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
//                   <Icon className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-blue-600 text-center mb-2">
//                   {title}
//                 </h3>
//                 <p className="text-gray-700 text-center">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       </motion.div>

//       <>
//       <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>

//         <section className="py-16 relative overflow-hidden min-h-screen flex items-center">
//           <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70"></div>
//           <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70"></div>

//           <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">
//             <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10 space-y-10">
//               <div className="text-center mb-8">
//                 <h2 className="text-4xl font-extrabold text-blue-600 mb-3 tracking-wide">
//                   Apply Now
//                 </h2>
//                 <p className="text-gray-700 text-lg">
//                   Take the first step towards an exciting career with us. Fill
//                   out the form below and we'll get back to you soon.
//                 </p>
//               </div>

//               {isSubmitted ? (
//                 <div className="text-center space-y-6">
//                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//                     <FaCheckCircle className="h-12 w-12 text-green-600 animate-pulse" />
//                   </div>
//                   <h3 className="text-2xl font-semibold text-gray-800">
//                     Application Submitted!
//                   </h3>
//                   <p className="text-gray-600 max-w-md mx-auto">
//                     Thank you for your interest in joining our team. We've
//                     received your application and will review it shortly.
//                   </p>
//                   <button
//                     onClick={() => setIsSubmitted(false)}
//                     className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white px-8 py-3 rounded-lg font-medium shadow-md"
//                   >
//                     Submit Another Application
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-8">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-gray-700 mb-2 font-semibold">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your full name"
//                         className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-2 font-semibold">
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                         className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 mb-2 font-semibold">
//                       Contact Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="contact"
//                       required
//                       value={formData.contact}
//                       onChange={handleChange}
//                       placeholder="Enter your contact number"
//                       className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 mb-3 font-semibold">
//                       Position
//                     </label>
//                     <div className="space-y-3">
//                       <label className="flex items-center space-x-3 cursor-pointer text-gray-700">
//                         <input
//                           type="radio"
//                           name="position"
//                           value="svm"
//                           checked={formData.position === "svm"}
//                           onChange={handleChange}
//                           className="form-radio text-blue-600"
//                         />
//                         <span className="select-none">SVM Position</span>
//                       </label>
//                       <label className="flex items-center space-x-3 cursor-pointer text-gray-700">
//                         <input
//                           type="radio"
//                           name="position"
//                           value="relationship-manager"
//                           checked={formData.position === "relationship-manager"}
//                           onChange={handleChange}
//                           className="form-radio text-blue-600"
//                         />
//                         <span className="select-none">
//                           Relationship Manager
//                         </span>
//                       </label>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 mb-3 font-semibold">
//                       Resume
//                     </label>
//                     <label
//                       htmlFor="resume-upload"
//                       className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors duration-300 flex flex-col items-center justify-center"
//                     >
//                       <FaUpload className="h-12 w-12 text-blue-500 mb-3" />
//                       <p className="text-blue-600 font-medium text-lg">
//                         {formData.resume?.[0]?.name ||
//                           "Upload your resume (PDF, DOC, DOCX)"}
//                       </p>
//                       <p className="text-gray-500 text-sm mt-1">
//                         Click to browse files
//                       </p>
//                     </label>
//                     <input
//                       id="resume-upload"
//                       type="file"
//                       name="resume"
//                       accept=".pdf,.doc,.docx"
//                       onChange={handleChange}
//                       className="hidden"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white py-4 rounded-lg font-semibold shadow-lg"
//                   >
//                     {isSubmitting ? "Submitting..." : "Submit Application"}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </section>
//           </motion.div>

//         {/* Open Positions */}
//         <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//         <section className="py-16 bg-gray-50">
//           <div className="container mx-auto px-4 md:px-6">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-blue-600 mb-4">
//                 Current Openings
//               </h2>
//               <p className="text-gray-700 max-w-3xl mx-auto">
//                 We're always looking for talented individuals to join our team.
//                 Here are some of our current openings:
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//               {/* SVM */}
//               <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600 hover:shadow-md transition-all">
//                 <div className="flex items-start gap-4">
//                   <div className="rounded-full bg-blue-100 p-3">
//                     <FaBriefcase className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       SVM Position
//                     </h3>
//                     <p className="text-gray-600 mb-3">
//                       Lead sales and marketing initiatives, develop client
//                       relationships, and drive business growth.
//                     </p>
//                     <div className="flex flex-wrap gap-2 text-xs">
//                       <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
//                         Full-time
//                       </span>
//                       <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
//                         3+ years experience
//                       </span>
//                       <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
//                         Multiple locations
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Relationship Manager */}
//               <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600 hover:shadow-md transition-all">
//                 <div className="flex items-start gap-4">
//                   <div className="rounded-full bg-blue-100 p-3">
//                     <FaBriefcase className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       Relationship Manager
//                     </h3>
//                     <p className="text-gray-600 mb-3">
//                       Manage client relationships, provide exceptional service,
//                       and identify upselling opportunities.
//                     </p>
//                     <div className="flex flex-wrap gap-2 text-xs">
//                       <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
//                         Full-time
//                       </span>
//                       <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
//                         2+ years experience
//                       </span>
//                       <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
//                         Remote options
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//               </motion.div>

//       </>
//     </div>
//   );
// }

// export default CareersPage;



import React, { useState } from "react";
import { Users, Star, Heart, Trophy, Clock } from "lucide-react";
import { FaCheckCircle, FaUpload, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

import teamImg from "../assets/careers/team.png";


import ApplicationForm from "../components/ApplicationForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    position: "",
    resume: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change including file input properly
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({
        ...prev,
        resume: files && files[0] ? files[0] : null,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error for that field on change
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Basic validation
  const validate = () => {
    let errors = {};

    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (!EMAIL_REGEX.test(formData.email))
      errors.email = "Please enter a valid email.";
    if (!formData.contact.trim())
      errors.contact = "Contact number is required.";
    else if (!/^\d+$/.test(formData.contact))
      errors.contact = "Contact number should contain only digits.";
    if (!formData.position) errors.position = "Please select a position.";
    if (!formData.resume) errors.resume = "Please upload your resume.";
    else if (
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(formData.resume.type)
    )
      errors.resume = "Allowed file types: PDF, DOC, DOCX.";
    else if (formData.resume.size > MAX_FILE_SIZE)
      errors.resume = "File size must be less than 5MB.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form on submission success if needed:
      // setFormData({ name: "", email: "", contact: "", position: "", resume: null });
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="relative bg-blue-600 text-white py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Join Our Growing Team
                </h1>
                <p className="text-lg md:text-xl mb-6">
                  Be part of a dynamic organization that values innovation,
                  growth, and excellence. We're looking for talented individuals
                  who are passionate about making a difference in the insurance
                  industry.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Users className="h-4 w-4 mr-2" /> Collaborative Culture
                  </span>
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-2" /> Growth Opportunities
                  </span>
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Heart className="h-4 w-4 mr-2" /> Work-Life Balance
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={teamImg}
                  alt="Team Collaboration"
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Why Join Us */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                Why Join Bimasaathi?
              </h2>
              <p className="text-gray-700 text-lg">
                We believe in creating an environment where our team members can
                thrive professionally and personally. Here's what makes us
                different:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  Icon: Trophy,
                  title: "Professional Growth",
                  desc: "Continuous learning opportunities, mentorship programs, and clear career advancement paths.",
                },
                {
                  Icon: Users,
                  title: "Inclusive Culture",
                  desc: "A diverse and inclusive workplace where every voice is heard and valued.",
                },
                {
                  Icon: Clock,
                  title: "Work-Life Balance",
                  desc: "Flexible work arrangements and a culture that respects your time.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <div key={i} className="border p-6 rounded shadow-sm bg-white">
                  <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600 text-center mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-center">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

      {/* Application Form */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="py-16 relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10 space-y-10">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-3 tracking-wide">
                  Apply Now
                </h2>
                <p className="text-gray-700 text-lg">
                  Take the first step towards an exciting career with us. Fill
                  out the form below and we'll get back to you soon.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <FaCheckCircle className="text-green-600 text-6xl" />
                  </div>
                  <h3 className="text-3xl font-semibold text-green-600">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 max-w-xl mx-auto">
                    Thank you for applying. We appreciate your interest and will
                    review your application shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        contact: "",
                        position: "",
                        resume: null,
                      });
                      setFormErrors({});
                    }}
                    className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white px-8 py-3 rounded-lg font-medium shadow-md"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <ApplicationForm/>
              )}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default CareersPage;
