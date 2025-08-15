// import React, { useRef, useState } from "react";

// const ApplicationForm = () => {
//   const formRef = useRef();
//   const iframeRef = useRef();
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

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
//       e.preventDefault(); // Block submission if validation fails
//     } else {
//       setIsSubmitting(true); // Track if user is submitting
//     }
//   };

//   const handleIframeLoad = () => {
//     // Only trigger success if this was a submission
//     if (isSubmitting) {
//       setSuccessMessage("Application submitted successfully!");
//       formRef.current.reset();
//       setErrors({});
//       setIsSubmitting(false);
//     }
//   };

//   const errorClass = "text-sm text-red-600 mt-1";
//   const successClass = "text-sm text-green-600 mt-2";

//   return (
//     <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-md">
//       <form
//         ref={formRef}
//         action="https://formsubmit.co/rahultag161@gmail.com"
//         method="POST"
//         encType="multipart/form-data"
//         target="hidden_iframe"
//         onSubmit={handleSubmit}
//         className="space-y-5"
//         noValidate
//       >
//         <input type="hidden" name="_captcha" value="false" />
//         <input type="hidden" name="_template" value="table" />
//         <input type="hidden" name="_next" value="http://localhost:5173/careers" />

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
//               <input type="radio" name="position" value="relationship-manager" />
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

//       {/* Hidden iframe to prevent page redirection */}
//       <iframe
//         name="hidden_iframe"
//         ref={iframeRef}
//         style={{ display: "none" }}
//         onLoad={handleIframeLoad}
//       />
//     </div>
//   );
// };

// export default ApplicationForm;


import React, { useRef, useState } from "react";

const ApplicationForm = () => {
  const formRef = useRef();
  const iframeRef = useRef();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setIsSubmitting(true); // Track if user is submitting
    }
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      setSuccessMessage("Application submitted successfully!");
      formRef.current.reset();
      setErrors({});
      setIsSubmitting(false);
    }
  };

  const errorClass = "text-sm text-red-600 mt-1";
  const successClass = "text-sm text-green-600 mt-2";

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-10 rounded-xl shadow-md">
      <form
        ref={formRef}
        action="https://formsubmit.co/rahultag161@gmail.com"
        method="POST"
        encType="multipart/form-data"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="space-y-6"
        noValidate
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="http://localhost:5173/careers" />


        <div>
          <label className="block font-medium mb-2 text-sm sm:text-base">Select Position</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm sm:text-base">
              <input type="radio" name="position" value="ASM" />
              ASM
            </label>
            <label className="flex items-center gap-2 text-sm sm:text-base">
              <input type="radio" name="position" value="relationship-manager" />
              Relationship Manager
            </label>
          </div>
          {errors.position && <p className={errorClass}>{errors.position}</p>}
        </div>


        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Contact Number</label>
          <input
            type="tel"
            name="contact"
            placeholder="+91 9876543210"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          {errors.contact && <p className={errorClass}>{errors.contact}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg file:mr-2 file:py-2 file:px-3 file:border-0 file:bg-blue-600 file:text-white file:rounded-md hover:file:bg-blue-700 text-sm sm:text-base"
          />
          {errors.resume && <p className={errorClass}>{errors.resume}</p>}
        </div>

        {successMessage && <p className={successClass}>{successMessage}</p>}

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm sm:text-base"
        >
          Submit Application
        </button>
      </form>

      {/* Hidden iframe to prevent page redirection */}
      <iframe
        name="hidden_iframe"
        ref={iframeRef}
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      />
    </div>
  );
};

export default ApplicationForm;
