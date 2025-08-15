import React from 'react'
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
  Hospital,
  Stethoscope,
  Activity,
  Leaf,
  Building,
  Sofa,
  HomeIcon,
} from "lucide-react"

import HomeInsuranceTypes from '../components/HomeInsuranceTypes'

import homeMain from '../assets/homeInsurance/homeMain.png'
import homeWhat from '../assets/homeInsurance/homeWhat.png'

const HomeInsurance = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                Home Insurance Protection
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6">
                Coverage to protect your home and belongings. Safeguard your most valuable asset against unexpected events and enjoy complete peace of mind.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-white text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  Structure Protection
                </span>
                <span className="bg-white text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  Contents Coverage
                </span>
                <span className="bg-white text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  Liability Protection
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={homeMain}
                alt="Motor Insurance Protection"
                className="w-full max-w-[400px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Home Insurance */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">What is Home Insurance?</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              Home insurance is a comprehensive protection plan that safeguards your house, belongings, and provides liability coverage. It protects you financially against damage to your home's structure, loss of personal possessions, and legal claims from accidents that occur on your property.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={homeWhat}
                alt="Understanding Motor Insurance"
                className="w-full max-w-[500px] rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4">Why is it Essential?</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Asset Protection:",
                    text: "Protects your largest financial investment from natural disasters, theft, and accidents.",
                  },
                  {
                    title: "Mortgage Requirement:",
                    text: "Most lenders require home insurance as a condition for approving your home loan.",
                  },
                  {
                    title: "Liability Coverage:",
                    text: "Protects you from lawsuits if someone is injured on your property.",
                  },
                  {
                    title: "Temporary Housing:",
                    text: "Covers additional living expenses if your home becomes uninhabitable.",
                  },
                ].map((item, idx) => (
                  <li className="flex items-start gap-3" key={idx}>
                    <CheckCircle className="h-5 w-5 text-blue-700 mt-1" />
                    <p className="text-sm sm:text-base text-gray-700">
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 text-center mb-10">Benefits of Home Insurance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Building className="h-8 w-8 text-blue-700 mb-2" />,
                title: "Dwelling Protection",
                desc: "Covers the physical structure of your home including walls, roof, floors, and built-in appliances against covered perils like fire, storms, and vandalism.",
              },
              {
                icon: <Sofa className="h-8 w-8 text-blue-700 mb-2" />,
                title: "Personal Property Coverage",
                desc: "Protects your personal belongings including furniture, electronics, clothing, and other possessions against theft, damage, or loss.",
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-700 mb-2" />,
                title: "Liability Protection",
                desc: "Covers legal expenses and damages if someone is injured on your property or if you accidentally damage someone else's property.",
              },
              {
                icon: <HomeIcon className="h-8 w-8 text-blue-700 mb-2" />,
                title: "Additional Living Expenses",
                desc: "Pays for temporary housing, meals, and other living expenses if your home becomes uninhabitable due to a covered loss.",
              },
              {
                icon: <DollarSign className="h-8 w-8 text-blue-700 mb-2" />,
                title: "Replacement Cost Coverage",
                desc: "Provides funds to rebuild or repair your home with materials of similar kind and quality, without depreciation deductions.",
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-700 mb-2" />,
                title: "24/7 Claims Support",
                desc: "Access to round-the-clock claims reporting and support services to help you through the claims process quickly and efficiently.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="border border-blue-100 rounded-lg p-5 sm:p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div>{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl text-blue-700 font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <HomeInsuranceTypes/>

    </div>
  )
}

export default HomeInsurance
