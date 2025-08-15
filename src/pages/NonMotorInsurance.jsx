import React, { useState } from "react";
import nonmotorMain from '../assets/nonmotorinsurance/nonmotorMain.png';
import nonmotorWhat from '../assets/nonmotorinsurance/nonmotorWhat.png';
import nmFire from '../assets/nonmotorinsurance/nm-fire.png';
import nmMarine from '../assets/nonmotorinsurance/nm-marine.png';
import nmBurglary from '../assets/nonmotorinsurance/nm-burglary.png';
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";

export default function NonMotorInsurance() {
  const [activeTab, setActiveTab] = useState("fire");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Non-Motor Insurance Protection</h1>
              <p className="text-lg md:text-xl mb-6">
                Coverage for your property, business, and assets beyond vehicles. Protect what matters most with our specialized insurance solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Property Protection</span>
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Business Coverage</span>
                <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Asset Security</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={nonmotorMain} alt="Non-Motor Insurance" className="rounded-lg shadow-lg w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Non-Motor Insurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">What is Non-Motor Insurance?</h2>
            <p className="text-gray-700 text-lg">
              Non-motor insurance encompasses all insurance products that protect your property, business, and assets other than vehicles. These policies safeguard against various risks including fire, theft, natural disasters, liability claims, and business interruptions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={nonmotorWhat} alt="Understanding Insurance" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why is it Important?</h3>
              <ul className="space-y-3">
                {[{
                  title: "Legal Requirement:",
                  text: "Some businesses may require specific insurance to operate legally."
                }, {
                  title: "Financial Protection:",
                  text: "Covers losses and damages from various perils."
                }, {
                  title: "Liability Coverage:",
                  text: "Protects from legal liabilities due to accidents."
                }, {
                  title: "Peace of Mind:",
                  text: "Helps you focus on your business without worry."
                }].map((item, idx) => (
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Benefits of Non-Motor Insurance</h2>
            <p className="text-gray-700 text-lg">Explore the key advantages of securing your property and business with our insurance plans.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Protection against unforeseen events",
              "Safeguards physical assets",
              "Ensures business continuity",
              "Legal liability coverage",
              "Risk mitigation for natural disasters",
              "Boosts credibility with stakeholders"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                <CheckCircle className="text-blue-600 h-6 w-6 mt-1" />
                <p className="text-gray-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Insurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Types of Non-Motor Insurance</h2>

          {/* Tabs */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["fire", "marine", "burglary"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTab(type)}
                  className={`py-2 px-4 font-semibold border rounded transition duration-300 ${
                    activeTab === type
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} Insurance
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            <div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {activeTab === "fire" && (
                <>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">🔥 Fire Insurance</h3>
                    <p className="text-gray-700 mb-4">Provides protection against fire-related losses.</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Fire and lightning</li>
                      <li>Explosion</li>
                      <li>Aircraft damage</li>
                      <li>Riot, strike, and malicious damage</li>
                    </ul>
                  </div>
                  <div>
                    <img src={nmFire} alt="Fire Insurance" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
                  </div>
                </>
              )}

              {activeTab === "marine" && (
                <>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">🚢 Marine Insurance</h3>
                    <p className="text-gray-700 mb-4">Covers goods and freight in transit via sea, land, or air.</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Transit damage</li>
                      <li>Theft or piracy</li>
                      <li>Weather-related damage</li>
                    </ul>
                  </div>
                  <div>
                    <img src={nmMarine} alt="Marine Insurance" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
                  </div>
                </>
              )}

              {activeTab === "burglary" && (
                <>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">🔐 Burglary Insurance</h3>
                    <p className="text-gray-700 mb-4">Protects against loss or damage due to burglary and theft.</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Forced entry theft</li>
                      <li>Housebreaking</li>
                      <li>Damage to property during burglary</li>
                    </ul>
                  </div>
                  <div>
                    <img src={nmBurglary} alt="Burglary Insurance" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
