// import React, { useState } from "react";
// import { Car, Bike, Truck } from "lucide-react";

// export default function InsuranceQuoteForm() {
//   const [selectedVehicle, setSelectedVehicle] = useState("car");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     registrationNumber: "",
//     contactNumber: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", { vehicleType: selectedVehicle, ...formData });
//   };

//   const getButtonClass = (type) =>
//     `flex flex-col items-center space-y-1 text-sm transition-colors ${
//       selectedVehicle === type ? "text-blue-600" : "text-gray-400 hover:text-gray-500"
//     }`;

//   const getBorderClass = (type) =>
//     `w-14 h-14 flex items-center justify-center rounded-md border-2 transition-colors ${
//       selectedVehicle === type ? "border-blue-600" : "border-gray-200"
//     }`;

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
//       <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-2">
          
//           {/* Left Section */}
//           <div className="p-6 sm:p-8">
//             {/* Vehicle Selection */}
//             <div className="flex flex-wrap gap-6 mb-8 justify-center sm:justify-start">
//               <button onClick={() => setSelectedVehicle("car")} className={getButtonClass("car")}>
//                 <div className={getBorderClass("car")}>
//                   <Car className="h-7 w-7" />
//                 </div>
//                 <span className="font-medium">Car</span>
//               </button>

//               <button onClick={() => setSelectedVehicle("bike")} className={getButtonClass("bike")}>
//                 <div className={getBorderClass("bike")}>
//                   <Bike className="h-7 w-7" />
//                 </div>
//                 <span className="font-medium">Bike</span>
//               </button>

//               <button onClick={() => setSelectedVehicle("cv")} className={getButtonClass("cv")}>
//                 <div className={getBorderClass("cv")}>
//                   <Truck className="h-7 w-7" />
//                 </div>
//                 <span className="font-medium">CV</span>
//               </button>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Enter Full Name"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />

//               <input
//                 type="text"
//                 name="registrationNumber"
//                 placeholder="Enter Registration Number"
//                 value={formData.registrationNumber}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />

//               <input
//                 type="tel"
//                 name="contactNumber"
//                 placeholder="Enter Contact Number"
//                 value={formData.contactNumber}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-colors"
//               >
//                 Get Quotes
//               </button>

//               <p className="text-sm text-gray-600 mt-4 text-center sm:text-left">
//                 By clicking, I Agree to{" "}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   T&C
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Privacy Policy
//                 </a>
//               </p>
//             </form>
//           </div>

//           {/* Right Section Illustration (hidden on small screens) */}
//           <div className="hidden md:flex items-center justify-center bg-blue-50 p-8">
//             <div className="relative w-full max-w-md h-80">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative w-64 h-64">
//                   <div className="absolute inset-0 bg-green-100 rounded-full opacity-30"></div>

//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48">
//                     <div className="relative w-full h-full">
//                       <div
//                         className="absolute inset-0 border-2 border-gray-800 rounded-t-full"
//                         style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)" }}
//                       ></div>
//                       <div
//                         className="absolute inset-0 bg-blue-200 rounded-t-full"
//                         style={{ clipPath: "polygon(5% 5%, 95% 5%, 95% 70%, 50% 95%, 5% 70%)" }}
//                       ></div>
//                       <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-32">
//                     {selectedVehicle === "car" && (
//                       <div className="relative w-full h-full">
//                         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-20 bg-blue-400 rounded-t-3xl"></div>
//                         <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-blue-500 rounded-t-2xl"></div>
//                         <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-gray-800"></div>
//                         <div className="absolute bottom-0 left-6 w-10 h-10 bg-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-0 right-6 w-10 h-10 bg-gray-800 rounded-full"></div>
//                       </div>
//                     )}

//                     {selectedVehicle === "bike" && (
//                       <div className="relative w-full h-full">
//                         <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-blue-500"></div>
//                         <div className="absolute bottom-0 left-8 w-12 h-12 border-4 border-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-0 right-8 w-12 h-12 border-4 border-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-7 right-16 w-8 h-10 border-r-4 border-blue-500 rounded-tr-lg"></div>
//                       </div>
//                     )}

