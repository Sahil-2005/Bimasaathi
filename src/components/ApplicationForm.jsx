// // src/components/ApplicationForm.jsx
// import React, { useState } from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// const ApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     position: "",
//     resume: null,
//   });

//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "resume") {
//       setFormData((prev) => ({
//         ...prev,
//         resume: files && files[0] ? files[0] : null,
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//     setFormErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validate = () => {
//     let errors = {};

//     if (!formData.name.trim()) errors.name = "Name is required.";
//     if (!formData.email.trim()) errors.email = "Email is required.";
//     else if (!EMAIL_REGEX.test(formData.email))
//       errors.email = "Please enter a valid email.";
//     if (!formData.contact.trim())
//       errors.contact = "Contact number is required.";
//     else if (!/^\d+$/.test(formData.contact))
//       errors.contact = "Contact number should contain only digits.";
//     if (!formData.position) errors.position = "Please select a position.";
//     if (!formData.resume) errors.resume = "Please upload your resume.";
//     else if (
//       ![
//         "application/pdf",
//         "application/msword",
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       ].includes(formData.resume.type)
//     )
//       errors.resume = "Allowed file types: PDF, DOC, DOCX.";
//     else if (formData.resume.size > MAX_FILE_SIZE)
//       errors.resume = "File size must be less than 5MB.";

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setIsSubmitting(true);

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//     }, 1500);
//   };

//   if (isSubmitted) {
//     return (
//       <div className="text-center space-y-6">
//         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//           <FaCheckCircle className="text-green-600 text-6xl" />
//         </div>
//         <h3 className="text-3xl font-semibold text-green-600">
//           Application Submitted Successfully!
//         </h3>
//         <p className="text-gray-600 max-w-xl mx-auto">
//           Thank you for applying. We appreciate your interest and will review
//           your application shortly.
//         </p>
//         <button
//           onClick={() => {
//             setIsSubmitted(false);
//             setFormData({
//               name: "",
//               email: "",
//               contact: "",
//               position: "",
//               resume: null,
//             });
//             setFormErrors({});
//           }}
//           className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white px-8 py-3 rounded-lg font-medium shadow-md"
//         >
//           Submit Another Application
//         </button>
//       </div>
//     );
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="grid grid-cols-1 gap-6"
//       noValidate
//       action="https://formsubmit.co/rahultag161@gmail.com"
//       method="POST"
//       encType="multipart/form-data"
//     >
//       {/* Position Selection */}
//       <div>
//         <p className="block text-gray-700 font-semibold mb-2">
//           Position Applying For
//         </p>
//         <div className="flex gap-6">
//           {["svm", "relationship-manager"].map((role) => (
//             <label
//               key={role}
//               htmlFor={`position-${role}`}
//               className="flex items-center space-x-3 cursor-pointer text-gray-700"
//             >
//               <input
//                 id={`position-${role}`}
//                 type="radio"
//                 name="position"
//                 value={role}
//                 checked={formData.position === role}
//                 onChange={handleChange}
//                 className="form-radio text-blue-600"
//               />
//               <span className="select-none capitalize">
//                 {role.replace("-", " ")}
//               </span>
//             </label>
//           ))}
//         </div>
//         {formErrors.position && (
//           <p className="text-red-600 text-sm mt-1">{formErrors.position}</p>
//         )}
//       </div>

//       {/* Name */}
//       <div>
//         <label
//           htmlFor="name"
//           className="block text-gray-700 font-semibold mb-2"
//         >
//           Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           placeholder="Your full name"
//           value={formData.name}
//           onChange={handleChange}
//           className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 ${
//             formErrors.name
//               ? "border-red-500 focus:ring-red-500"
//               : "border-gray-300"
//           }`}
//         />
//         {formErrors.name && (
//           <p className="text-red-600 text-sm mt-1">{formErrors.name}</p>
//         )}
//       </div>

//       {/* Email */}
//       <div>
//         <label
//           htmlFor="email"
//           className="block text-gray-700 font-semibold mb-2"
//         >
//           Email
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           placeholder="you@example.com"
//           value={formData.email}
//           onChange={handleChange}
//           className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 ${
//             formErrors.email
//               ? "border-red-500 focus:ring-red-500"
//               : "border-gray-300"
//           }`}
//         />
//         {formErrors.email && (
//           <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>
//         )}
//       </div>

//       {/* Contact */}
//       <div>
//         <label
//           htmlFor="contact"
//           className="block text-gray-700 font-semibold mb-2"
//         >
//           Contact Number
//         </label>
//         <input
//           id="contact"
//           name="contact"
//           type="tel"
//           placeholder="1234567890"
//           value={formData.contact}
//           onChange={handleChange}
//           className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 ${
//             formErrors.contact
//               ? "border-red-500 focus:ring-red-500"
//               : "border-gray-300"
//           }`}
//         />
//         {formErrors.contact && (
//           <p className="text-red-600 text-sm mt-1">{formErrors.contact}</p>
//         )}
//       </div>

