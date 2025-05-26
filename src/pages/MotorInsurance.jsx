import React from "react";
import {
  Shield,
  Car,
  Truck,
  BikeIcon as Motorcycle,
  CheckCircle,
  AlertCircle,
  FileText,
  Clock,
  DollarSign,
} from "lucide-react";

import { motion } from "framer-motion";

import motorMain from '../assets/motorInsurance/motorMain.png';
import motorWhat from '../assets/motorInsurance/motorWhat.png';

import Footer from '../components/Footer';

import InsuranceQuoteForm from "../components/InsuranceQuoteForm";


import MotorInsuranceCoverages from "../components/MotorInsuranceCoverages";


export default function MotorInsurance() {


  
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};


  return (
    <div className="bg-white">
      {/* Hero Section */}


      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Motor Insurance Protection</h1>
              <p className="text-lg md:text-xl mb-6">
                Coverage to protect your vehicle and give you peace of mind on the road.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  24/7 Roadside Assistance
                </span>
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Quick Claims Processing
                </span>
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Cashless Repairs
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={motorMain}
                alt="Motor Insurance Protection"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      </motion.div>

      {/* What is Motor Insurance */}

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">What is Motor Insurance?</h2>
            <p className="text-gray-700 text-lg">
              Motor insurance is a contract between you and the insurance company that protects you against financial
              loss in the event of an accident or theft. In exchange for your paying a premium, the insurance company
              agrees to pay your losses as outlined in your policy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={motorWhat}
                alt="Understanding Motor Insurance"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why is it Important?</h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "Legal Requirement:",
                    text: "In most countries, it's mandatory to have at least third-party motor insurance.",
                  },
                  {
                    title: "Financial Protection:",
                    text: "Covers repair costs after accidents and damage.",
                  },
                  {
                    title: "Liability Coverage:",
                    text: "Protects you from claims if you cause injury or property damage to others.",
                  },
                  {
                    title: "Peace of Mind:",
                    text: "Drive with confidence knowing you're protected against unforeseen events.",
                  },
                ].map((item, idx) => (
                  <li className="flex items-start gap-3" key={idx}>
                    <CheckCircle className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <span className="font-medium">{item.title}</span> {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      </motion.div>


      {/* Benefits of Motor Insurance */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">Benefits of Motor Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="h-10 w-10 text-blue-700 mb-2" />,
                title: "Protection Against Accidents",
                desc: "Covers repair costs for your vehicle in case of accidents, regardless of who is at fault. Provides financial security against unexpected damages.",
              },
              {
                icon: <FileText className="h-10 w-10 text-blue-700 mb-2" />,
                title: "Third-Party Liability",
                desc: "Covers damages or injuries you may cause to other people or their property while driving. Protects you from potentially large financial liabilities.",
              },
              {
                icon: <AlertCircle className="h-10 w-10 text-blue-700 mb-2" />,
                title: "Natural Disaster Coverage",
                desc: "Comprehensive policies protect your vehicle against damage from natural disasters like floods, earthquakes, storms, and other acts of nature.",
              },
              {
                icon: <Clock className="h-10 w-10 text-blue-700 mb-2" />,
                title: "24/7 Roadside Assistance",
                desc: "Many policies include emergency services like towing, battery jump-starts, flat tire changes, and fuel delivery when you're stranded on the road.",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-blue-700 mb-2" />,
                title: "No-Claim Bonus",
                desc: "Receive discounts on your premium for each claim-free year, encouraging safe driving and rewarding responsible vehicle owners.",
              },
              {
                icon: <Car className="h-10 w-10 text-blue-700 mb-2" />,
                title: "Vehicle Replacement",
                desc: "Some comprehensive policies offer new vehicle replacement if your car is declared a total loss within a certain period after purchase.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="border border-blue-100 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="pb-2">{benefit.icon}</div>
                <h3 className="text-xl text-blue-700 font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </motion.div>

      
    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <MotorInsuranceCoverages/>
      </motion.div>
    


    

      {/* Vehicle-Specific Insurance */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">Vehicle-Specific Insurance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Car Insurance */}
            <div className="border border-blue-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Car className="h-16 w-16 text-blue-700" />
              </div>
              <h3 className="text-xl text-center text-blue-700 font-semibold mb-4">Car Insurance</h3>
              <p className="text-gray-700 text-center mb-4">
                Comprehensive coverage for personal cars, sedans, SUVs, and family vehicles.
              </p>
              <ul className="space-y-2">
                {[
                  "Collision and comprehensive coverage",
                  "Personal injury protection",
                  "Family driver coverage",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Two-Wheeler Insurance */}
            <div className="border border-blue-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Motorcycle className="h-16 w-16 text-blue-700" />
              </div>
              <h3 className="text-xl text-center text-blue-700 font-semibold mb-4">Two-Wheeler Insurance</h3>
              <p className="text-gray-700 text-center mb-4">
                Insurance for motorcycles, scooters, and bikes with coverage for theft, damage, and third-party liability.
              </p>
              <ul className="space-y-2">
                {[
                  "Third-party and own-damage coverage",
                  "Affordable premium plans",
                  "Add-ons like zero depreciation",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial Vehicle Insurance (Optional) */}
            <div className="border border-blue-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Truck className="h-16 w-16 text-blue-700" />
              </div>
              <h3 className="text-xl text-center text-blue-700 font-semibold mb-4">Commercial Vehicle Insurance</h3>
              <p className="text-gray-700 text-center mb-4">
                Designed for trucks, vans, taxis, and commercial fleets. Offers liability and comprehensive protection.
              </p>
              <ul className="space-y-2">
                {[
                  "Driver and goods protection",
                  "Theft and accident coverage",
                  "Legal liability support",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      </motion.div>


      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <InsuranceQuoteForm/>
      </motion.div>

    </div>
  );
}
