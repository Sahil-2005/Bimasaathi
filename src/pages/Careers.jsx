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
                Why Join V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP?
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

                <ApplicationForm/>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default CareersPage;
