// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function AgentRequirements() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     setIsSubmitting(true);
//     setTimeout(() => {
//       console.log(data);
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       reset();
//       alert("Agent Registration Submitted Successfully!");
//     }, 2000);
//   };

//   return (
//     <div className="bg-white">
//       <section className="py-16 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70"></div>
//         <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70"></div>

//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-10">
//               <h2 className="text-3xl font-bold text-blue-600 mb-4">Agent Registration Form</h2>
//               <p className="text-gray-700">
//                 Please fill in all the required information and upload the necessary documents to complete your registration.
//               </p>
//             </div>

//             {isSubmitted ? (
//               <div className="bg-white rounded-lg shadow-md p-8 text-center">
//                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   ✅
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">Registration Submitted!</h3>
//                 <p className="text-gray-600 mb-6">
//                   Thank you for your interest. We'll review your documents and get back to you soon.
//                 </p>
//                 <button
//                   onClick={() => setIsSubmitted(false)}
//                   className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//                 >
//                   Submit Another Registration
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-6 md:p-8 relative space-y-8">
//                 {/* Employee Info */}
//                 <div className="border border-blue-100 rounded-lg">
//                   <div className="bg-blue-50 p-4 text-blue-600 font-semibold">Employee Information</div>
//                   <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="text-gray-700">Employee Name</label>
//                       <input
//                         className="w-full border p-2 mt-1"
//                         placeholder="Enter employee name"
//                         {...register("empName", { required: true, minLength: 2 })}
//                       />
//                       {errors.empName && <p className="text-sm text-red-600">Employee name is required</p>}
//                     </div>
//                     <div>
//                       <label className="text-gray-700">Employee Code</label>
//                       <input
//                         className="w-full border p-2 mt-1"
//                         placeholder="Enter employee code"
//                         {...register("empCode", { required: true })}
//                       />
//                       {errors.empCode && <p className="text-sm text-red-600">Employee code is required</p>}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Agent Info */}
//                 <div className="border border-blue-100 rounded-lg">
//                   <div className="bg-blue-50 p-4 text-blue-600 font-semibold">Agent Information</div>
//                   <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="text-gray-700">Agent Name</label>
//                       <input
//                         className="w-full border p-2 mt-1"
//                         placeholder="Enter agent name"
//                         {...register("agentName", { required: true, minLength: 2 })}
//                       />
//                       {errors.agentName && <p className="text-sm text-red-600">Agent name is required</p>}
//                     </div>
//                     <div>
//                       <label className="text-gray-700">Mobile Number</label>
//                       <input
//                         className="w-full border p-2 mt-1"
//                         placeholder="Enter mobile number"
//                         {...register("mobNo", { required: true, minLength: 10 })}
//                       />
//                       {errors.mobNo && <p className="text-sm text-red-600">Valid mobile number is required</p>}
//                     </div>
//                     <div>
//                       <label className="text-gray-700">Email ID</label>
//                       <input
//                         type="email"
//                         className="w-full border p-2 mt-1"
//                         placeholder="Enter email address"
//                         {...register("emailId", { required: true })}
//                       />
//                       {errors.emailId && <p className="text-sm text-red-600">Valid email is required</p>}
//                     </div>
//                     <div>
//                       <label className="text-gray-700">Existing Code (Optional)</label>
//                       <input className="w-full border p-2 mt-1" placeholder="Enter existing code" {...register("existingCode")} />
//                     </div>
//                   </div>
//                   <div className="px-6 pb-6">
//                     <label className="text-gray-700">Address</label>
//                     <textarea
//                       className="w-full border p-2 mt-1"
//                       rows="4"
//                       placeholder="Enter address"
//                       {...register("address", { required: true, minLength: 10 })}
//                     />
//                     {errors.address && <p className="text-sm text-red-600">Complete address is required</p>}
//                   </div>
//                 </div>

//                 {/* Document Attachments */}
// <div className="border border-blue-100 rounded-lg">
//   <div className="bg-blue-50 px-6 py-4 text-blue-600 font-semibold flex items-center">
//     📄
//     <span className="ml-2">Document Attachments</span>
//   </div>

