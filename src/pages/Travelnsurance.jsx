import {
  CalendarDays,
  Globe,
  Luggage,
  ShieldCheck,
  Stethoscope,
  CheckCircle,
  Clock,
} from "lucide-react";

import React from "react";
import { motion } from "framer-motion";

import travelMain from "../assets/traveInsurance/travelMain.png";
import travelWhat from "../assets/traveInsurance/travelWhat.png";

import TravelInsuranceTypes from "../components/TravelInsuranceTypes";

const Travelnsurance = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <div>
      {/* Hero Section */}

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="bg-blue-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Travel Insurance Protection
                </h1>
                <p className="text-lg md:text-xl mb-6">
                  coverage for your journeys. Travel with confidence knowing
                  you're protected against unexpected events, medical
                  emergencies, and travel disruptions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    Global Coverage
                  </span>
                  <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    24/7 Assistance
                  </span>
                  <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    Hassle-Free Claims
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={travelMain}
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

      {/* What is Travel Insurance */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                What is Travel Insurance?
              </h2>
              <p className="text-gray-700 text-lg">
                Travel insurance is a specialized coverage that protects you
                against unexpected events and emergencies that could occur
                before or during your trip. It provides financial protection and
                assistance services when things don't go as planned, giving you
                peace of mind to enjoy your journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={travelWhat}
                  alt="Understanding Motor Insurance"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Why is it Important?
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Medical Protection:",
                      text: "Covers unexpected medical emergencies and evacuation costs abroad, which can be extremely expensive.",
                    },
                    {
                      title: "Trip Protection:",
                      text: "Safeguards your financial investment in your trip against cancellations, interruptions, and delays.",
                    },
                    {
                      title: "Baggage Protection:",
                      text: "Provides compensation for lost, stolen, or damaged luggage and personal belongings.",
                    },
                    {
                      title: "24/7 Assistance:",
                      text: "Offers round-the-clock support services, including help with lost passports, language translation, and emergency arrangements",
                    },
                  ].map((item, idx) => (
                    <li className="flex items-start gap-3" key={idx}>
                      <CheckCircle className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">
                        <span className="font-medium">{item.title}</span>{" "}
                        {item.text}
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
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
              Benefits of Travel Insurance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <Stethoscope className="h-10 w-10 text-blue-700 mb-2" />
                  ),
                  title: "Medical Emergency Coverage",
                  desc: "Covers medical expenses, hospitalization costs, and emergency medical evacuation when you fall ill or get injured during your trip.",
                },
                {
                  icon: (
                    <CalendarDays className="h-10 w-10 text-blue-700 mb-2" />
                  ),
                  title: "Trip Cancellation & Interruption",
                  desc: "Reimburses non-refundable trip costs if you need to cancel or cut short your trip due to covered reasons like illness, injury, or family emergency.",
                },
                {
                  icon: <Luggage className="h-10 w-10 text-blue-700 mb-2" />,
                  title: "Baggage & Personal Belongings",
                  desc: "Provides compensation for lost, stolen, or damaged luggage and personal items during your journey, including delayed baggage expenses.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-blue-700 mb-2" />,
                  title: "Travel Delay Protection",
                  desc: "Covers additional accommodation, meal costs, and transportation expenses when your trip is delayed due to covered reasons like weather or carrier issues.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-blue-700 mb-2" />,
                  title: "24/7 Global Assistance",
                  desc: "Access to round-the-clock emergency assistance services, including medical referrals, legal help, lost passport assistance, and language translation.",
                },
                {
                  icon: (
                    <ShieldCheck className="h-10 w-10 text-blue-700 mb-2" />
                  ),
                  title: "Personal Liability Coverage",
                  desc: "Protects you against financial liability if you accidentally injure someone or damage their property during your trip.",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="border border-blue-100 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="pb-2">{benefit.icon}</div>
                  <h3 className="text-xl text-blue-700 font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <TravelInsuranceTypes />
      </motion.div>
    </div>
  );
};

export default Travelnsurance;