//       {/* Resume Upload */}
//       <div>
//         <label
//           htmlFor="resume"
//           className="block text-gray-700 font-semibold mb-2"
//         >
//           Upload Resume
//         </label>
//         <input
//           id="resume"
//           name="resume"
//           type="file"
//           accept=".pdf,.doc,.docx"
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded-lg"
//         />
//         {formErrors.resume && (
//           <p className="text-red-600 text-sm mt-1">{formErrors.resume}</p>
//         )}
//       </div>

//       {/* Submit */}
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
//       >
//         {isSubmitting ? "Submitting..." : "Submit Application"}
//       </button>
//     </form>
//   );
// };

// export default ApplicationForm;

// import React, { useRef, useState } from 'react';

// const ApplicationForm = () => {
//   const formRef = useRef();
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   const validateForm = (data) => {
//     const newErrors = {};
//     if (!data.name.trim() || data.name.trim().length < 3) {
//       newErrors.name = "Please enter your full name (at least 3 characters).";
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(data.email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }

//     const phoneRegex = /^\+?\d{10}$/;
//     if (!phoneRegex.test(data.contact)) {
//       newErrors.contact = "Please enter a valid 10-digit contact number.";
//     }

//     if (!data.position) {
//       newErrors.position = "Please select a position.";
//     }

//     if (!data.resume) {
//       newErrors.resume = "Please upload your resume.";
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const formData = {
//       name: form.name.value.trim(),
//       email: form.email.value.trim(),
//       contact: form.contact.value.trim(),
//       position: form.position.value,
//       resume: form.resume.files[0],
//     };

//     const validationErrors = validateForm(formData);
//     setErrors(validationErrors);
//     setSuccessMessage('');

//     if (Object.keys(validationErrors).length > 0) return;

//     setSubmitting(true);

//     try {
//       const payload = new FormData();
//       payload.append('name', formData.name);
//       payload.append('email', formData.email);
//       payload.append('contact', formData.contact);
//       payload.append('position', formData.position);
//       payload.append('resume', formData.resume);

//       const response = await fetch('https://formsubmit.co/ajax/rahultag161@gmail.com', {
//         method: 'POST',
//         body: payload,
//         headers: {
//           Accept: 'application/json',
//         },
//       });

//       if (response.ok) {
//         setSuccessMessage('Your application has been submitted.');
//         formRef.current.reset();
//         setErrors({});
//       } else {
//         const data = await response.json();
//         alert(data.message || 'Failed to submit. Please try again.');
//       }
//     } catch (error) {
//       alert('Submission failed. Please try again.');
//       console.error(error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const errorClass = "text-sm text-red-600 mt-1";
//   const successClass = "text-sm text-green-600 mt-2";

//   return (
//     <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-md">
//       <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Apply Now</h2>

//       <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
//         <div>
//           <label className="block font-medium mb-1">Full Name</label>
//           <input type="text" name="name" placeholder="Your Name"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
//           {errors.name && <p className={errorClass}>{errors.name}</p>}
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Email</label>
//           <input type="email" name="email" placeholder="you@example.com"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
//           {errors.email && <p className={errorClass}>{errors.email}</p>}
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Contact Number</label>
//           <input type="tel" name="contact" placeholder="+91 9876543210"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
//           {errors.contact && <p className={errorClass}>{errors.contact}</p>}
//         </div>

//         <div>
//           <label className="block font-medium mb-2">Select Position</label>
//           <div className="flex flex-col gap-2">
//             <label className="flex items-center gap-2">
//               <input type="radio" name="position" value="svm" />
//               Senior Verification Manager
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="radio" name="position" value="relationship-manager" />
//               Relationship Manager
//             </label>
//           </div>
//           {errors.position && <p className={errorClass}>{errors.position}</p>}
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Upload Resume</label>
//           <input type="file" name="resume" accept=".pdf,.doc,.docx"
//             className="w-full px-4 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-600 file:text-white file:rounded-lg hover:file:bg-blue-700" />
//           {errors.resume && <p className={errorClass}>{errors.resume}</p>}
//         </div>

//         {successMessage && <p className={successClass}>{successMessage}</p>}

//         <button type="submit" disabled={submitting}
//           className={`w-full py-3 text-white font-semibold rounded-lg transition ${
//             submitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//           }`}>
//           {submitting ? 'Submitting...' : 'Submit Application'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ApplicationForm;

// import React, { useRef, useState } from "react";

// const ApplicationForm = () => {
//   const formRef = useRef();
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const validateForm = (form) => {
//     const data = {
//       name: form.name.value.trim(),
//       email: form.email.value.trim(),
//       contact: form.contact.value.trim(),
//       position: form.position.value,
//       resume: form.resume.files[0],
//     };

//     const newErrors = {};

//     if (!data.name || data.name.length < 3) {
//       newErrors.name = "Please enter your full name (at least 3 characters).";
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(data.email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }

//     const phoneRegex = /^\+?\d{10}$/;
//     if (!phoneRegex.test(data.contact)) {
//       newErrors.contact = "Please enter a valid 10-digit contact number.";
//     }

//     if (!data.position) {
//       newErrors.position = "Please select a position.";
//     }

//     if (!data.resume) {
//       newErrors.resume = "Please upload your resume.";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     const form = e.target;
//     const validationErrors = validateForm(form);
//     setErrors(validationErrors);
//     setSuccessMessage("");

//     if (Object.keys(validationErrors).length > 0) {
//       e.preventDefault(); // Stop native form submission
//     } else {
//       setSuccessMessage("Submitting..."); // Let native submission continue
//     }
//   };

//   const errorClass = "text-sm text-red-600 mt-1";
//   const successClass = "text-sm text-green-600 mt-2";

//   return (
//     <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-md">
//       <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
//         Apply Now
//       </h2>

//       <form
//         ref={formRef}
//         onSubmit={handleSubmit}
//         action="https://formsubmit.co/rahultag161@gmail.com"
//         method="POST"
//         encType="multipart/form-data"
//         className="space-y-5"
//         target="hidden_iframe"
//         noValidate
//       >
//         {/* Optional hidden config for FormSubmit */}
//         <input type="hidden" name="_captcha" value="false" />
//         <input type="hidden" name="_template" value="table" />
//         <input
//           type="hidden"
//           name="_next"
//           value="http://localhost:5173/"
//         />

//         <div>
//           <label className="block font-medium mb-1">Full Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.name && <p className={errorClass}>{errors.name}</p>}
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="you@example.com"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.email && <p className={errorClass}>{errors.email}</p>}
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Contact Number</label>
//           <input
//             type="tel"
//             name="contact"
//             placeholder="+91 9876543210"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.contact && <p className={errorClass}>{errors.contact}</p>}
//         </div>

//         <div>
//           <label className="block font-medium mb-2">Select Position</label>
//           <div className="flex flex-col gap-2">
//             <label className="flex items-center gap-2">
//               <input type="radio" name="position" value="svm" />
//               Senior Verification Manager
//             </label>
//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="position"
//                 value="relationship-manager"
//               />
//               Relationship Manager
//             </label>
//           </div>
//           {errors.position && <p className={errorClass}>{errors.position}</p>}
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Upload Resume</label>
//           <input
//             type="file"
//             name="resume"
//             accept=".pdf,.doc,.docx"
//             className="w-full px-4 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-600 file:text-white file:rounded-lg hover:file:bg-blue-700"
//           />
//           {errors.resume && <p className={errorClass}>{errors.resume}</p>}
//         </div>

//         {successMessage && <p className={successClass}>{successMessage}</p>}

//         <button
//           type="submit"
//           className="w-full py-3 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition"
//         >
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ApplicationForm;

import React, { useRef, useState } from "react";

const ApplicationForm = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = (form) => {
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      contact: form.contact.value.trim(),
      position: form.position.value,
      resume: form.resume.files[0],
    };

    const newErrors = {};

    if (!data.name || data.name.length < 3) {
      newErrors.name = "Please enter your full name (at least 3 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^\+?\d{10}$/;
    if (!phoneRegex.test(data.contact)) {
      newErrors.contact = "Please enter a valid 10-digit contact number.";
    }

    if (!data.position) {
      newErrors.position = "Please select a position.";
    }

    if (!data.resume) {
      newErrors.resume = "Please upload your resume.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    const form = e.target;
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    setSuccessMessage("");

    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault(); // Block submission if validation fails
    } else {
      // Show success after native submission through iframe
      setTimeout(() => {
        setSuccessMessage("Application submitted successfully!");
        form.reset();
      }, 1000);
    }
  };

  const errorClass = "text-sm text-red-600 mt-1";
  const successClass = "text-sm text-green-600 mt-2";

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Apply Now
      </h2>

      <form
        ref={formRef}
        action="https://formsubmit.co/rahultag161@gmail.com"
        method="POST"
        encType="multipart/form-data"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        {/* Stay on same page after submission */}
        <input type="hidden" name="_next" value="http://localhost:5173/careers" />

        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Contact Number</label>
          <input
            type="tel"
            name="contact"
            placeholder="+91 9876543210"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.contact && <p className={errorClass}>{errors.contact}</p>}
        </div>

        <div>
          <label className="block font-medium mb-2">Select Position</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="position" value="svm" />
              Senior Verification Manager
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="position"
                value="relationship-manager"
              />
              Relationship Manager
            </label>
          </div>
          {errors.position && <p className={errorClass}>{errors.position}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            className="w-full px-4 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-600 file:text-white file:rounded-lg hover:file:bg-blue-700"
          />
          {errors.resume && <p className={errorClass}>{errors.resume}</p>}
        </div>

        {successMessage && <p className={successClass}>{successMessage}</p>}

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>

      {/* Hidden iframe to prevent redirection */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
    </div>
  );
};

export default ApplicationForm;