//   <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//     {/* PAN Card */}
//     <div>
//       <label className="block text-gray-700 font-medium mb-1">PAN Card</label>
//       <p className="text-sm text-gray-500 mb-2">Upload clear image of PAN card (JPG, PNG, PDF)</p>
//       <input
//         type="file"
//         accept=".jpg,.jpeg,.png,.pdf"
//         {...register("panCard", { required: true })}
//         className="w-full file:border-0 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//       />
//       {errors.panCard && <p className="text-sm text-red-600 mt-1">PAN Card is required</p>}
//     </div>

//     {/* Aadhar Card */}
//     <div>
//       <label className="block text-gray-700 font-medium mb-1">Aadhar Card</label>
//       <p className="text-sm text-gray-500 mb-2">Upload clear image of Aadhar card (JPG, PNG, PDF)</p>
//       <input
//         type="file"
//         accept=".jpg,.jpeg,.png,.pdf"
//         {...register("aadharCard", { required: true })}
//         className="w-full file:border-0 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//       />
//       {errors.aadharCard && <p className="text-sm text-red-600 mt-1">Aadhar Card is required</p>}
//     </div>

//     {/* Account Details */}
//     <div>
//       <label className="block text-gray-700 font-medium mb-1">Account Details</label>
//       <p className="text-sm text-gray-500 mb-2">Upload bank account details (JPG, PNG, PDF)</p>
//       <input
//         type="file"
//         accept=".jpg,.jpeg,.png,.pdf"
//         {...register("accountDetails", { required: true })}
//         className="w-full file:border-0 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//       />
//       {errors.accountDetails && <p className="text-sm text-red-600 mt-1">Account Details are required</p>}
//     </div>

//     {/* Cancelled Cheque */}
//     <div>
//       <label className="block text-gray-700 font-medium mb-1">Cancelled Cheque</label>
//       <p className="text-sm text-gray-500 mb-2">Upload cancelled cheque image (JPG, PNG, PDF)</p>
//       <input
//         type="file"
//         accept=".jpg,.jpeg,.png,.pdf"
//         {...register("cancelCheque", { required: true })}
//         className="w-full file:border-0 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//       />
//       {errors.cancelCheque && <p className="text-sm text-red-600 mt-1">Cancelled Cheque is required</p>}
//     </div>

//     {/* Photo */}
//     <div>
//       <label className="block text-gray-700 font-medium mb-1">Photo</label>
//       <p className="text-sm text-gray-500 mb-2">Upload passport size photo (JPG, PNG)</p>
//       <input
//         type="file"
//         accept=".jpg,.jpeg,.png"
//         {...register("photo", { required: true })}
//         className="w-full file:border-0 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//       />
//       {errors.photo && <p className="text-sm text-red-600 mt-1">Photo is required</p>}
//     </div>

//     {/* Signature */}
//     <div>
//       <label className="block text-gray-700 font-medium mb-1">Signature</label>
//       <p className="text-sm text-gray-500 mb-2">Upload clear signature image (JPG, PNG)</p>
//       <input
//         type="file"
//         accept=".jpg,.jpeg,.png"
//         {...register("signature", { required: true })}
//         className="w-full file:border-0 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//       />
//       {errors.signature && <p className="text-sm text-red-600 mt-1">Signature is required</p>}
//     </div>
//   </div>
// </div>

//                 {/* Submit */}
//                 <div className="pt-6">
//                   <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-3 text-lg rounded hover:bg-blue-700"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Submitting Registration..." : "Submit Agent Registration"}
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React from "react";

// export default function AgentRequirements() {
//   return (
//     <div className="bg-white">
//       <section className="py-16 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70"></div>
//         <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70"></div>

//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-10">
//               <h2 className="text-3xl font-bold text-blue-600 mb-4">Agent Registration Form</h2>
//               <p className="text-gray-700">
//                 Please fill in all the required information and upload the necessary documents to complete your registration.
//               </p>
//             </div>

