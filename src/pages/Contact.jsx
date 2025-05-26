// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const formRef = useRef();
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);

//   const validateForm = (data) => {
//     const newErrors = {};

//     if (!data.user_name.trim() || data.user_name.trim().length < 3) {
//       newErrors.user_name = "Please enter a valid full name (at least 3 characters).";
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(data.user_email)) {
//       newErrors.user_email = "Please enter a valid email address.";
//     }

//     const phoneRegex = /^\+?\d{10}$/;
//     if (!phoneRegex.test(data.user_phone)) {
//       newErrors.user_phone = "Please enter a valid phone number (10 digits).";
//     }

//     if (!data.insurance_type) {
//       newErrors.insurance_type = "Please select an insurance type.";
//     }

//     if (!data.message.trim() || data.message.length < 10) {
//       newErrors.message = "Message must be at least 10 characters long.";
//     }

//     return newErrors;
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const formData = {
//       user_name: form.user_name.value.trim(),
//       user_email: form.user_email.value.trim(),
//       user_phone: form.user_phone.value.trim(),
//       insurance_type: form.insurance_type.value,
//       message: form.message.value.trim(),
//     };

//     const validationErrors = validateForm(formData);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length !== 0) return;

//     setSubmitting(true);

//     emailjs.sendForm(
//       'service_rq7zh28',
//       'template_y7sg30e',
//       formRef.current,
//       'X3pllJfNycUENYC78'
//     ).then(
//       () => {
//         alert('Enquiry sent successfully!');
//         formRef.current.reset();
//         setErrors({});
//       },
//       (error) => {
//         alert('Failed to send enquiry. Please try again.');
//         console.error(error.text);
//       }
//     ).finally(() => {
//       setSubmitting(false);
//     });
//   };

//   const errorClass = "text-sm text-red-600 mt-1";

//   return (
//     <section className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-20 py-12 sm:py-16 gap-10 sm:gap-12">
//       {/* Left - Image */}
//       <div className="w-full md:w-1/2 flex justify-center items-center">
//         <img
//           src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
//           alt="Insurance Help"
//           className="w-full max-w-md sm:max-w-lg md:max-w-full h-auto rounded-2xl shadow-xl object-cover"
//         />
//       </div>

//       {/* Right - Contact Form */}
//       <div className="w-full md:w-1/2 bg-[#f9fafc] rounded-2xl shadow-xl p-6 sm:p-10 md:p-14">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 sm:mb-6 leading-tight">
//           Let’s Connect
//         </h2>
//         <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
//           Have questions about your insurance needs? Fill in the details below and our advisors will get in touch to guide you toward the best options tailored just for you.
//         </p>

//         <form ref={formRef} onSubmit={sendEmail} className="flex flex-col space-y-5 sm:space-y-6">
//           <div>
//             <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Full Name</label>
//             <input
//               type="text"
//               name="user_name"
//               placeholder="John Doe"
//               className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 border-gray-300"
//             />
//             {errors.user_name && <p className={errorClass}>{errors.user_name}</p>}
//           </div>

//           <div>
//             <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Email Address</label>
//             <input
//               type="email"
//               name="user_email"
//               placeholder="john@example.com"
//               className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 border-gray-300"
//             />
//             {errors.user_email && <p className={errorClass}>{errors.user_email}</p>}
//           </div>

//           <div>
//             <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Mobile Number</label>
//             <input
//               type="tel"
//               name="user_phone"
//               placeholder="+91 98765 43210"
//               className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 border-gray-300"
//             />
//             {errors.user_phone && <p className={errorClass}>{errors.user_phone}</p>}
//           </div>

//           <div>
//             <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Insurance Type</label>
//             <select
//               name="insurance_type"
//               className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 border-gray-300"
//             >
//               <option value="">Select Insurance Type</option>
//               <option value="Health Insurance">Health Insurance</option>
//               <option value="Life Insurance">Life Insurance</option>
//               <option value="Car Insurance">Car Insurance</option>
//               <option value="Home Insurance">Home Insurance</option>
//               <option value="Travel Insurance">Travel Insurance</option>
//             </select>
//             {errors.insurance_type && <p className={errorClass}>{errors.insurance_type}</p>}
//           </div>

//           <div>
//             <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Your Message</label>
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Tell us about your needs or questions..."
//               className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 resize-none border-gray-300"
//             ></textarea>
//             {errors.message && <p className={errorClass}>{errors.message}</p>}
//           </div>

//           <button
//             type="submit"
//             disabled={submitting}
//             className={`w-full py-3 sm:py-4 mt-1 rounded-xl text-white text-lg sm:text-xl font-bold transition duration-300 shadow-md ${
//               submitting
//                 ? 'bg-blue-400 cursor-not-allowed'
//                 : 'bg-blue-700 hover:bg-blue-800 hover:shadow-lg'
//             }`}
//           >
//             {submitting ? 'Sending...' : 'Submit Enquiry'}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.user_name.trim() || data.user_name.trim().length < 3) {
      newErrors.user_name = "Please enter a valid full name (at least 3 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.user_email)) {
      newErrors.user_email = "Please enter a valid email address.";
    }

    const phoneRegex = /^\+?\d{10}$/;
    if (!phoneRegex.test(data.user_phone)) {
      newErrors.user_phone = "Please enter a valid phone number (10 digits).";
    }

    if (!data.insurance_type) {
      newErrors.insurance_type = "Please select an insurance type.";
    }

    if (!data.message.trim() || data.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      user_name: form.user_name.value.trim(),
      user_email: form.user_email.value.trim(),
      user_phone: form.user_phone.value.trim(),
      insurance_type: form.insurance_type.value,
      message: form.message.value.trim(),
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setSuccessMessage('');

    if (Object.keys(validationErrors).length !== 0) return;

    setSubmitting(true);

    try {
      const payload = new FormData();
      for (const key in formData) {
        payload.append(key, formData[key]);
      }

      const response = await fetch('https://formsubmit.co/ajax/rahultag161@gmail.com', {
        method: 'POST',
        body: payload,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccessMessage('Enquiry sent successfully!');
        formRef.current.reset();
        setErrors({});
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      alert('Failed to send enquiry. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const errorClass = "text-sm text-red-600 mt-1";
  const successClass = "text-sm text-green-600 mt-2";

  return (
    <section className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-20 py-12 sm:py-16 gap-10 sm:gap-12">
      {/* Left - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
          alt="Insurance Help"
          className="w-full max-w-md sm:max-w-lg md:max-w-full h-auto rounded-2xl shadow-xl object-cover"
        />
      </div>

      {/* Right - Contact Form */}
      <div className="w-full md:w-1/2 bg-[#f9fafc] rounded-2xl shadow-xl p-6 sm:p-10 md:p-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 sm:mb-6 leading-tight">
          Let’s Connect
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
          Have questions about your insurance needs? Fill in the details below and our advisors will get in touch to guide you toward the best options tailored just for you.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col space-y-5 sm:space-y-6" noValidate>
          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 border-gray-300"
            />
            {errors.user_name && <p className={errorClass}>{errors.user_name}</p>}
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 border-gray-300"
            />
            {errors.user_email && <p className={errorClass}>{errors.user_email}</p>}
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Mobile Number</label>
            <input
              type="tel"
              name="user_phone"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 border-gray-300"
            />
            {errors.user_phone && <p className={errorClass}>{errors.user_phone}</p>}
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Insurance Type</label>
            <select
              name="insurance_type"
              className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 border-gray-300"
            >
              <option value="">Select Insurance Type</option>
              <option value="Health Insurance">Health Insurance</option>
              <option value="Life Insurance">Life Insurance</option>
              <option value="Car Insurance">Car Insurance</option>
              <option value="Home Insurance">Home Insurance</option>
              <option value="Travel Insurance">Travel Insurance</option>
            </select>
            {errors.insurance_type && <p className={errorClass}>{errors.insurance_type}</p>}
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Your Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your needs or questions..."
              className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 resize-none border-gray-300"
            ></textarea>
            {errors.message && <p className={errorClass}>{errors.message}</p>}
          </div>

          {successMessage && <p className={successClass}>{successMessage}</p>}

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 sm:py-4 mt-1 rounded-xl text-white text-lg sm:text-xl font-bold transition duration-300 shadow-md ${
              submitting
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-700 hover:bg-blue-800 hover:shadow-lg'
            }`}
          >
            {submitting ? 'Sending...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
