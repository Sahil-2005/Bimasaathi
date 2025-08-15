import React from 'react'
import {
  Shield,
  CheckCircle,
  DollarSign,
  Hospital,
  Stethoscope,
  Activity,
  Leaf,
} from "lucide-react";

import InsuranceTabs from '../components/InsuranceTabs';

import healthLifeMain from '../assets/healthLifeInsurance/healthlifeMain.png';
import hlWhat from '../assets/healthLifeInsurance/hlWhat.png';

const HealthLifeInsurance = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Health & Life Insurance Protection</h1>
              <p className="text-lg md:text-xl mb-6">
                Coverage to protect you and your loved ones. Secure your health and financial future with our tailored insurance solutions.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {["Medical Coverage", "Financial Security", "Family Protection"].map((item, i) => (
                  <span key={i} className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={healthLifeMain}
                alt="Health and Life Insurance"
                className="rounded-lg shadow-lg w-full max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">What is Health & Life Insurance?</h2>
            <p className="text-gray-700 text-lg">
              Health and life insurance are essential financial tools that provide protection against medical expenses and ensure financial security for your loved ones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src={hlWhat}
                alt="Understanding Health & Life Insurance"
                className="rounded-lg shadow-lg w-full max-w-[500px]"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why is it Essential?</h3>
              <ul className="space-y-3">
                {[
                  { title: "Medical Security:", text: "Covers healthcare expenses and protects your savings from being depleted due to medical emergencies." },
                  { title: "Financial Protection:", text: "Ensures your family's financial security and helps them maintain their lifestyle even in your absence." },
                  { title: "Tax Benefits:", text: "Provides tax advantages under various sections of the Income Tax Act." },
                  { title: "Peace of Mind:", text: "Offers reassurance that you and your loved ones are protected against life's uncertainties." },
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

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">Benefits of Health & Life Insurance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Hospital className="h-10 w-10 text-blue-700 mb-2" />, title: "Hospitalization Coverage", desc: "Covers in-patient hospitalization expenses including room charges, doctor fees, surgery costs, and medication." },
              { icon: <Stethoscope className="h-10 w-10 text-blue-700 mb-2" />, title: "Pre & Post Hospitalization", desc: "Covers medical expenses incurred before and after hospitalization, including diagnostic tests, medications, and consultations." },
              { icon: <Activity className="h-10 w-10 text-blue-700 mb-2" />, title: "Critical Illness Coverage", desc: "Provides lump-sum benefits upon diagnosis of specified critical illnesses, helping manage costs and income loss." },
              { icon: <Shield className="h-10 w-10 text-blue-700 mb-2" />, title: "Financial Security", desc: "Life insurance ensures your family can maintain their lifestyle and meet financial obligations." },
              { icon: <DollarSign className="h-10 w-10 text-blue-700 mb-2" />, title: "Tax Benefits", desc: "Premiums qualify for tax deductions under Sections 80D and 80C of the Income Tax Act." },
              { icon: <Leaf className="h-10 w-10 text-blue-700 mb-2" />, title: "Wealth Creation", desc: "ULIPs and endowment plans combine insurance protection with investment opportunities." },
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

      {/* Tabs Component */}
      <InsuranceTabs />

    </div>
  )
}

export default HealthLifeInsurance;