//             <form
//               action="https://formsubmit.co/rahultag161@gmail.com"
//               method="POST"
//               encType="multipart/form-data"
//               className="bg-white rounded-lg shadow-md p-6 md:p-8 relative space-y-8"
//             >
//               <input type="hidden" name="_captcha" value="false" />
//         <input type="hidden" name="_template" value="table" />
//         <input type="hidden" name="_next" value="http://localhost:5173/agent-registration" />

//               {/* Employee Info */}
//               <div className="border border-blue-100 rounded-lg">
//                 <div className="bg-blue-50 p-4 text-blue-600 font-semibold">Employee Information</div>
//                 <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="text-gray-700">Employee Name</label>
//                     <input name="empName" required className="w-full border p-2 mt-1" placeholder="Enter employee name" />
//                   </div>
//                   <div>
//                     <label className="text-gray-700">Employee Code</label>
//                     <input name="empCode" required className="w-full border p-2 mt-1" placeholder="Enter employee code" />
//                   </div>
//                 </div>
//               </div>

//               {/* Agent Info */}
//               <div className="border border-blue-100 rounded-lg">
//                 <div className="bg-blue-50 p-4 text-blue-600 font-semibold">Agent Information</div>
//                 <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="text-gray-700">Agent Name</label>
//                     <input name="agentName" required className="w-full border p-2 mt-1" placeholder="Enter agent name" />
//                   </div>
//                   <div>
//                     <label className="text-gray-700">Mobile Number</label>
//                     <input name="mobNo" required className="w-full border p-2 mt-1" placeholder="Enter mobile number" />
//                   </div>
//                   <div>
//                     <label className="text-gray-700">Email ID</label>
//                     <input
//                       type="email"
//                       name="emailId"
//                       required
//                       className="w-full border p-2 mt-1"
//                       placeholder="Enter email address"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-gray-700">Existing Code (Optional)</label>
//                     <input name="existingCode" className="w-full border p-2 mt-1" placeholder="Enter existing code" />
//                   </div>
//                 </div>
//                 <div className="px-6 pb-6">
//                   <label className="text-gray-700">Address</label>
//                   <textarea
//                     name="address"
//                     required
//                     className="w-full border p-2 mt-1"
//                     rows="4"
//                     placeholder="Enter address"
//                   />
//                 </div>
//               </div>

//               {/* Document Attachments */}
//               <div className="border border-blue-100 rounded-lg">
//                 <div className="bg-blue-50 px-6 py-4 text-blue-600 font-semibold flex items-center">
//                   📄 <span className="ml-2">Document Attachments</span>
//                 </div>

//                 <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* PAN Card */}
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-1">PAN Card</label>
//                     <input
//                       type="file"
//                       name="panCard"
//                       accept=".jpg,.jpeg,.png,.pdf"
//                       required
//                       className="w-full file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//                     />
//                   </div>

//                   {/* Aadhar Card */}
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-1">Aadhar Card</label>
//                     <input
//                       type="file"
//                       name="aadharCard"
//                       accept=".jpg,.jpeg,.png,.pdf"
//                       required
//                       className="w-full file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//                     />
//                   </div>

//                   {/* Account Details */}
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-1">Account Details</label>
//                     <input
//                       type="file"
//                       name="accountDetails"
//                       accept=".jpg,.jpeg,.png,.pdf"
//                       required
//                       className="w-full file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//                     />
//                   </div>

//                   {/* Cancelled Cheque */}
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-1">Cancelled Cheque</label>
//                     <input
//                       type="file"
//                       name="cancelCheque"
//                       accept=".jpg,.jpeg,.png,.pdf"
//                       required
//                       className="w-full file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//                     />
//                   </div>

//                   {/* Photo */}
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-1">Photo</label>
//                     <input
//                       type="file"
//                       name="photo"
//                       accept=".jpg,.jpeg,.png"
//                       required
//                       className="w-full file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//                     />
//                   </div>

//                   {/* Signature */}
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-1">Signature</label>
//                     <input
//                       type="file"
//                       name="signature"
//                       accept=".jpg,.jpeg,.png"
//                       required
//                       className="w-full file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="pt-6">
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-3 text-lg rounded hover:bg-blue-700"
//                 >
//                   Submit Agent Registration
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useRef, useState } from "react";