//                     {selectedVehicle === "cv" && (
//                       <div className="relative w-full h-full">
//                         <div className="absolute bottom-6 left-10 w-16 h-14 bg-blue-500 rounded-t-lg"></div>
//                         <div className="absolute bottom-6 right-6 w-28 h-14 bg-blue-400 border-l-2 border-gray-600"></div>
//                         <div className="absolute bottom-0 left-8 w-8 h-8 bg-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-0 left-20 w-8 h-8 bg-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-0 right-16 w-8 h-8 bg-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-0 right-4 w-8 h-8 bg-gray-800 rounded-full"></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Car, Bike, Truck } from "lucide-react";

// export default function InsuranceQuoteForm() {
//   const [selectedVehicle, setSelectedVehicle] = useState("car");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     registrationNumber: "",
//     contactNumber: "",
//   });

//   const [successMsg, setSuccessMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   setSuccessMsg("Thank you! Your quote request has been submitted.");
//   //   setLoading(false);
//   // };


//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setSuccessMsg("");

//   try {
//     const response = await fetch("https://formsubmit.co/ajax/rahultag161@gmail.com", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         vehicleType: selectedVehicle,
//         fullName: formData.fullName,
//         registrationNumber: formData.registrationNumber,
//         contactNumber: formData.contactNumber,
//         _captcha: "false",
//       }),
//     });

//     const result = await response.json();

//     if (result.success === "true") {
//       setSuccessMsg("Thank you! Your quote request has been submitted.");
//       setFormData({
//         fullName: "",
//         registrationNumber: "",
//         contactNumber: "",
//       });
//     } else {
//       setSuccessMsg("Something went wrong. Please try again.");
//     }
//   } catch (error) {
//     console.error("Submission error:", error);
//     setSuccessMsg("An error occurred. Please try again later.");
//   } finally {
//     setLoading(false);
//   }
// };



//   const getButtonClass = (type) =>
//     `flex flex-col items-center space-y-1 text-sm transition-colors ${
//       selectedVehicle === type
//         ? "text-blue-600"
//         : "text-gray-400 hover:text-gray-500"
//     }`;

//   const getBorderClass = (type) =>
//     `w-14 h-14 flex items-center justify-center rounded-md border-2 transition-colors ${
//       selectedVehicle === type ? "border-blue-600" : "border-gray-200"
//     }`;

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
//       <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* Left Section */}
//           <div className="p-6 sm:p-8">
//             {/* Vehicle Selection */}
//             <div className="flex flex-wrap gap-6 mb-8 justify-center sm:justify-start">
//               <button
//                 type="button"
//                 onClick={() => setSelectedVehicle("car")}
//                 className={getButtonClass("car")}
//               >
//                 <div className={getBorderClass("car")}>
//                   <Car className="h-7 w-7" />
//                 </div>
//                 <span className="font-medium">Car</span>
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setSelectedVehicle("bike")}
//                 className={getButtonClass("bike")}
//               >
//                 <div className={getBorderClass("bike")}>
//                   <Bike className="h-7 w-7" />
//                 </div>
//                 <span className="font-medium">Bike</span>
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setSelectedVehicle("cv")}
//                 className={getButtonClass("cv")}
//               >
//                 <div className={getBorderClass("cv")}>
//                   <Truck className="h-7 w-7" />
//                 </div>
//                 <span className="font-medium">CV</span>
//               </button>
//             </div>

//             {/* FormSubmit Form */}
//             <form
//               onSubmit={handleSubmit}
//               action="https://formsubmit.co/rahultag161@gmail.com"
//               method="POST"
//               className="space-y-4"
//             >
             
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Enter Full Name"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <input
//                 type="text"
//                 name="registrationNumber"
//                 placeholder="Enter Registration Number"
//                 value={formData.registrationNumber}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <input
//                 type="tel"
//                 name="contactNumber"
//                 placeholder="Enter Contact Number"
//                 value={formData.contactNumber}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-colors"
//                 disabled={loading}
//               >
//                 {loading ? "Sending..." : "Get Quotes"}
//               </button>

//               {successMsg && (
//                 <p className="text-green-600 text-sm mt-2">{successMsg}</p>
//               )}

