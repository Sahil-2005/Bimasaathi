import React, { useRef, useState } from 'react';

const Advisor = () => {
  const formRef = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
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

    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(data.user_phone)) {
      newErrors.user_phone = "Please enter a valid phone number (10-15 digits).";
    }

    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = {
      user_name: form.user_name.value.trim(),
      user_email: form.user_email.value.trim(),
      user_phone: form.user_phone.value.trim(),
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setSuccessMessage('');

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));

      const response = await fetch('https://formsubmit.co/ajax/rahultag161@gmail.com', {
        method: 'POST',
        body: payload,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSuccessMessage('Advisor form submitted successfully!');
        form.reset();
        setErrors({});
      } else {
        const data = await response.json();
        alert(data.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      alert('Submission failed. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const errorClass = "text-sm text-red-600 mt-1";
  const successClass = "text-sm text-green-600 mt-2";

  return (
    <div className="bg-white min-h-screen pt-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT: Text Section */}
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-800 leading-tight tracking-tight">
            Be the Change.<br />Lead with Purpose.<br />Become an Advisor.
          </h1>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            An advisor does more than advise — they ignite confidence, guide dreams, and unlock financial growth.
            This is your moment to lead people toward a better tomorrow.
          </p>
          <ul className="space-y-4 sm:space-y-5 text-gray-900 text-base sm:text-lg pl-5 list-disc">
            <li>Earn with freedom. Work with purpose.</li>
            <li>Get trained, mentored, and equipped for success.</li>
            <li>Make a real impact—every single day.</li>
          </ul>
        </div>

        {/* RIGHT: Form Section */}
        <div className="bg-gray-100 shadow-2xl p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border-t-4 sm:border-t-8 border-blue-700">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-6 sm:mb-10">
            Join the Advisor Network
          </h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6 sm:space-y-8 text-base sm:text-lg" noValidate>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="John Doe"
                disabled={submitting}
              />
              {errors.user_name && <p className={errorClass}>{errors.user_name}</p>}
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                name="user_email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="john@example.com"
                disabled={submitting}
              />
              {errors.user_email && <p className={errorClass}>{errors.user_email}</p>}
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Mobile Number</label>
              <input
                type="tel"
                name="user_phone"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="+91 98765 43210"
                disabled={submitting}
              />
              {errors.user_phone && <p className={errorClass}>{errors.user_phone}</p>}
            </div>
            {successMessage && <p className={successClass}>{successMessage}</p>}
            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-blue-700 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 rounded-full hover:bg-blue-800 transition-all ${
                submitting ? 'cursor-not-allowed bg-blue-400' : ''
              }`}
            >
              {submitting ? 'Submitting...' : 'Become an Advisor'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Advisor;