export default function AgentRequirements() {
  const formRef = useRef();
  const iframeRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setSuccessMessage("");
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      setSuccessMessage("Agent registration submitted successfully!");
      formRef.current.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                Agent Registration Form
              </h2>
              <p className="text-gray-700">
                Please fill in all the required information and upload the
                necessary documents to complete your registration.
              </p>
            </div>

            <form
              ref={formRef}
              action="https://formsubmit.co/rahultag161@gmail.com"
              method="POST"
              encType="multipart/form-data"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 relative space-y-8"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/agent-registration"
              />

              {/* Employee Info */}
              <div className="border border-blue-100 rounded-lg">
                <div className="bg-blue-50 p-4 text-blue-600 font-semibold">
                  Employee Information
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-700">Employee Name</label>
                    <input
                      name="empName"
                      required
                      className="w-full border p-2 mt-1"
                      placeholder="Enter employee name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700">Employee Code</label>
                    <input
                      name="empCode"
                      required
                      className="w-full border p-2 mt-1"
                      placeholder="Enter employee code"
                    />
                  </div>
                </div>
              </div>

              {/* Agent Info */}
              <div className="border border-blue-100 rounded-lg">
                <div className="bg-blue-50 p-4 text-blue-600 font-semibold">
                  Agent Information
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-700">Agent Name</label>
                    <input
                      name="agentName"
                      required
                      className="w-full border p-2 mt-1"
                      placeholder="Enter agent name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700">Mobile Number</label>
                    <input
                      name="mobNo"
                      required
                      className="w-full border p-2 mt-1"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700">Email ID</label>
                    <input
                      type="email"
                      name="emailId"
                      required
                      className="w-full border p-2 mt-1"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700">
                      Existing Code (Optional)
                    </label>
                    <input
                      name="existingCode"
                      className="w-full border p-2 mt-1"
                      placeholder="Enter existing code"
                    />
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <label className="text-gray-700">Address</label>
                  <textarea
                    name="address"
                    required
                    className="w-full border p-2 mt-1"
                    rows="4"
                    placeholder="Enter address"
                  />
                </div>
              </div>

              {/* Document Attachments */}
              <div className="border border-blue-100 rounded-lg">
                {/* <div className="bg-blue-50 px-6 py-4 text-blue-600 font-semibold flex items-center">
                  📄 <span className="ml-2">Document Attachments</span>
                </div> */}

                <div className="bg-blue-50 px-6 py-4 text-blue-600 font-semibold flex items-center">
                  📄 <span className="ml-2">Document Attachments</span>
                </div>
                <div className="px-6 pt-2 pb-0 text-sm text-red-600">
                  <strong>Note:</strong> Please ensure the total size of all
                  uploaded documents does not exceed <strong>5MB</strong>. Since
                  there are 6 required documents, it is recommended to keep each
                  file below <strong>850KB</strong>.
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "PAN Card", name: "panCard" },
                    { label: "Aadhar Card", name: "aadharCard" },
                    { label: "Account Details", name: "accountDetails" },
                    { label: "Cancelled Cheque", name: "cancelCheque" },
                    { label: "Photo", name: "photo" },
                    { label: "Signature", name: "signature" },
                  ].map(({ label, name }) => (
                    <div key={name}>
                      <label className="block text-gray-700 font-medium mb-1">
                        {label}
                      </label>
                      <input
                        type="file"
                        name={name}
                        accept=".jpg,.jpeg,.png,.pdf"
                        required
                        className="w-full file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer border p-2"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Message */}
              {successMessage && (
                <div className="text-green-600 font-medium text-center">
                  {successMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 text-lg rounded hover:bg-blue-700"
                >
                  Submit Agent Registration
                </button>
              </div>
            </form>

            {/* Hidden iframe to prevent redirection */}
            <iframe
              name="hidden_iframe"
              ref={iframeRef}
              style={{ display: "none" }}
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