//               <p className="text-sm text-gray-600 mt-4 text-center sm:text-left">
//                 By clicking, I Agree to{" "}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   T&C
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Privacy Policy
//                 </a>
//               </p>
//             </form>
//           </div>

//           {/* Right Section Illustration */}
//           <div className="hidden md:flex items-center justify-center bg-blue-50 p-8">
//             <div className="relative w-full max-w-md h-80">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative w-64 h-64">
//                   <div className="absolute inset-0 bg-green-100 rounded-full opacity-30"></div>
//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48">
//                     <div className="relative w-full h-full">
//                       <div
//                         className="absolute inset-0 border-2 border-gray-800 rounded-t-full"
//                         style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)" }}
//                       ></div>
//                       <div
//                         className="absolute inset-0 bg-blue-200 rounded-t-full"
//                         style={{ clipPath: "polygon(5% 5%, 95% 5%, 95% 70%, 50% 95%, 5% 70%)" }}
//                       ></div>
//                       <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-32">
//                     {selectedVehicle === "car" && (
//                       <div className="relative w-full h-full">
//                         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-20 bg-blue-400 rounded-t-3xl"></div>
//                         <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-blue-500 rounded-t-2xl"></div>
//                         <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-gray-800"></div>
//                         <div className="absolute bottom-0 left-6 w-10 h-10 bg-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-0 right-6 w-10 h-10 bg-gray-800 rounded-full"></div>
//                       </div>
//                     )}
//                     {selectedVehicle === "bike" && (
//                       <div className="relative w-full h-full">
//                         <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-blue-500"></div>
//                         <div className="absolute bottom-0 left-8 w-12 h-12 border-4 border-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-0 right-8 w-12 h-12 border-4 border-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-7 right-16 w-8 h-10 border-r-4 border-blue-500 rounded-tr-lg"></div>
//                       </div>
//                     )}
//                     {selectedVehicle === "cv" && (
//                       <div className="relative w-full h-full">
//                         <div className="absolute bottom-6 left-10 w-16 h-14 bg-blue-500 rounded-t-lg"></div>
//                         <div className="absolute bottom-6 right-6 w-28 h-14 bg-blue-400 border-l-2 border-gray-600"></div>
//                         <div className="absolute bottom-0 left-8 w-8 h-8 bg-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-0 left-20 w-8 h-8 bg-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-0 right-16 w-8 h-8 bg-gray-800 rounded-full"></div>
//                         <div className="absolute bottom-0 right-4 w-8 h-8 bg-gray-800 rounded-full"></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useState } from "react";
import { Car, Bike, Truck, Bus } from "lucide-react";

export default function InsuranceQuoteForm() {
  const [selectedVehicle, setSelectedVehicle] = useState("car");
  const [formData, setFormData] = useState({
    fullName: "",
    registrationNumber: "",
    contactNumber: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/rahultag161@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          vehicleType: selectedVehicle,
          fullName: formData.fullName,
          registrationNumber: formData.registrationNumber,
          contactNumber: formData.contactNumber,
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (result.success === "true") {
        setSuccessMsg("Thank you! Your quote request has been submitted.");
        setFormData({
          fullName: "",
          registrationNumber: "",
          contactNumber: "",
        });
      } else {
        setSuccessMsg("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSuccessMsg("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getButtonClass = (type) =>
    `flex flex-col items-center space-y-1 text-sm transition-colors ${
      selectedVehicle === type
        ? "text-blue-600"
        : "text-gray-400 hover:text-gray-500"
    }`;

  const getBorderClass = (type) =>
    `w-14 h-14 flex items-center justify-center rounded-md border-2 transition-colors ${
      selectedVehicle === type ? "border-blue-600" : "border-gray-200"
    }`;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="p-6 sm:p-8">
            {/* Vehicle Selection */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center sm:justify-start">
              <button
                type="button"
                onClick={() => setSelectedVehicle("car")}
                className={getButtonClass("car")}
              >
                <div className={getBorderClass("car")}>
                  <Car className="h-7 w-7" />
                </div>
                <span className="font-medium">Car</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedVehicle("bike")}
                className={getButtonClass("bike")}
              >
                <div className={getBorderClass("bike")}>
                  <Bike className="h-7 w-7" />
                </div>
                <span className="font-medium">Bike</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedVehicle("cv")}
                className={getButtonClass("cv")}
              >
                <div className={getBorderClass("cv")}>
                  <Truck className="h-7 w-7" />
                </div>
                <span className="font-medium">CV</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedVehicle("pcv")}
                className={getButtonClass("pcv")}
              >
                <div className={getBorderClass("pcv")}>
                  <Bus className="h-7 w-7" />
                </div>
                <span className="font-medium">PCV</span>
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="registrationNumber"
                placeholder="Enter Registration Number"
                value={formData.registrationNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                name="contactNumber"
                placeholder="Enter Contact Number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                disabled={loading}
              >
                {loading ? "Sending..." : "Get Quotes"}
              </button>

              {successMsg && (
                <p className="text-green-600 text-sm mt-2">{successMsg}</p>
              )}

              <p className="text-sm text-gray-600 mt-4 text-center sm:text-left">
                By clicking, I Agree to{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  T&C
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>

          {/* Right Section Illustration */}
          <div className="hidden md:flex items-center justify-center bg-blue-50 p-8">
            <div className="relative w-full max-w-md h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-green-100 rounded-full opacity-30"></div>

                  {/* Common structure */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48">
                    <div className="relative w-full h-full">
                      <div
                        className="absolute inset-0 border-2 border-gray-800 rounded-t-full"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)" }}
                      ></div>
                      <div
                        className="absolute inset-0 bg-blue-200 rounded-t-full"
                        style={{ clipPath: "polygon(5% 5%, 95% 5%, 95% 70%, 50% 95%, 5% 70%)" }}
                      ></div>
                      <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>

                  {/* Vehicle Illustrations */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-32">
                    {selectedVehicle === "car" && (
                      <div className="relative w-full h-full">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-20 bg-blue-400 rounded-t-3xl"></div>
                        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-blue-500 rounded-t-2xl"></div>
                        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-gray-800"></div>
                        <div className="absolute bottom-0 left-6 w-10 h-10 bg-gray-800 rounded-full"></div>
                        <div className="absolute bottom-0 right-6 w-10 h-10 bg-gray-800 rounded-full"></div>
                      </div>
                    )}
                    {selectedVehicle === "bike" && (
                      <div className="relative w-full h-full">
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-blue-500"></div>
                        <div className="absolute bottom-0 left-8 w-12 h-12 border-4 border-gray-800 rounded-full"></div>
                        <div className="absolute bottom-0 right-8 w-12 h-12 border-4 border-gray-800 rounded-full"></div>
                        <div className="absolute bottom-7 right-16 w-8 h-10 border-r-4 border-blue-500 rounded-tr-lg"></div>
                      </div>
                    )}
                    {selectedVehicle === "cv" && (
                      <div className="relative w-full h-full">
                        <div className="absolute bottom-6 left-10 w-16 h-14 bg-blue-500 rounded-t-lg"></div>
                        <div className="absolute bottom-6 right-6 w-28 h-14 bg-blue-400 border-l-2 border-gray-600"></div>
                        <div className="absolute bottom-0 left-8 w-8 h-8 bg-gray-800 rounded-full"></div>
                        <div className="absolute bottom-0 left-20 w-8 h-8 bg-gray-800 rounded-full"></div>
                        <div className="absolute bottom-0 right-16 w-8 h-8 bg-gray-800 rounded-full"></div>
                        <div className="absolute bottom-0 right-4 w-8 h-8 bg-gray-800 rounded-full"></div>
                      </div>
                    )}
                    {selectedVehicle === "pcv" && (
                      <div className="relative w-full h-full">
                        <div className="absolute bottom-6 left-4 w-44 h-20 bg-yellow-400 rounded-t-lg"></div>
                        <div className="absolute bottom-12 left-4 w-40 h-10 bg-yellow-500 rounded-t"></div>
                        <div className="absolute bottom-0 left-6 w-8 h-8 bg-gray-800 rounded-full"></div>
                        <div className="absolute bottom-0 left-24 w-8 h-8 bg-gray-800 rounded-full"></div>
                        <div className="absolute bottom-0 right-10 w-8 h-8 bg-gray-800 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
